// Importing essential modules and types
import { v4 as uuidv4 } from 'uuid'; // Generating unique identifiers with UUID
import { Request, Response } from "express"; // Type definitions for Express.js requests and responses
import bcrypt from 'bcrypt'; // Securely hashing passwords with bcrypt
import jwt from 'jsonwebtoken'; // Creating and verifying JWTs for authentication
import User from "../model/user-model"; // The User model for database operations
import config from '../config/config'; // Configuration settings, including secrets and app settings

/**
 * Controller function to handle GET requests for fetching all users.
 *
 * This function retrieves all user records from the database and returns them in the response. 
 * If no users are found, it throws an error and returns a structured JSON response indicating the failure.
 *
 * @param {Request} req - The request object containing details such as HTTP headers and query parameters.
 * @param {Response} res - The response object used to send back the HTTP response to the client.
 * @returns {Promise<Response>} - A promise that resolves to the response object, including status, message, and user data.
 *
 * @example
 * // Example usage in an Express app:
 * app.get('/users', getUserController);
 *
 * // Example response format when users are successfully retrieved:
 * {
 *   "success": true, // Indicates that the operation was successful
 *   "message": "Successfully retrieved users from the database!", // Success message
 *   "data": [ // Array of user objects
 *     {
 *       "_id": "5f7c3b2e6b3a1c001c8c4b29",
 *       "username": "john_doe",
 *       "email": "john@example.com",
 *       // other user properties...
 *     },
 *     // more user objects...
 *   ]
 * }
 *
 * // Example response format when no users are found:
 * {
 *   "success": false, // Indicates that the operation failed
 *   "message": "No users found" // Error message
 * }
 *
 * // Example response format on error:
 * {
 *   "success": false, // Indicates that the operation failed
 *   "message": "Unable to retrieve users from the database!", // Error message
 *   "data": { // Error details (consider omitting in production for security reasons)
 *     "message": "Detailed error message",
 *     "stack": "Error stack trace..."
 *   }
 * }
 */
async function getUserController(req: Request, res: Response): Promise<Response> {
    try {
        // Fetch all users from the User collection in the database
        const users = await User.find();
        
        // Handle case where no users are found
        if (!users || users.length === 0) {
            throw new Error('No users found'); // Clear and specific error message
        }

        // Return a successful response with user data
        return res.status(200).json({
            success: true, // Operation was successful
            message: 'Successfully retrieved users from the database!', // Success message
            data: users // Array of user objects
        });
    } catch (error) {
        // Log the error and return an error response
        console.error('Error fetching users:', error); // Log the error for debugging
        
        // Return an error response with status 500
        return res.status(500).json({
            success: false, // Operation failed
            message: 'Unable to retrieve users from the database!', // Error message
            data: error // Error details (consider omitting in production for security)
        });
    }
}
/**
 * Controller function to handle GET requests for retrieving a user by their unique ID.
 *
 * This function serves as an Express.js route handler, designed to fetch a specific user from the database based on the provided user ID.
 * It returns the user's data in a structured JSON response, along with success or error messages depending on the operation's outcome.
 *
 * @param {Request} req - The client's request object, containing details such as HTTP headers, request parameters, and more.
 * @param {Response} res - The response object used to send back the HTTP response to the client.
 * @returns {Promise<Response>} - A promise that resolves to the response object, including status, message, and user data (or an error message if the operation fails).
 *
 * @example
 * // Usage in an Express app:
 * app.get('/user/:id', getByIdUserController);
 *
 * // Example response format when the user is found:
 * {
 *   "success": true, // Indicates successful retrieval
 *   "message": "Successfully retrieved the user from the database", // Success message
 *   "data": { // User object
 *     "_id": "5f7c3b2e6b3a1c001c8c4b29",
 *     "username": "john_doe",
 *     "email": "john@example.com",
 *     ...
 *   }
 * }
 *
 * // Example response format when the user is not found:
 * {
 *   "success": false, // Indicates failure to find the user
 *   "message": "User not found!", // Error message
 *   "data": null // No user data is returned
 * }
 */
