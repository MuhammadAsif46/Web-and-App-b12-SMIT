import { User } from "../../models/user.js";
import 'dotenv/config'

export const getUserById = async (req, res) => {
    try {
        const getUserById = await User.findById({_id : req.params.id}).select("-password")
        // const getUserByUsername = await User.find({username : "Ali"})

        return res.status(200).send({ status: 200, message: "Get User By ID Successfully!", data: getUserById })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}