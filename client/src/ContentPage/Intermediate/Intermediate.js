import React from "react";
import Quiz from "../../components/Quiz/Quiz";

/**
 * Intermediate component for displaying content based on the selected topic.
 *
 * @param {Object} props - The component props.
 * @param {string} props.topic - The topic to display content for.
 * @returns {JSX.Element} The rendered component.
 */
const Intermediate = ({ topic }) => {
  return (
    <div>
      <h1>{topic}</h1>

      {/* Render content based on the selected topic */}
      {topic === "Code ML Algorithms" && (
        <div>
          {/* Main heading for the section */}
          <h2>Code the algorithms</h2>

          {/* Introduction paragraph explaining the importance of coding ML algorithms from scratch */}
          <p>
            Understanding and implementing machine learning algorithms from
            scratch is a valuable skill for gaining deeper insights into how
            these algorithms work. Coding ML algorithms helps in grasping the
            underlying mathematical concepts and the intricacies involved in
            their execution.
          </p>

          {/* Subheading for reasons to code ML algorithms */}
          <h3>Why code algorithms?</h3>

          {/* Paragraph introducing the benefits of coding ML algorithms from scratch */}
          <p>
            Coding machine learning algorithms from scratch offers several
            benefits:
          </p>

          {/* Unordered list detailing the benefits of coding ML algorithms */}
          <ul>
            {/* List item explaining the benefit of deep understanding */}
            <li>
              <strong>Deep Understanding:</strong> Writing algorithms from
              scratch helps you understand the core principles, mathematical
              foundations, and assumptions behind each algorithm.
            </li>

            {/* List item explaining the benefit of customization */}
            <li>
              <strong>Customization:</strong> Implementing your own algorithms
              allows you to customize and tweak them to suit specific needs and
              datasets.
            </li>

            {/* List item explaining the benefit of improved debugging skills */}
            <li>
              <strong>Debugging Skills:</strong> Building algorithms from the
              ground up improves your debugging skills and enhances your ability
              to identify and fix issues in complex codebases.
            </li>

            {/* List item explaining the benefit of performance optimization */}
            <li>
              <strong>Performance Optimization:</strong> Understanding the inner
              workings of algorithms helps you optimize their performance,
              leading to more efficient and faster models.
            </li>
          </ul>
        </div>
      )}

      {/* Check if the topic is 'Quiz' and render the Quiz component */}
      {topic === "Quiz" && (
        <div>
          <Quiz level="intermediate" />
        </div>
      )}
    </div>
  );
};

export default Intermediate;
