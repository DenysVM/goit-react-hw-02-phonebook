import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/Auth/authOperations';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const ContactsPage = React.lazy(() => import('../pages/ContactsPage'));

function App() {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(authOperations.getCurrentUser());
 }, [dispatch]);
  
  
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/contacts" 
            element={
              <PrivateRoute redirectTo="/">
                <ContactsPage /> 
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
