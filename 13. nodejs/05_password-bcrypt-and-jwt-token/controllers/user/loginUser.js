import { User } from "../../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginUser = async (req, res) => {
    const { email, password } = req.body;


    try {
        if (!(email && password)) {
            return res.status(409).send({ status: 409, message: "Email or Password Required" })
        }

        const existedUser = await User.findOne({ email }).then(res => res.toObject())


        if (!existedUser) {
            return res.status(402).send({ status: 402, message: "User Not found!", })
        }

        const passwordCompare = await bcrypt.compare(password, existedUser.password)

        if (!passwordCompare) {
            return res.status(402).send({ status: 402, message: "Incorrect Password!", })
        }

        // const loggedInUser = await User.findById(existedUser._id).select(
        //     "-password"
        // );

        const token = jwt.sign({ _id: existedUser._id, email: existedUser.email }, "<SECRET_KEY>")

        delete existedUser.password
        return res.status(200).send({ status: 200, message: "User Created Successfully!", data: existedUser, token: token })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}