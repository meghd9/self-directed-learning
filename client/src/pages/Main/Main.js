import React from 'react'; // Importing React library
import './style.css'; // Importing the CSS stylesheet for styling

/**
 * Main functional component that renders the main content of the page.
 *
 * This component displays a banner or introductory text encouraging users to explore machine learning.
 * It uses a `div` with specific class names for styling, as defined in the imported CSS file.
 *
 * @returns {JSX.Element} The rendered JSX for the Main component.
 */
const Main = () => {
  return (
    <div className='main'>
      {/* Container for the main content */}
      <div className='text-content'>
        {/* Paragraph element displaying a flag or introductory message */}
        <p className='flag-text'>
          Explore the world of machine learning!
        </p>
      </div>
    </div>
  );
}

export default Main; // Exporting the Main component for use in other parts of the application
