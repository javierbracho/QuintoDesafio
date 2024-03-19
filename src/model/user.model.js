import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    mail:{
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
})

const userModel = mongoose.model("user", userSchema)
export default userModel