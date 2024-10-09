import React from 'react'
import Quiz from '../../components/Quiz/Quiz'

/**
 * Foundation component for displaying content based on the selected topic.
 *
 * @param {Object} props - The component props.
 * @param {string} props.topic - The topic to display content for.
 * @returns {JSX.Element} The rendered component.
 */
const Foundation = ({topic}) => {
  return (
    <div>
      <h1>{topic}</h1>
      {/* Render content based on the selected topic */}
      
      {topic === 'How Do I Get Started?' && (
        <div>
          {/* Subheading for the introduction to machine learning */}
          <h3>Introduction to Machine Learning</h3>
          
          {/* Paragraph providing an overview of machine learning and its applications */}
          <p>
            Machine learning is a branch of artificial intelligence that enables computers to learn from data and 
            make decisions or predictions without being explicitly programmed. It has applications across various 
            domains, including healthcare, finance, and marketing.
          </p>
        </div>
      )}

      {/* Check if the topic is 'Quiz' and render the Quiz component */}
      {topic === 'Quiz' && (
        <div>
          <Quiz level='foundation' />
        </div>
      )}
    </div>
  )
}

export default Foundation
