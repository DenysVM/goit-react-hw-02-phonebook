import React from 'react';

const UserMenu = ({ email, onLogout }) => (
    <div>
        <p>{email}</p>
        <button onClick={onLogout}>Logout</button>
    </div>
);

export default UserMenu;
