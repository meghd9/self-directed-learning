import React, { useState } from "react"; // Importing React and useState hook
import "./style.css"; // Importing CSS styles for the component
import Button from "../../components/Button/Button"; // Importing custom Button component
import axios from "axios"; // Importing axios for HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import config from "../../config/Apiconfig"; // Importing API configuration settings

/**
 * LogIn Component
 * 
 * This component renders a login form that allows users to enter their username and password.
 * On form submission, it sends a login request to the server and handles the response.
 *
 * @returns {JSX.Element} The rendered Login component
 */
const LogIn = () => {
  // State variables to manage input fields for username and password
  const [username, setUserName] = useState(""); // Holds the username entered by the user
  const [password, setPassword] = useState(""); // Holds the password entered by the user

  // Hook to navigate programmatically between routes
  const navigate = useNavigate();

  /**
   * Handles the form submission for login
   * 
   * This function sends a POST request to the login API endpoint with the entered username
   * and password. On successful login, it stores the token in localStorage, displays a success
   * message, clears the input fields, and navigates to the protected route. In case of an error,
   * it logs the error and displays an error message to the user.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   * @returns {Promise<void>} A promise that resolves when the login process is complete
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const user = {
      username, // Username entered by the user
      password, // Password entered by the user
    };

    try {
      // Send a POST request to the login API endpoint with user credentials
      const response = await axios.post(`${config.baseURL}/login`, user);
      
      // Extract the token from the response data
      const token = response.data.data.split(" ")[1];

      // If login is successful, store the token in localStorage
      if (response.data.success) {
        localStorage.setItem("token", token);

        // Display a success message to the user
        alert(response.data.message);

        // Clear the input fields
        setUserName("");
        setPassword("");

        // Navigate to the protected route after successful login
        navigate("/protected");
      }
    } catch (error) {
      // Log the error to the console for debugging
      console.log("error", error);

      // Display an error message to the user
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="email" // Input type for email addresses
            value={username} // Current value of the username input field
            placeholder="Enter your email" // Placeholder text for the input field
            onChange={(e) => setUserName(e.target.value)} // Updates username state on change
            required // Makes the field mandatory
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" // Input type for passwords
            value={password} // Current value of the password input field
            placeholder="Enter your password" // Placeholder text for the input field
            onChange={(e) => setPassword(e.target.value)} // Updates password state on change
            required // Makes the field mandatory
          />
        </div>
        <Button type="submit" text="Login" /> {/* Submit button to trigger form submission */}
      </form>
    </div>
  );
};

export default LogIn;
