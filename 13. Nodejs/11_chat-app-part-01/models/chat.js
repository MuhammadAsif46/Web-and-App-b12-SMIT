import mongoose, { Schema } from "mongoose";


const ChatSchema = new Schema({
    from_email: {
        type: Schema.Types.String,
        required: true
    },
    from_username: {
        type: Schema.Types.String,
        required: true
    },
    from_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    to_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    messageText:{
        type: Schema.Types.String,
        required: true
    },
    // imageUrl:{
    //     type: Schema.Types.String,
    //     default: null
    // },
    // isRead: {
    //     type: Schema.Types.Boolean,
    //     default: false, // Track : read/unread
    // }
},
    {
        timestamps: {
            createdAt: 'create', 
            updatedAt: 'update' 
        }
    }
)

export const Chat = mongoose.model("Message", ChatSchema)