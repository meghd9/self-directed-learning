import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./style.css";

/**
 * The `Welcome` component renders a welcome message and navigation buttons
 * for the course. It allows users to navigate to different sections of the
 * application such as starting the course, taking an assessment quiz, or
 * setting learning goals.
 * 
 * @component
 */
const Welcome = () => {
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

  return (
    <div className="welcome">
      {/* Container for the welcome message */}
      <div className="text-content">
        <b>WELCOME TO THE COURSE!</b>
        <p className="text-intro">
          Take an assessment readiness quiz, set learning goals or start the course right away
        </p>
      </div>
      {/* Container for navigation buttons */}
      <div className="btn-container">
        {/* Button to start learning */}
        <div className="button-learning">
          <Button
            type="button"
            text="Start learning"
            onClick={() => handleNavigation('/content')} // Navigate to the content page
          />
        </div>
        {/* Button to assess learning */}
        <div className="button-assess">
          <Button
            type="button"
            text="Assess learning"
            onClick={() => handleNavigation('/assessment-quiz')} // Navigate to the assessment quiz page
          />
        </div>
        {/* Button to set learning goals */}
        <div className="button-goal">
          <Button
            type="button"
            text="Set goals"
            onClick={() => handleNavigation('/goal')} // Navigate to the goals page
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
