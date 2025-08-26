import React from 'react';
import './style.css';
import img from '../assets/Images/logo.png';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // Hook for navigation
  const navigate = useNavigate();
  
  // Get the token from localStorage to determine if the user is logged in
  const token = localStorage.getItem('token');

  // Navigate to the protected home page when the logo or button is clicked
  const handleHomePage = () => {
    navigate('/protected');
  };

  // Navigate to the login page
  const handleLogin = () => {
    navigate('/login');
  };

  // Navigate to the register page
  const handleRegister = () => {
    navigate('/register');
  };

  // Clear localStorage to log out the user and navigate to the homepage
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className='wrapper'>
      <div className='navbar'>
        {/* Logo image that navigates to the protected home page on click */}
        <img className='logo' src={img} alt='Logo' onClick={handleHomePage} />
        {/* Button to navigate to the protected home page */}
        <Button text="LEARNIFY" onClick={handleHomePage} />
      </div>
      <div className='side-wrapper'>
        {/* Conditional rendering: Show logout button if token exists (user is logged in) */}
        {
          token && (
            <Button text="Logout" onClick={handleLogout} />
          )
        }
        {/* Conditional rendering: Show login and register buttons if token does not exist (user is not logged in) */}
        {
          !token && (
            <>
              <Button text="Login" onClick={handleLogin} />
              <Button text="Register" onClick={handleRegister} />
            </>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
