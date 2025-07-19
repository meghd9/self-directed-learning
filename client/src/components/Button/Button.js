import React from 'react';  // Import the React library to build UI components
import './style.css';  // Import the CSS file for custom styling of the button

/**
 * Button Component
 *
 * This component represents a reusable button that can be customized
 * through various props. It is designed to be flexible, allowing
 * developers to easily change its appearance and behavior.
 *
 * @component
 * @example
 * const handleClick = () => alert('Button clicked!');
 * return (
 *   <Button 
 *     text="Click Me" 
 *     onClick={handleClick} 
 *     backgroundColor="blue" 
 *     textColor="white" 
 *     type="button"
 *   />
 * );
 *
 * @param {Object} props - The properties object that allows customization.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.backgroundColor - The background color of the button.
 * @param {string} [props.textColor='white'] - The text color of the button. Defaults to 'white' if not provided.
 * @param {string} [props.type='submit'] - The type attribute of the button element. Defaults to 'submit'.
 *
 * @returns {JSX.Element} A styled button element.
 */
const Button = ({ text, onClick, backgroundColor, textColor = 'white', type = 'submit' }) => {
  // Define the style object for the button based on the provided props
  const buttonStyle = {
    backgroundColor: backgroundColor,  // Use the background color provided via props
    color: textColor,  // Use the text color provided via props, defaulting to 'white'
  };

  return (
    // Render the button element with the provided styles, event handler, and attributes
    <button 
      className="custom-button"  // Apply custom CSS class for additional styling
      style={buttonStyle}  // Apply inline styles derived from the buttonStyle object
      onClick={onClick}  // Attach the onClick event handler from props
      type={type}  // Set the button type attribute, defaulting to 'submit'
    >
      {text}  {/* Render the text inside the button */}
    </button>
  );
}

export default Button;  // Export the Button component for use in other parts of the application
