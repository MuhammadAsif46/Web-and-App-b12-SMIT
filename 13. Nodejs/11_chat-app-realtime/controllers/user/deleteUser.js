import { User } from "../../models/user.js";
import 'dotenv/config'


export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne()
        return res.status(200).send({ status: 200, message: "User Delete Successfully!" })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

