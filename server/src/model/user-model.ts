import { Schema, model, Document } from "mongoose"; // Importing required modules from mongoose

/**
 * IUser interface represents the structure of a user document in MongoDB.
 * It extends the mongoose Document interface, which provides built-in 
 * methods and properties for interacting with MongoDB documents.
 *
 * @interface IUser
 * @extends {Document}
 */
interface IUser extends Document {
    id: string; // Unique identifier for the user
    name: string; // Name of the user
    age: number; // Age of the user
    phone: string; // Phone number of the user
    username: string; // Username of the user, must be unique
    password: string; // Password for the user's account
    progress: { // Object containing user's progress in different levels
        foundation: number; // Progress in foundation level
        beginner: number; // Progress in beginner level
        intermediate: number; // Progress in intermediate level
        advance: number; // Progress in advance level
        total: number; // Total progress across all levels
    };
    admin: boolean; // Boolean indicating if the user is an admin
    createdAt: Date; // Date when the user was created
    updatedAt: Date; // Date when the user was last updated
}

/**
 * userSchema defines the structure of the user document in MongoDB.
 * It includes fields for user information, progress, and admin status.
 * Additionally, it includes timestamps and a virtual property to calculate
 * the total progress.
 *
 * @const {Schema}
 */
const userSchema = new Schema({
    id: { type: String, required: true }, // User ID, required field
    name: { type: String, required: true }, // User name, required field
    age: { type: Number, required: true }, // User age, required field
    phone: { type: String, required: true }, // User phone number, required field
    username: { type: String, required: true, unique: true }, // User username, required and unique field
    password: { type: String, required: true }, // User password, required field
    progress: {
        foundation: { type: Number, default: 0 }, // Progress in foundation level, default is 0
        beginner: { type: Number, default: 0 }, // Progress in beginner level, default is 0
        intermediate: { type: Number, default: 0 }, // Progress in intermediate level, default is 0
        advance: { type: Number, default: 0 }, // Progress in advance level, default is 0
        total: { type: Number, default: 0 }, // Total progress, default is 0
    },
    admin: { type: Boolean, default: false }, // Boolean indicating if the user is an admin, default is false
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
    toJSON: { virtuals: true }, // Include virtuals when converting the document to JSON
});

/**
 * Virtual property `total` to calculate the total progress.
 * This virtual combines progress from all levels and provides
 * the sum as the total progress. It doesn't get stored in the database
 * but is available when the document is converted to JSON or Object.
 *
 * @returns {number} Total progress across all levels.
 */
userSchema.virtual('total').get(function(this: { progress: { foundation: number; beginner: number; intermediate: number; advance: number; }; }) {
    return this.progress.foundation + this.progress.beginner + this.progress.intermediate + this.progress.advance;
});

/**
 * Pre-save hook that calculates and updates the total progress
 * before the user document is saved to the database. Ensures that the
 * total progress is always up-to-date based on individual level progress.
 *
 * @function
 * @param {function} next - Callback function to proceed to the next middleware or save operation.
 */
userSchema.pre<IUser>('save', async function(next) {
    this.progress.total = this.progress.foundation + this.progress.beginner + this.progress.intermediate + this.progress.advance;
    next(); // Proceed to the next middleware or save operation
});

/**
 * The User model represents the user collection in MongoDB.
 * It is created using the userSchema and provides an interface
 * for interacting with the user documents.
 *
 * @const {Model<IUser>}
 */
const User = model<IUser>('User', userSchema);

export default User; // Exporting the User model for use in other parts of the application
