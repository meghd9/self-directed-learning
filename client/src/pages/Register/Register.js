import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests
import './style.css'; // Import CSS for styling
import Button from '../../components/Button/Button'; // Import custom Button component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import config from '../../config/Apiconfig'; // Import configuration settings

/**
 * Register component for user registration.
 * - Manages form state and handles form submission for user registration.
 * - Validates password confirmation and communicates with the server to register a new user.
 * - Navigates to the login page upon successful registration.
 * 
 * @returns {JSX.Element} The rendered Register component.
 */
const Register = () => {
    // State variables to hold form input values
    const [name, setName] = useState(''); // State for user's full name
    const [username, setUserName] = useState(''); // State for user's email (username)
    const [password, setPassword] = useState(''); // State for user's password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirming user's password
    const [phone, setPhone] = useState(''); // State for user's phone number
    const [age, setAge] = useState(''); // State for user's age

    // Hook for navigation
    const navigate = useNavigate();

    /**
     * Handles form submission for user registration.
     * - Prevents default form submission behavior.
     * - Validates that the password and confirm password fields match.
     * - Creates a user object with form data.
     * - Sends a POST request to the registration endpoint.
     * - Clears the form and navigates to the login page upon successful registration.
     * - Handles and displays errors if the registration fails.
     * 
     * @param {React.FormEvent} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh on form submission

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert("Passwords don't match"); // Show an alert if passwords do not match
            return;
        }

        // Create a user object with the form data
        const user = {
            name,
            username,
            password,
            phone,
            age,
        };

        try {
            // Send a POST request to register the user
            const response = await axios.post(`${config.baseURL}`, user);
            console.log('response', response.data);

            // If registration is successful
            if (response.data.success) {
                alert(response.data.message); // Display a success message
                // Clear the form fields
                setName('');
                setUserName('');
                setPassword('');
                setConfirmPassword('');
                setPhone('');
                setAge('');
                // Navigate to the login page
                navigate('/login');
            }
        } catch (error) {
            // Handle errors during the registration process
            console.log('error', error); // Log the error to the console
            alert(error.response?.data?.message || 'An error occurred'); // Display an error message
        }
    };

    return (
        <div className="register-container">
            <h2>REGISTER</h2>
            {/* Form for user registration */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group-row">
                    <div className="form-group half-width">
                        <label>Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group half-width">
                        <label>Age</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {/* Submit button */}
                <Button type="submit" text="Register" />
            </form>
        </div>
    );
};

export default Register;
