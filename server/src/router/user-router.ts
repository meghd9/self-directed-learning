import { Router } from "express"; // Importing the Router class from express
import { 
    registerUserController,  // Controller for registering a new user
    deleteUserController, // Controller for deleting a user
    getByIdUserController, // Controller for fetching a user by ID
    getUserController, // Controller for fetching all users
    loginUserController, // Controller for user login
    updateUserController // Controller for updating a user
} from "../controller/user-controller"; // Importing user-related controller functions from the user-controller file
import verifyToken from "../middleware/auth-middleware"; // Importing middleware function to verify tokens

/**
 * userRouter is an instance of the Express Router.
 * It defines routes for user-related operations such as registration, login, 
 * retrieval, updating, and deletion of user data.
 * 
 * @constant {Router}
 */
const userRouter = Router(); // Creating a new Router instance

/**
 * Route for '/user' path.
 * 
 * - GET: Retrieves all users from the database. The request is protected by the verifyToken middleware to ensure that only authenticated users can access it.
 * - POST: Registers a new user in the database. No authentication is required for this route.
 * 
 * @name /user
 * @function
 * @memberof module:routes/userRouter
 * @inner
 */
userRouter.route('/')
    .get(verifyToken, getUserController) // GET request to fetch all users, with token verification
    .post(registerUserController); // POST request to register a new user

/**
 * Route for '/user/:id' path.
 * 
 * - GET: Retrieves a user by their unique ID. This route is not protected by token verification.
 * - DELETE: Deletes a user by their unique ID. The request is protected by the verifyToken middleware to ensure that only authenticated users can delete a user.
 * - PUT: Updates a user by their unique ID. This route is not protected by token verification.
 * 
 * @name /user/:id
 * @function
 * @memberof module:routes/userRouter
 * @inner
 * @param {string} id - Unique identifier of the user.
 */
userRouter.route('/:id')
    .get(getByIdUserController) // GET request to fetch a user by ID
    .delete(verifyToken, deleteUserController) // DELETE request to remove a user by ID, with token verification
    .put(updateUserController); // PUT request to update a user by ID

/**
 * Route for '/user/login' path.
 * 
 * - POST: Authenticates a user by validating their credentials (username and password).
 *          On successful authentication, a JWT token is returned.
 * 
 * @name /user/login
 * @function
 * @memberof module:routes/userRouter
 * @inner
 */
userRouter.route('/login')
    .post(loginUserController); // POST request to log in a user

export default userRouter; // Exporting the userRouter instance for use in other parts of the application
