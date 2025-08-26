import React from "react";
import Quiz from "../../components/Quiz/Quiz";

/**
 * `Advance` component displays advanced information based on the provided topic.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.topic - The topic to display detailed information for.
 * @returns {JSX.Element} The rendered component.
 */
const Advance = ({ topic }) => {
  return (
    <div>
      <h1>{topic}</h1>

      {/* Check if the topic is 'Natural Language Processing' */}
      {topic === "Natural Language Processing" && (
        <div>
          {/* Main heading for the section on Natural Language Processing */}
          <h2>Natural Language Processing (NLP)</h2>

          {/* Introduction paragraph explaining NLP */}
          <p>
            Natural Language Processing (NLP) is a subfield of artificial
            intelligence (AI) that focuses on the interaction between computers
            and human languages. NLP techniques enable computers to understand,
            interpret, and generate human language in a way that is both
            meaningful and useful.
          </p>

          {/* Subheading for the section on Key Tasks in NLP */}
          <h3>Key Tasks in Natural Language Processing</h3>

          {/* Paragraph introducing the range of tasks involved in NLP */}
          <p>NLP encompasses a wide range of tasks, including:</p>

          {/* Unordered list detailing the key tasks in NLP */}
          <ul>
            <li>
              <strong>Text Classification:</strong> Categorizing text documents
              into predefined classes or categories, such as spam detection,
              sentiment analysis, and topic classification.
            </li>
            <li>
              <strong>Named Entity Recognition (NER):</strong> Identifying and
              extracting named entities, such as names of people, organizations,
              locations, dates, and numerical expressions, from unstructured
              text.
            </li>
          </ul>
        </div>
      )}

      {/* Check if the topic is 'Computer Vision' */}
      {topic === "Computer Vision" && (
        <div>
          {/* Main heading for the section on Computer Vision */}
          <h2>Computer Vision</h2>

          {/* Introduction paragraph explaining the concept of computer vision */}
          <p>
            Computer vision is a field of artificial intelligence that enables
            computers to interpret and understand visual information from the
            real world. By mimicking the human visual system, computer vision
            systems can analyze images and videos, extract meaningful insights,
            and make intelligent decisions based on visual data.
          </p>

          {/* Subheading for the section on Key Concepts in Computer Vision */}
          <h3>Key Concepts in Computer Vision</h3>

          {/* Paragraph describing the key concepts and techniques in computer vision */}
          <p>Computer vision involves several key concepts and techniques:</p>

          {/* Unordered list detailing the key concepts and techniques in computer vision */}
          <ul>
            <li>
              <strong>Image Processing:</strong> Image processing techniques
              are used to enhance, manipulate, and analyze digital images,
              including operations such as filtering, edge detection,
              segmentation, and feature extraction.
            </li>
            <li>
              <strong>Feature Extraction:</strong> Feature extraction involves
              identifying and extracting relevant visual features from images,
              such as edges, corners, textures, and keypoints, to represent and
              characterize objects or regions of interest.
            </li>
          </ul>

          {/* Subheading for the section on Applications of Computer Vision */}
          <h3>Applications of Computer Vision</h3>

          {/* Paragraph describing the various applications of computer vision */}
          <p>
            Computer vision has numerous applications across various industries
            and domains, including:
          </p>

          {/* Unordered list detailing specific applications of computer vision */}
          <ul>
            <li>
              <strong>Autonomous Vehicles:</strong> Computer vision is used in
              autonomous vehicles for lane detection, object detection,
              pedestrian detection, traffic sign recognition, and scene
              understanding to enable safe and efficient navigation.
            </li>
            <li>
              <strong>Surveillance and Security:</strong> Computer vision
              systems monitor and analyze surveillance footage for threat
              detection, activity recognition, crowd counting, and anomaly
              detection in public spaces, airports, and critical infrastructure.
            </li>
          </ul>
        </div>
      )}

      {/* Check if the topic is 'Quiz' */}
      {topic === "Quiz" && (
        <div>
          <Quiz level="advance" />
        </div>
      )}
    </div>
  );
};

export default Advance;
