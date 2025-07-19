import { Chat } from "../../models/chat.js";
import 'dotenv/config'


export const getChat = async (req, res) => {

    try {
        const getAllMessages = await Chat.find({
            $or: [
                {
                    to_id: req.params.id, // asif
                    from_id: req.currentUser._id, // owais
                },
                {
                    from_id: req.params.id, // asif
                    to_id: req.currentUser._id // owais
                }
            ]
        })

        return res.status(200).send({ status: 200, message: "All Users getting Successfully!", data: getAllMessages })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

