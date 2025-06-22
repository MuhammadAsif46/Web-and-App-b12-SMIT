import { User } from "../../models/user.js";
import 'dotenv/config'


export const getAllUsers = async (req, res) => {
    try {
        const getUserByUsername = await User.find().select("-password")

        return res.status(200).send({ status: 200, message: "All Users getting Successfully!", data: getUserByUsername })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

