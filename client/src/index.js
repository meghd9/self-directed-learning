import React from 'react'; // Import the React library to use JSX and React components
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the React application to the DOM
import './index.css'; // Import global CSS styles for the application
import App from './App'; // Import the main App component which serves as the entry point of the React application
import reportWebVitals from './reportWebVitals'; // Import the function for measuring and reporting performance metrics
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter to enable client-side routing

/**
 * Create a root element for rendering the React application.
 * This element is linked to the DOM element with the id 'root'.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Render the React application inside the root element.
 * 
 * The React.StrictMode component helps to identify potential problems in the application 
 * during development by intentionally invoking certain lifecycle methods more than once.
 * 
 * The BrowserRouter component wraps the application to provide routing capabilities 
 * for client-side navigation.
 */
root.render(
  <React.StrictMode>
    {/* StrictMode is used to activate additional checks and warnings for React components */}
    <BrowserRouter>
      {/* BrowserRouter enables the use of React Router for handling navigation and routing */}
      <App />
      {/* The App component is the root component of the React application. It renders the main content */}
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * Measure performance metrics of the application.
 * 
 * The reportWebVitals function can be used to log results (e.g., to an analytics endpoint)
 * or send them to an external service for performance monitoring.
 */
reportWebVitals();
