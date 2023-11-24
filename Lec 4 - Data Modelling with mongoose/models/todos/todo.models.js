// import
import mongoose from 'mongoose';
import { todo } from 'node:test';

// create model
const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            require: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // array of sub-todos
    },
    { timestamps: true }
    // --> in timestamps we have two fields. createdAt and updatedAt
);

// export model
export const Todo = mongoose.model('Todo', todoSchema);
