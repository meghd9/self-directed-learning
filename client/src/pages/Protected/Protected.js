import React, { useEffect, useState } from 'react'; // Import React and hooks
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Content from '../Content/Content'; // Import the Content component
import Main from '../Main/Main'; // Import the Main component
import Welcome from '../Welcome/Welcome'; // Import the Welcome component

/**
 * Protected component that handles user authentication and route protection.
 * - Checks for the presence of a token in localStorage to determine if the user is authenticated.
 * - Redirects to the home page if the user is not authenticated.
 * - Renders different components based on the authentication status.
 * 
 * @returns {JSX.Element} The rendered component based on authentication status.
 */
const Protected = () => {
    // State to manage authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Hook to handle navigation between routes
    const navigate = useNavigate();

    /**
     * Effect hook to check authentication status on component mount and navigate if not authenticated.
     * Runs on initial render and whenever the navigate function changes.
     */
    useEffect(() => {
        // Retrieve token from localStorage
        const token = localStorage.getItem('token');

        // Check if the token exists
        if (token) {
            // If token is present, user is authenticated
            setIsAuthenticated(true);
        } else {
            // If token is not present, user is not authenticated
            setIsAuthenticated(false);

            // Redirect to home page if not authenticated
            navigate('/'); 
        }
    }, [navigate]); // Dependency array ensures useEffect runs when navigate changes

    // Conditionally render based on authentication status
    if (isAuthenticated) {
        // Render Welcome component if the user is authenticated
        return <Welcome />;
    } else {
        // Render Main component if the user is not authenticated
        return <Main />;
    }
};

export default Protected;
