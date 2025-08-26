import dotenv from 'dotenv'; // Import dotenv to load environment variables from a .env file

// Load environment variables from a .env file
dotenv.config();

/**
 * Configuration interface defining the structure of configuration settings.
 *
 * This interface is used for type safety and to ensure that all required configuration properties are provided.
 *
 * @interface Config
 * @property {number} port - Port number for the application server.
 * @property {string} mongoUri - MongoDB connection URI.
 * @property {string} jwtSecretToken - Secret key used for signing and verifying JSON Web Tokens.
 */
interface Config {
    port: number; // Port number for the application
    mongoUri: string; // MongoDB connection URI
    jwtSecretToken: string; // Secret key for JSON Web Tokens
}

/**
 * Configuration object for the application.
 *
 * This object is created based on environment variables loaded from the .env file. It provides configuration
 * values required for the application to function, such as the port number, MongoDB URI, and JWT secret.
 *
 * @constant {Config}
 * @default
 * {
 *   port: 9000, // Default port number if not specified in environment variables
 *   mongoUri: '', // MongoDB URI, should be provided in environment variables
 *   jwtSecretToken: '' // JWT secret key, should be provided in environment variables
 * }
 */
const config: Config = {
    port: parseInt(process.env.PORT || '9000', 10), // Get the port from environment variables or default to 9000
    mongoUri: process.env.MONGO_URI || '', // Get MongoDB URI from environment variables
    jwtSecretToken: process.env.JWT_SECRET || '' // Get JWT secret from environment variables
};

// Check if MongoDB URI is defined; throw an error if it is not
if (!config.mongoUri) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}

export default config; // Export the config object for use in other parts of the application
