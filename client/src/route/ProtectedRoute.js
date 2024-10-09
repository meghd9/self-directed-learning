import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * A higher-order component that wraps protected routes.
 * It checks for the presence of an authentication token in localStorage.
 * If the token is not present, it redirects the user to the homepage.
 * If the token is present, it renders the child components (protected content).
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render if the user is authenticated.
 * @returns {React.ReactNode} - Either the child components or a redirect component.
 */
const ProtectedRoute = ({ children }) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    // If no token is found, redirect the user to the homepage
    if (!token) {
        return <Navigate to="/" />;
    }

    // If a token is found, render the child components (protected content)
    return children;
};

export default ProtectedRoute;
