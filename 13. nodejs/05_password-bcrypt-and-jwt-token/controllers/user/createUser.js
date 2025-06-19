import { User } from "../../models/user.js";
import bcrypt from "bcrypt"

import joi from "joi";
import transporter from "../../helpers/index.js";

const userValidationSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required().min(6).max(15),
    phone: joi.number().optional().min(11)
})

export const CreateUser = async (req, res) => {
    const { username, email, password, phone } = req.body;


    try {
        // if (!(username && email && password && phone)) {
        //     return res.status(409).send({ status: 409, message: "All Fields are Required" })
        // }

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            return res.status(409).send({ status: 409, message: "User Already Exits!", })
        }

        await userValidationSchema.validateAsync(req.body);

        const passwordHash = await bcrypt.hash(password, 10)

        const createUser = await User.create({
            username: username,
            email: email,
            phone: phone,
            password: passwordHash
        })
        // const createUser = await User.create(req.body)

        transporter.sendMail({
            to: createUser.email,
            from:"asifahmed32c@gmail.com",
            text: `Hi, ${createUser.username} 
            Welcome Your account is created successfully`,
            subject: 'Email send testing'
        })
        return res.status(200).send({ status: 200, message: "User Created Successfully!", data: createUser })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}