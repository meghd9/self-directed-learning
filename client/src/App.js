import React from 'react'; // Import the React library to use JSX syntax and create components
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom for setting up routing in the application
import StudentRoute from './route/StudentRoute'; // Import a custom route component that handles specific routing logic

/**
 * The main App component for the application.
 * This component sets up the routing structure using React Router.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App = () => {
  return (
    <div className='app'> {/* Main container for the application, styled with 'app' class */}
      <Routes>
        {/* Define the routing rules for the application within the Routes component */}
        <Route path='*' element={<StudentRoute />} />
        {/* The wildcard route '*' matches any path, directing all unmatched routes to the StudentRoute component */}
        {/* StudentRoute component is responsible for handling the routing logic and rendering the appropriate components */}
      </Routes>
    </div>
  );
}

export default App; // Export the App component for usage in other parts of the application
