import { User } from "../../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const getByUsername = async (req, res) => {
    // console.log("req.query->", req.query.username);
    

    try {
        const getUserByUsername = await User.findOne({username : req.query.username})
        // const getUserByUsername = await User.find({username : "Ali"})

        return res.status(200).send({ status: 200, message: "Get specific User getting Successfully!", data: getUserByUsername })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}