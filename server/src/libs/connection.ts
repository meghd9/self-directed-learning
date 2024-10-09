import mongoose from 'mongoose'; // Importing mongoose for interacting with MongoDB
import config from '../config/config'; // Importing configuration settings for the database connection

/**
 * Function to establish a connection to the MongoDB database.
 *
 * This asynchronous function uses the MongoDB URI from the configuration settings to connect to the database.
 * It handles connection success and failure by logging appropriate messages.
 *
 * @async
 * @function ConnectDataBase
 * @throws {Error} Throws an error if the connection to MongoDB fails.
 * 
 * @example
 * // Usage example:
 * ConnectDataBase().then(() => {
 *   console.log('Database connected successfully');
 * }).catch(error => {
 *   console.error('Database connection failed', error);
 * });
 */
const ConnectDataBase = async (): Promise<void> => {
    try {
        // Retrieve the MongoDB URI from the configuration settings
        const mongoUri = config.mongoUri;

        // Connect to MongoDB using the URI
        await mongoose.connect(mongoUri);

        // Log a success message if the connection is established
        console.log('MongoDB has been connected successfully!');
        
    } catch (error) {
        // Log an error message if the connection fails
        console.error('Error connecting to MongoDB:', error); // Use console.error for better error visibility
    }
}

export default ConnectDataBase;
