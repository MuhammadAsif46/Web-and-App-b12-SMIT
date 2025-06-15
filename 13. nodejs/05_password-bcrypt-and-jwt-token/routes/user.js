import express from "express"
import { CreateUser, loginUser } from "../controllers/index.js";

const router = express.Router()


router.post("/signup", CreateUser)
router.post("/login", loginUser)



export default router;