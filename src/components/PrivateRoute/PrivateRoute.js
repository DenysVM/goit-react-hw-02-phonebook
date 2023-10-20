import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from '../../redux/Auth/authSelectors';


const PrivateRoute = ({ children, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;