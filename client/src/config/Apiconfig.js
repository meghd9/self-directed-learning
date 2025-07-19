/**
 * Configuration object for API requests.
 * 
 * @type {Object}
 * @property {string} baseURL - The base URL for API requests, retrieved from environment variables.
 */
const config = {
  // baseURL: Set the base URL for API requests by retrieving it from the environment variables.
  // The environment variable REACT_APP_BASE_URL should be set in the .env file.
  baseURL: process.env.REACT_APP_BASE_URL
};

// Export the config object to be used in other parts of the application.
export default config;
