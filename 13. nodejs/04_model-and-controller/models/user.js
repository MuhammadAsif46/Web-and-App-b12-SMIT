import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    phone: {
        type: Schema.Types.Number,
        required: true
    },
})

export const User = mongoose.model("User", UserSchema)