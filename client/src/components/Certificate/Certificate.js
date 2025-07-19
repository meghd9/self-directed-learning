import React, { useCallback, useEffect, useRef, useState } from 'react'; // Import necessary hooks from React
import jsPDF from "jspdf"; // Import jsPDF for generating PDFs
import certificate from '../../assets/Images/certificate.png'; // Import the certificate image
import Button from '../Button/Button'; // Import the custom Button component
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import './style.css'; // Import the CSS file for styling
import config from '../../config/Apiconfig'; // Import the API configuration

/**
 * Certificate Component
 *
 * This component displays a certificate that a user can download if they are eligible.
 * The user's eligibility is based on their progress, which is fetched from an API.
 *
 * @component
 */
const Certificate = () => {
  // Declare state variables
  const [name, setName] = useState(''); // Store the user's name
  const [eligible, setEligible] = useState(0); // Store the user's progress (0-100%)

  // Hook for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handles navigation to different paths.
   * 
   * @param {string} path - The path to navigate to.
   */
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  /**
   * useEffect Hook
   *
   * This hook is used to call the getName function when the component mounts or when the name changes.
   */
  useEffect(() => {
    getName(); // Call getName function when the component mounts or when the name changes
  }, [name]);

  /**
   * getName Function
   *
   * This function retrieves the user's name and progress by making an API call.
   * The progress value determines whether the user is eligible to download the certificate.
   *
   * @async
   * @function getName
   * @returns {Promise<void>}
   */
  const getName = async () => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the JWT token to extract user data
    const response = await axios.get(`${config.baseURL}/${decoded.userId}`); // Make an API call to get user data
    console.log('response.data.data', response.data.data.progress.total); // Log the progress value for debugging
    setName(response.data.data.name); // Update the name state with the retrieved name
    setEligible(response.data.data.progress.total); // Update the eligible state with the progress value
  }

  /**
   * generatePDF Function
   *
   * This function generates a PDF version of the certificate with the user's name.
   *
   * @function generatePDF
   * @returns {void}
   */
  const generatePDF = useCallback(() => {
    const pdf = new jsPDF({
      orientation: 'landscape', // Set orientation to landscape
      unit: 'px', // Set units to pixels
      format: [800, 550], // Set the size of the PDF
    });

    const img = new Image(); // Create a new image object
    img.src = certificate; // Set the source of the image to the certificate image
    img.onload = () => {
      pdf.addImage(img, 'PNG', 0, 0, 800, 550); // Add the certificate image to the PDF
      pdf.setFont('times', 'italic'); // Set the font to Times Italic
      pdf.setFontSize(32); // Set the font size for the name
      pdf.text(name, 400, 275, { align: 'center' }); // Add the user's name to the PDF, centered
      pdf.save('certificate.pdf'); // Save the generated PDF with the filename 'certificate.pdf'
    };
  }, [name]);

  return (
    <>
      {eligible === 100 ? ( // Check if the user is eligible for the certificate
        <div className='container'>
          <div className='certificate'> {/* Certificate container */}
            <img src={certificate} alt='Certificate' className='certificate-image' /> {/* Certificate image */}
            <div className='name'>
              <h1>{name}</h1> {/* Display the user's name on the certificate */}
            </div>
          </div>
          <Button text="Download" onClick={generatePDF} /> {/* Button to trigger PDF generation and download */}
        </div>
      ) : ( 
        <div className='wrap'>
          <h1>Please complete all tests in the Quiz section to get your certificate.</h1> {/* Message for ineligible users */}
          <p>To unlock your certificate, you need to score 100% by completing all the tests available in the Quiz section. Keep up the hard work!</p>
          <div className="back">
            <Button type="button" text="Back" onClick={() => handleNavigation("/content")}/> {/* Button to go back to the previous page */}
          </div>
        </div>
      )}
    </>
  );
};

export default Certificate; // Export the Certificate component