async function getByIdUserController(req: Request, res: Response): Promise<Response> {
    try {
        // Extract the user ID from the request parameters
        const { id } = req.params;           
       
        // Attempt to find a user in the database by their unique ID
        const user = await User.findOne({ id });
        
        // Check if the user was found
        if (!user) {
            // If user is not found, return a 404 status with a failure message
            return res.status(404).json({
                success: false, // Operation was not successful
                message: 'User not found!', // Clear error message
                data: null // No user data to return
            });
        }

        // If the user is found, return their data with a success message
        return res.status(200).json({
            success: true, // Operation was successful
            message: 'Successfully retrieved the user from the database', // Success message
            data: user // The user data retrieved from the database
        });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error fetching user:', error);
        
        // Return a 500 status with an error message and the error details
        return res.status(500).json({
            success: false, // Operation failed
            message: 'Unable to get the user from the database', // Error message
            data: error // Error details (consider omitting in production)
        });
    }
}

/**
 * Controller function to handle POST requests for user registration.
 *
 * This function processes user registration requests by validating the provided details, checking for existing users, hashing passwords,
 * and creating a new user in the database. It returns a structured JSON response indicating success or failure of the registration process.
 *
 * @param {Request} req - The client's request object, containing details such as HTTP headers and the request body with user details.
 * @param {Response} res - The response object used to send back the HTTP response to the client.
 * @returns {Promise<Response>} - A promise that resolves to the response object, including status, message, and user data (or an error message if registration fails).
 *
 * @example
 * // Usage in an Express app:
 * app.post('/user', registerUserController);
 *
 * // Example response format on successful registration:
 * {
 *   "success": true, // Indicates successful registration
 *   "message": "User has been successfully registered", // Success message
 *   "data": { // Newly created user object
 *     "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
 *     "name": "Jane Doe",
 *     "age": 25,
 *     "phone": "+1234567890",
 *     "username": "janedoe",
 *     "password": "<hashed_password>", // Hashed password
 *     "progress": {
 *       "foundation": 0,
 *       "beginner": 0,
 *       "intermediate": 0,
 *       "advance": 0,
 *       "total": 0
 *     }
 *   }
 * }
 *
 * // Example response format if a required field is missing:
 * {
 *   "success": false, // Indicates failure to register
 *   "message": "Please complete all the required fields." // Error message
 * }
 *
 * // Example response format if the username already exists:
 * {
 *   "success": false, // Indicates failure to register
 *   "message": "Username already exists. Please login" // Error message
 * }
 */
async function registerUserController(req: Request, res: Response): Promise<Response> {
    try {
        // Extract user details from the request body
        const { name, age, phone, username, password } = req.body;

        // Validate the presence of all required fields
        if (!name || !age || !phone || !username || !password) {
            return res.status(400).json({
                success: false, // Indicates the registration attempt was unsuccessful
                message: 'Please complete all the required fields.', // Error message
            });
        }

        // Check if a user with the provided username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                success: false, // Indicates failure to register due to username conflict
                message: 'Username already exists. Please login', // Error message
            });
        }

        // Hash the provided password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with the provided and generated details
        const user = new User({
            id: uuidv4(), // Generate a unique ID for the new user
            name,
            age,
            phone,
            username,
            password: hashPassword,
            progress: {
                foundation: 0,
                beginner: 0,
                intermediate: 0,
                advance: 0,
                total: 0, // Initialize total progress
            },
        });

        // Calculate and update the total progress
        user.progress.total = user.progress.foundation + user.progress.beginner +
                              user.progress.intermediate + user.progress.advance;
        
        // Save the new user to the database
        await user.save();

        // Return a success response with the created user's data
        return res.status(201).json({
            success: true, // Indicates successful registration
            message: 'User has been successfully registered', // Success message
            data: user, // The newly created user object
        });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error registering user:', error);
        
        // Return a 500 status with an error message and details
        return res.status(500).json({
            success: false, // Indicates failure to register
            message: 'Unable to create the user', // Error message
            data: error, // Error details (consider omitting in production)
        });
    }
}

