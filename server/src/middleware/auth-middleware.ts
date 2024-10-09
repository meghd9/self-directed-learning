import { Request, Response, NextFunction } from 'express'; // Importing necessary modules from Express
import jwt from 'jsonwebtoken'; // Importing jsonwebtoken for handling JWT verification
import config from '../config/config'; // Importing configuration settings for JWT secret key

// Extending the Request interface to include an optional userId property
interface AuthenticatedRequest extends Request {
    userId?: string; // Optional property to store the authenticated user's ID
}

/**
 * Middleware function to verify JWT tokens and authenticate requests.
 *
 * This middleware function checks the Authorization header in incoming requests for a valid JWT.
 * If a valid token is found and verified, the user ID from the token is attached to the request object,
 * allowing subsequent middleware or route handlers to access it. If the token is missing or invalid,
 * a 401 Unauthorized response is sent.
 *
 * @function verifyToken
 * @param {AuthenticatedRequest} req - The incoming request object, potentially containing the JWT.
 * @param {Response} res - The response object used to send back HTTP responses.
 * @param {NextFunction} next - The next middleware or route handler in the Express pipeline.
 * @returns {void | Response} Passes control to the next middleware or route handler, or sends a 401 error if authentication fails.
 *
 * @example
 * // Usage example in an Express route:
 * app.get('/protected-route', verifyToken, (req, res) => {
 *   res.send('This is a protected route');
 * });
 */
const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void | Response => {
    try {
        // Retrieve the Authorization header from the request
        const token = req.header('Authorization');

        // If no token is provided, respond with a 401 Unauthorized status
        if (!token) {
            return res.status(401).json({
                success: false, // Indicating the operation failed
                message: 'Access Denied!' // Clear message indicating the lack of authorization
            });
        }

        // Split the token to extract the actual token part (Bearer <token>)
        const tokenPart = token.split(' ')[1];
        
        // Verify the token using the secret key from the configuration settings
        const decoded: any = jwt.verify(tokenPart, config.jwtSecretToken);
        
        // Attach the decoded userId from the token to the request object for use in subsequent handlers
        req.userId = decoded.userId;
        
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If the token is invalid or verification fails, respond with a 401 Unauthorized status
        return res.status(401).json({
            success: false, // Indicating the operation failed
            message: 'Invalid Token', // Clear message indicating the token was invalid
        });
    }
};

export default verifyToken;
