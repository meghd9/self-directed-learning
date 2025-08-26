import express, { Request, Response } from 'express'; // Importing necessary modules from express
import userRouter from './router/user-router'; // Importing user router from the local router file
import config from './config/config'; // Importing configuration settings
import ConnectDataBase from './libs/connection'; // Importing database connection function
import cors from 'cors'; // Importing CORS middleware for handling cross-origin requests

/**
 * Express application instance.
 * 
 * @constant {Express.Application}
 */
const app = express(); // Creating an instance of an Express application

/**
 * Port on which the server will listen.
 * The port is determined from the configuration file or defaults to 9000.
 * 
 * @constant {number}
 */
const PORT = config.port || 9000; // Setting the port from configuration or defaulting to 9000

/**
 * Middleware to parse incoming JSON requests.
 * 
 * This middleware is essential for handling requests with JSON bodies,
 * ensuring that the request body is parsed into a JavaScript object and attached to `req.body`.
 * 
 * @function
 */
app.use(express.json()); // Middleware to parse JSON bodies

/**
 * Middleware to enable CORS (Cross-Origin Resource Sharing).
 * 
 * CORS allows the server to specify which domains are permitted to access its resources,
 * thereby preventing security issues related to cross-origin requests.
 * 
 * @function
 */
app.use(cors()); // Middleware to enable CORS

/**
 * Route handler for the root URL ('/').
 * 
 * This route is a simple health check endpoint that responds with a message indicating that the app is operational.
 * 
 * @name /
 * @function
 * @memberof module:app
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
app.get('/', (req: Request, res: Response) => {
    res.send('App is working...'); // Sends a response indicating the app is working
});

/**
 * Registers the user router to handle all routes starting with '/user'.
 * 
 * The userRouter handles operations related to user management, such as registration, login, fetching users, etc.
 * 
 * @function
 */
app.use('/user', userRouter); // Registering the user router to handle routes starting with '/user'

/**
 * Starts the Express server and begins listening for incoming requests on the specified port.
 * 
 * Once the server is running, it logs a message indicating that it is operational.
 * The database connection function `ConnectDataBase` is also called to ensure that the application
 * is connected to the MongoDB database.
 * 
 * @function
 */
app.listen(PORT, () => {
    console.log(`App is working on PORT ${PORT}`); // Log a message to indicate the server is running
    ConnectDataBase(); // Call the function to connect to the database
});