/**
 * Controller function to handle POST requests for user login.
 *
 * This function processes user login requests by validating provided credentials, checking the user's existence in the database,
 * comparing the provided password with the stored hashed password, and generating a JWT token if the login is successful.
 * It returns a structured JSON response indicating success or failure of the login process.
 *
 * @param {Request} req - The client's request object, containing details such as HTTP headers and the request body with login credentials.
 * @param {Response} res - The response object used to send back the HTTP response to the client.
 * @returns {Promise<Response>} - A promise that resolves to the response object, including status, message, and JWT token (or an error message if login fails).
 *
 * @example
 * // Usage in an Express app:
 * app.post('/login', loginUserController);
 *
 * // Example response format on successful login:
 * {
 *   "success": true, // Indicates successful login
 *   "message": "Login successful", // Success message
 *   "data": "Bearer <token>" // JWT token for authentication
 * }
 *
 * // Example response format if username or password is missing:
 * {
 *   "success": false, // Indicates failure to login
 *   "message": "Please provide both the username and the password." // Error message
 * }
 *
 * // Example response format if user is not found:
 * {
 *   "success": false, // Indicates failure to login
 *   "message": "User not found" // Error message
 * }
 *
 * // Example response format if password is incorrect:
 * {
 *   "success": false, // Indicates failure to login
 *   "message": "Your password is incorrect" // Error message
 * }
 */
async function loginUserController(req: Request, res: Response): Promise<Response> {
    try {
        // Extract username and password from the request body
        const { username, password } = req.body;

        // Validate the presence of both username and password
        if (!username || !password) {
            return res.status(400).json({
                success: false, // Indicates that the request is invalid
                message: 'Please provide both the username and the password.', // Error message
            });
        }

        // Find the user in the database by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                success: false, // Indicates that the user was not found
                message: 'User not found', // Error message
            });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        // Check if the password matches
        if (!passwordMatch) {
            return res.status(400).json({
                success: false, // Indicates that the password is incorrect
                message: 'Your password is incorrect', // Error message
            });
        }

        // Create a JWT token for the authenticated user
        const token = jwt.sign({ userId: user.id }, config.jwtSecretToken, { expiresIn: '24h' });

        // Return the token with a success message
        return res.status(200).json({
            success: true, // Indicates successful login
            message: 'Login successful', // Success message
            data: `Bearer ${token}` // JWT token to be used for subsequent requests
        });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error logging in user:', error);
        
        // Return a 500 status with an error message and details
        return res.status(500).json({
            success: false, // Indicates failure to login
            message: 'Unable to login', // Error message
            data: error // Error details (consider omitting in production)
        });
    }
}


/**
 * Controller function to handle PUT requests for updating a user.
 *
 * This function processes user update requests by validating the provided user ID, updating the user with the given data,
 * and recalculating the user's progress. It returns a structured JSON response indicating success or failure of the update operation.
 *
 * @param {Request} req - The client's request object, containing details such as HTTP headers, request parameters (user ID), and request body (update data).
 * @param {Response} res - The response object used to send back the HTTP response to the client.
 * @returns {Promise<Response>} - A promise that resolves to the response object, including status, message, and updated user data (or an error message if update fails).
 *
 * @example
 * // Usage in an Express app:
 * app.put('/user/:id', updateUserController);
 *
 * // Example response format on successful update:
 * {
 *   "success": true, // Indicates successful update
 *   "message": "User successfully updated.", // Success message
 *   "data": { // Updated user object
 *     "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
 *     "name": "John Doe",
 *     "age": 30,
 *     "phone": "+1234567890",
 *     "username": "johndoe",
 *     "password": "<hashed_password>", // Hashed password
 *     "progress": {
 *       "foundation": 10,
 *       "beginner": 20,
 *       "intermediate": 30,
 *       "advance": 40,
 *       "total": 100
 *     }
 *   }
 * }
 *
 * // Example response format if user is not found:
 * {
 *   "success": false, // Indicates failure to update
 *   "message": "User not found." // Error message
 * }
 *
 * // Example response format if there's a duplicate key error:
 * {
 *   "success": false, // Indicates failure to update
 *   "message": "Duplicate key error. The provided phone number or email is already in use." // Error message
 * }
 */
