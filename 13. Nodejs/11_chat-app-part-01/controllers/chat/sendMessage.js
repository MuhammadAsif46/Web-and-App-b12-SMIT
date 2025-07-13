import { Chat } from "../../models/chat.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import joi from "joi";
import transporter from "../../helpers/index.js";
import 'dotenv/config'


const chatValidationSchema = joi.object({
    to_id: joi.string().required(),
    messageText: joi.string().required()
})

export const sendMessage = async (req, res) => {
    const { messageText, to_id } = req.body;

    try {
    
        await chatValidationSchema.validateAsync(req.body);

        const sendMessage = await Chat.create({
            from_id: req.currentUser._id,
            from_username: req.currentUser.username,
            from_email: req.currentUser.email,
            to_id: to_id,
            messageText: messageText
        })
        
        return res.status(200).send({ status: 200, message: "Message Send Successfully!", data: sendMessage })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}