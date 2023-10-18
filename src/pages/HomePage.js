import React from 'react';

const HomePage = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
        },
        title: {
            fontSize: '36px',
            textAlign: 'center'
        },
        description: {
            fontSize: '18px',
            textAlign: 'center',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Phonebook!</h1>
            <p style={styles.description}>"Phonebook Application" is a user-friendly web application that allows users to manage their contacts and store their phonebook. Users can easily add, edit, or delete contacts, and each contact can include a name and phone number. The application provides a convenient way to organize and access a user's list of contacts, ensuring they can quickly find and communicate with the people they need.</p>
        </div>
    );
};

export default HomePage;
