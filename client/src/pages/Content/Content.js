import React, { useState } from "react";
import "./style.css";
import Foundation from "../../ContentPage/Foundation/Foundation";
import Beginner from "../../ContentPage/Beginner/Beginner";
import Intermediate from "../../ContentPage/Intermediate/Intermediate";
import Advance from "../../ContentPage/Advance/Advance";
import Progress from "../../components/Progress/Progress";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

/**
 * Content Component
 * 
 * This component renders the content page that allows users to select topics
 * and sub-topics, view the content for the selected sub-topic, and track their 
 * progress. Users can navigate to the certificate page by clicking on the 
 * button in the progress section.
 * 
 * @component
 */

const Content = () => {
  // State to track the currently active topic, initially set to null.
  const [activeTopic, setActiveTopic] = useState(null);
  
  // State to store the selected content paragraph for display, initially empty.
  const [contentParagraph, setContentParagraph] = useState("");
  
  // Hook to programmatically navigate to different routes.
  const navigate = useNavigate();

  /**
   * Toggle the visibility of sub-topics for a given topic.
   * 
   * This function handles the logic of activating or deactivating a topic when
   * a user clicks on it. If the clicked topic is already active, it will be deactivated.
   * Otherwise, it will activate the clicked topic and deactivate any previously active topic.
   * 
   * @param {string} topic - The topic to toggle.
   */

  // Function to toggle the active topic
  const toggleTopic = (topic) => {
    // Clear the displayed content when switching topics to ensure only relevant content is shown.
    setContentParagraph("");
    
    // Toggle the active topic. If the same topic is clicked, it will deactivate.
    setActiveTopic(activeTopic === topic ? null : topic);
  };

  /**
   * Display content for the selected sub-topic.
   * 
   * This function updates the content paragraph with the content corresponding
   * to the selected sub-topic, which will be displayed in the right section of the page.
   * 
   * @param {string} content - The content paragraph to display.
   */
  const displayContent = (content) => {
    // Update the state with the selected content to be displayed.
    setContentParagraph(content);
  };

  return (
    <div className="content">
      {/* Left section with topics and progress */}
      <div id="c1">
        <h1>Topic</h1>
        <div className="sub-topic">
          <ul>
            {/* Foundation topic and its sub-topics */}
            <li>
              <span onClick={() => toggleTopic("foundation")}>Foundation</span>
              {activeTopic === "foundation" && (
                <ul>
                  <li onClick={() => displayContent("How Do I Get Started?")}>
                    How Do I Get Started?
                  </li>
                  <li onClick={() => displayContent("Step-by-Step Process")}>
                    Step-by-Step Process
                  </li>
                  <li onClick={() => displayContent("Quiz")}>Quiz</li>
                </ul>
              )}
            </li>
            
            {/* Beginner topic and its sub-topics */}
            <li>
              <span onClick={() => toggleTopic("beginner")}>Beginner</span>
              {activeTopic === "beginner" && (
                <ul>
                  <li onClick={() => displayContent("Python Skills")}>
                    Python Skills
                  </li>
                  <li onClick={() => displayContent("Understand ML Algorithms")}>
                    Understand ML Algorithms
                  </li>
                  <li onClick={() => displayContent("Quiz")}>Quiz</li>
                </ul>
              )}
            </li>
            
            {/* Intermediate topic and its sub-topics */}
            <li>
              <span onClick={() => toggleTopic("intermediate")}>Intermediate</span>
              {activeTopic === "intermediate" && (
                <ul>
                  <li onClick={() => displayContent("Code ML Algorithms")}>
                    Code ML Algorithms
                  </li>
                  <li onClick={() => displayContent("Quiz")}>Quiz</li>
                </ul>
              )}
            </li>
            
            {/* Advance topic and its sub-topics */}
            <li>
              <span onClick={() => toggleTopic("advance")}>Advance</span>
              {activeTopic === "advance" && (
                <ul>
                  <li onClick={() => displayContent("Natural Language (Text)")}>
                    Natural Language (Text)
                  </li>
                  <li onClick={() => displayContent("Computer Vision")}>
                    Computer Vision
                  </li>
                  <li onClick={() => displayContent("Quiz")}>Quiz</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        
        {/* Progress section with a download button leading to the certificate page */}
        <div className="progress">
          <Progress />
          <p className="progress-bar-name">PROGRESS</p>
          <div className="download-button">
            <Button
              type="button"
              text="Certificate"
              onClick={() => navigate("/certificate")}
            />
          </div>
        </div>
      </div>

      {/* Right section to display content based on the active topic */}
      <div id="c2">
        {activeTopic === null ? (
          <div className="start-journey">
            <h1>START LEARNING</h1>
            <h2>Click on the modules to dive into the journey!</h2>
          </div>
        ) : (
          <>
            {activeTopic === "foundation" && <Foundation topic={contentParagraph} />}
            {activeTopic === "beginner" && <Beginner topic={contentParagraph} />}
            {activeTopic === "intermediate" && <Intermediate topic={contentParagraph} />}
            {activeTopic === "advance" && <Advance topic={contentParagraph} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
