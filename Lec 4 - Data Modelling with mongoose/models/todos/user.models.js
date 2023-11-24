// Importing mongoose
import mongoose from 'mongoose';
import { stringify } from 'querystring';

// creating model(schema)
const userSchema = new mongoose.schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            require: [true, 'Password is required'], // here password is require but if user doesn't enter password then it will show --> "Password is required" message.
        },
    },
    {
        timestamps: true,
    }
);

// exporting model(schema)
export const User = mongoose.model('User', userSchema);
