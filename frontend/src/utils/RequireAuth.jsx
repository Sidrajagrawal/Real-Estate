// src/utils/RequireAuth.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem('access');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default RequireAuth;
