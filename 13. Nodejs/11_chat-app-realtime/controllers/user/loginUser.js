import { User } from "../../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const loginUser = async (req, res) => {
    const { email, password } = req.body;


    try {
        if (!(email && password)) {
            return res.status(409).send({ status: 409, message: "Email or Password Required" })
        }

        // await userValidationSchema.validateAsync(req.body);

        // const existedUser = await User.findOne({ email })
        const existedUser = await User.findOne({ email }).then(res => res.toObject())


        if (!existedUser) {
            return res.status(402).send({ status: 402, message: "User Not found!", })
        }

        // const userObj = existedUser.toObject()

        const passwordCompare = await bcrypt.compare(password, existedUser.password)

        if (!passwordCompare) {
            return res.status(402).send({ status: 402, message: "Incorrect Password!", })
        }

        // const loggedInUser = await User.findById(existedUser._id).select(
        //     "-password"
        // );

        const token = jwt.sign({ _id: existedUser._id, email: existedUser.email, username: existedUser.username }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })

        delete existedUser.password
        return res.status(200).send({ status: 200, message: "User Login Successfully!", data: existedUser, token: token })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}