async function updateUserController(req: Request, res: Response): Promise<Response> {
    try {
        // Extract user ID from request parameters
        const { id } = req.params;

        // Update the user with the provided data
        const updatedUser = await User.findOneAndUpdate(
            { id },
            { $set: req.body },
            { new: true, runValidators: true }
        );

        // Check if user was found and updated
        if (!updatedUser) {
            return res.status(404).json({
                success: false, // Indicates that the user was not found
                message: 'User not found.', // Error message
            });
        }

        // Update the total progress of the user
        updatedUser.progress.total = updatedUser.progress.foundation + 
                                     updatedUser.progress.beginner +
                                     updatedUser.progress.intermediate +
                                     updatedUser.progress.advance;
        
        // Save the updated user to the database
        await updatedUser.save();

        // Return a success response with the updated user's data
        return res.status(200).json({
            success: true, // Indicates successful update
            message: 'User successfully updated.', // Success message
            data: updatedUser, // The updated user object
        });
    } catch (error: any) {
        // Log the error for debugging purposes
        console.error('Error updating user:', error);
        
        // Handle specific duplicate key error
        if (error.code === 11000 && error.codeName === 'DuplicateKey') {
            return res.status(400).json({
                success: false, // Indicates failure to update due to duplicate key
                message: 'Duplicate key error. The provided phone number or email is already in use.', // Error message
            });
        }
        
        // Return a 500 status with an error message and details
        return res.status(500).json({
            success: false, // Indicates failure to update
            message: 'Unable to update the user', // Error message
            data: error, // Error details (consider omitting in production)
        });
    }
}

/**
 * Controller function to handle DELETE requests for deleting a user.
 *
 * This function processes user deletion requests by validating the provided user ID, attempting to find and delete the user,
 * and returning a structured JSON response indicating success or failure of the deletion operation.
 *
 * @param {Request} req - The client's request object, containing details such as HTTP headers, request parameters (user ID).
 * @param {Response} res - The response object used to send back the HTTP response to the client.
 * @returns {Promise<Response>} - A promise that resolves to the response object, including status, message, and deleted user data (or an error message if deletion fails).
 *
 * @example
 * // Usage in an Express app:
 * app.delete('/user/:id', deleteUserController);
 *
 * // Example response format on successful deletion:
 * {
 *   "success": true, // Indicates successful deletion
 *   "message": "User successfully deleted.", // Success message
 *   "data": { // The deleted user object
 *     "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
 *     "name": "John Doe",
 *     "age": 30,
 *     "phone": "+1234567890",
 *     "username": "johndoe",
 *     "password": "<hashed_password>", // Hashed password
 *     "progress": {
 *       "foundation": 10,
 *       "beginner": 20,
 *       "intermediate": 30,
 *       "advance": 40,
 *       "total": 100
 *     }
 *   }
 * }
 *
 * // Example response format if user is not found:
 * {
 *   "success": false, // Indicates failure to delete
 *   "message": "User not found!" // Error message
 * }
 */
async function deleteUserController(req: Request, res: Response): Promise<Response> {
    try {
        // Extract user ID from request parameters
        const { id } = req.params;

        // Find and delete the user by ID
        const user = await User.findOneAndDelete({ id });
        
        // Check if user was found and deleted
        if (!user) {
            return res.status(404).json({
                success: false, // Indicates that the user was not found
                message: 'User not found!', // Error message
            });
        }

        // Return a success response with the deleted user's data
        return res.status(200).json({
            success: true, // Indicates successful deletion
            message: 'User successfully deleted.', // Success message
            data: user // The deleted user object
        });
    } catch (error) {
        // Log the error for debugging purposes
        console.log('error', error);
        
        // Return a 500 status with an error message and details
        return res.status(500).json({
            success: false, // Indicates failure to delete
            message: 'Unable to delete the user', // Error message
            data: error // Error details (consider omitting in production for security reasons)
        });
    }
}

/**
 * Exporting all controller functions for use in other parts of the application.
 * 
 * These functions handle the core CRUD operations (Create, Read, Update, Delete) and authentication tasks.
 * 
 * @exports controllers/userController
 */

export {
    getUserController,
    getByIdUserController,
    registerUserController,
    loginUserController,
    updateUserController,
    deleteUserController
};
