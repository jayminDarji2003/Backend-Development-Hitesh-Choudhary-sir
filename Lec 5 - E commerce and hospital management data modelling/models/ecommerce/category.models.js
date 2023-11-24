// importing
import mongoose from "mongoose";

// creating schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},{timestamps: true});

//exporing schema
export const Category = mongoose.model("Category", categorySchema)

