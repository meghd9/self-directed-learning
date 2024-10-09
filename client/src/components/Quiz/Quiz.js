import React, { useEffect, useState } from "react"; // Importing necessary React hooks
import {
  AdvanceQuiz,
  BeginnerQuiz,
  FoundationQuiz,
  IntermediateQuiz,
  AssessmentQuiz,
} from "../../data/quiz"; // Importing different quiz data based on level
import axios from "axios"; // Importing axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import "./style.css"; // Importing CSS for styling
import Button from "../../components/Button/Button"; // Importing a custom Button component
import config from "../../config/Apiconfig"; // Importing configuration for API base URL

/**
 * Quiz component for displaying quizzes based on the selected level.
 *
 * @param {Object} props - The component props.
 * @param {string} props.level - The level of the quiz (e.g., foundation, beginner, intermediate, advance, assessment).
 * @returns {JSX.Element} The rendered component.
 */
const Quiz = ({ level }) => {
  // State to keep track of the currently active question index
  const [activeQuestion, setActiveQuestion] = useState(0);
  // State to keep track of the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");
  // State to determine whether to show the result or not
  const [showResult, setShowResult] = useState(false);
  // State to keep track of which answer was selected
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  // State to store the result of the quiz
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const navigate = useNavigate(); // Hook to handle navigation
  const [progressUpdated, setProgressUpdated] = useState(false); // State to prevent multiple progress updates

  /**
   * Effect hook that triggers when the result state changes.
   * Calls the function to update the user's progress based on the quiz score.
   */
  useEffect(() => {
    progressResult();
  }, [result]);

  /**
   * Updates the user's progress based on the quiz score.
   * Sends a PUT request to update the progress in the database.
   */
  const progressResult = async () => {
    // Retrieve token from local storage
    const token = localStorage.getItem("token");
    // Decode the token to get user ID
    const decoded = JSON.parse(atob(token.split(".")[1]));

    // Check if progress has already been updated
    if (progressUpdated) {
      return;
    }

    // Initialize updateData to store the progress update
    let updateData = {};

    // Determine the progress update based on the level and score
    // if (result.score >= 65) {    // Original code
      if (result.score >= 5) {        // For demonstration
      switch (level) {
        case "foundation":
          updateData = { "progress.foundation": 25 };
          break;
        case "beginner":
          updateData = { "progress.beginner": 25 };
          break;
        case "intermediate":
          updateData = { "progress.intermediate": 25 };
          break;
        case "advance":
          updateData = { "progress.advance": 25 };
          break;
        default:
          return;
      }

      try {
        // Send PUT request to update the user's progress
        await axios.put(`${config.baseURL}/${decoded.userId}`, updateData);
        // Mark progress as updated to avoid duplicate updates
        setProgressUpdated(true);
      } catch (error) {
        // Log any error that occurs during the progress update
        console.error("Error updating progress:", error);
      }
    }
  };

  // Determine the appropriate quiz data based on the level prop
  let quizData;
  quizData =
    level === "foundation"
      ? FoundationQuiz
      : level === "beginner"
      ? BeginnerQuiz
      : level === "intermediate"
      ? IntermediateQuiz
      : level === "advance"
      ? AdvanceQuiz
      : level === "assessment"
      ? AssessmentQuiz
      : null;

  // Destructure questions from the selected quiz data
  // const { questions } = quizData || { questions: [] };   // Original code

  const questions =
    level === "assessment"
      ? quizData.questions
      : quizData.questions.slice(0, 2);  // For demonstration, not applied to readiness assessment

  // Destructure current question, choices, and correctAnswer
  const { question, choices, correctAnswer } = questions[activeQuestion] || {};

  /**
   * Handles the event when the "Next" button is clicked.
   * Updates the result based on the selected answer and moves to the next question or shows the result.
   */
  const onClickNext = () => {
    // Reset the selected answer index
    setSelectedAnswerIndex(null);
    // Update the result based on whether the selected answer was correct
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    // Move to the next question or show the result if the last question has been reached
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  /**
   * Handles the event when an answer is selected.
   * Updates the selected answer and checks if it is correct.
   * 
   * @param {string} answer - The selected answer.
   * @param {number} index - The index of the selected answer.
   */
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer === correctAnswer);
  };

  /**
   * Adds a leading zero to single-digit numbers for formatting.
   * 
   * @param {number} number - The number to format.
   * @returns {string} The formatted number with a leading zero if needed.
   */
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {/* Render quiz questions and options if result is not yet shown */}
      {!showResult ? (
        <div>
          <div>
            {/* Display the current question number and total number of questions */}
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          {/* Display the current question */}
          <h2>{question}</h2>
          <ul>
            {/* Render each choice as a list item */}
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            {/* Button to move to the next question or finish the quiz */}
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          {/* Display result based on quiz level */}
          {level === "assessment" ? (
            <div className="assessment-result">
              <h3>Congratulations!</h3>
              {/* Show different messages based on the score */}
              {result.score < 10 ? (
                <p>
                  You have completed the assessment! Your knowledge level is
                  foundation.
                </p>
              ) : result.score < 20 ? (
                <p>
                  You have completed the assessment! Your knowledge level is
                  beginner.
                </p>
              ) : result.score < 30 ? (
                <p>
                  You have completed the assessment! Your knowledge level is
                  intermediate.
                </p>
              ) : (
                <p>
                  You have completed the assessment! Your knowledge level is
                  advance.
                </p>
              )}
              <Button
                type="button"
                text="Start learning"
                onClick={() => navigate("/content")}
              />
            </div>
          ) : (
            <div>
              <h3>Result</h3>
              {/* Display detailed result information */}
              <p>
                Total Question: <span>{questions.length}</span>
              </p>
              <p>
                Total Score:<span> {result.score}</span>
              </p>
              <p>
                Correct Answers:<span> {result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
              </p>

              {/* Display pass or fail message based on the score */}
              {/* {result.score > 65 ? (    // Original code */}
              {result.score > 5 ? (    
                <div style={{ color: "green" }}>
                  Congratulations! You have passed the test. Your progress has
                  been successfully recorded.
                </div>
              ) : (
                <div style={{ color: "red" }}>
                  Oops! It looks like you didn't pass this time. Keep trying!
                  Your progress won't be recorded.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
