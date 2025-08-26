import React from "react";
import Quiz from "../../components/Quiz/Quiz";
import img from "../../assets/Images/1.png";
import img2 from "../../assets/Images/scatter.png";
import style from "./style.css";
import neural from "../../assets/Images/neural-network.png";
import train from "../../assets/Images/ml-test.png";
import train2 from "../../assets/Images/train-test-example.png";
import perceptron from "../../assets/Images/perceptron.jpg";
import overview from "../../assets/Images/ml-overview.png";
import concept from "../../assets/Images/concept.png";

/**
 * Beginner component for displaying content based on the selected topic.
 *
 * @param {Object} props - The component props.
 * @param {string} props.topic - The topic to display content for.
 * @returns {JSX.Element} The rendered component.
 */

const Beginner = ({ topic }) => {
  return (
    <div>
      <h1>{topic}</h1>

      {/* Render content based on the topic */}
      {/* Check if the topic is 'Python Skills' */}
      {topic === "Python Skills" && (
        <div>
          <h2>Python Skills for Machine Learning</h2>
        </div>
      )}

      {/* Check if the topic is 'Understand ML Algorithms' */}
      {topic === "Understand ML Algorithms" && (
        <div>
          <h2>Understanding Machine Learning Algorithms</h2>

          <p>
            Machine learning algorithms are the heart of any data-driven
            problem-solving process. Each algorithm has its strengths,
            weaknesses, and ideal use cases. Understanding the underlying
            principles and mechanisms of these algorithms is essential for
            selecting the right one for a given task and optimizing its
            performance.
          </p>
          <div className="ml-overview">
            <img src={overview} alt="ML Overview" />
          </div>
          <h3>Foundation Concepts</h3>

          <p>
            Before delving into specific algorithms, it's important to grasp the
            foundational concepts of machine learning, including:
          </p>

          <ul>
            <li>
              <strong>Supervised Learning:</strong> Algorithms that learn from
              labeled data, where each example in the training dataset is
              associated with a target label.
            </li>
            <li>
              <strong>Unsupervised Learning:</strong> Algorithms that find
              patterns and structure in unlabelled data, without explicit
              supervision.
            </li>
            <div className="concept">
              <img src={concept} alt="ML Concepts Image" />
            </div>
          </ul>

          <h3>Common Algorithms</h3>
          <ul>
            <li>
              <strong>Linear Regression:</strong> A simple and widely used
              regression algorithm for modeling the relationship between a
              dependent variable and one or more independent variables. Linear
              regression uses the relationship between the data points to draw a
              straight line through all of them. This line can be used to
              predict future values.
            </li>
            <p>
              In the example below, the x-axis represents age, and the y-axis
              represents speed. We have registered the age and speed of 13 cars
              as they were passing a tollbooth.
            </p>
            <p>
              Let us see if the data we collected could be used in a linear
              regression.
            </p>
            <b>Go ahead and execute this code in your favourite IDE</b>
            <img src={img} alt="Linear Regression Example" />
            <h2>RESULT</h2>
            <img src={img2} alt="Linear Regression Graph" />
            <li>
              <strong>Logistic Regression:</strong> A regression algorithm used
              for binary classification tasks, where the output is a probability
              that an instance belongs to a particular class.
            </li>
            <li>
              <strong>K-Means Clustering:</strong> An unsupervised learning
              algorithm that partitions data into clusters based on similarity,
              with the goal of minimizing intra-cluster variance.
            </li>
            <li>
              <strong>Neural Networks:</strong> Deep learning algorithms
              inspired by the structure and function of the human brain, capable
              of learning complex patterns from data.
            </li>
            <h1>Neural Networks</h1>
            <p>
              <strong>Neural Networks</strong> are deep learning algorithms
              inspired by the structure and function of the human brain, capable
              of learning complex patterns from data. They are often referred to
              as <strong>Artificial Neural Networks (ANN)</strong>.
            </p>
            <p>
              Neural Networks are essentially multi-layer Perceptrons, which
              form the basis of more complex, multi-layered neural networks.
            </p>
            <p>
              The perceptron defines the first step into the world of
              multi-layered neural networks.
            </p>
            <div className="perceptron">
              <img src={perceptron} alt="Perceptron diagram" />
            </div>
            <p>
              Neural Networks are at the core of Deep Learning, allowing
              machines to solve problems that were previously unsolvable by
              traditional algorithms.
            </p>
            <p>
              Neural Networks represent one of the most significant advancements
              in computational history.
            </p>
            <p>
              Neural Networks are capable of solving problems that cannot be
              solved by traditional algorithms:
            </p>
            <ul>
              <li>Medical Diagnosis</li>
              <li>Face Detection</li>
              <li>Voice Recognition</li>
            </ul>
          </ul>
          <h2>The Neural Network Model</h2>
          <p>
            Input data (Yellow) are processed against a hidden layer (Blue) and
            modified against another hidden layer (Green) to produce the final
            output (Red).
          </p>
          <div className="neural-network">
            <img src={neural} alt="Neural Network Model" />
          </div>
          <div className="train-test">
            <h2>Machine Learning - Train/Test</h2>
            <h3>Evaluate Your Model</h3>
            In Machine Learning we create models to predict the outcome of
            certain events. To measure if the model is good enough, we can use a
            method called Train/Test.
            <h2>What is Train/Test</h2>
            Train/Test is a method to measure the accuracy of your model. It is
            called Train/Test because you split the data set into two sets: a
            training set and a testing set.
            <p>
              <b>80% for training, and 20% for testing.</b>
            </p>
            You train the model using the training set. You test the model using
            the testing set. Train the model means create the model. Test the
            model means test the accuracy of the model.
            <h2>Start With a Data Set</h2>
            Start with a data set you want to test. Our data set illustrates 100
            customers in a shop, and their shopping habits.
            <b>Once again grab your IDE and execute this code</b>
            <div className="train-test-diagram">
              <img src={train} alt="ML Train/Test" />
              <h2>RESULT</h2>
              <img src={train2} alt="ML Train/Test Example" />
            </div>
          </div>
        </div>
      )}

      {/* Check if the topic is 'Quiz' */}
      {topic === "Quiz" && (
        <div>
          <Quiz level="beginner" />
        </div>
      )}
    </div>
  );
};

export default Beginner;
