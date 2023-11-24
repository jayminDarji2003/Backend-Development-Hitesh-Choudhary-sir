// import
import mongoose from 'mongoose';

// create model
const subTodoShema = new mongoose.Schema(
    {
        content: {
            type: String,
            require: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

// export model
export const SubTodo = mongoose.model('SubTodo', subTodoShema);
