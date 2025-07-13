import express from "express"
import user from "./user.js"
import chat from "./chat.js"

const router = express.Router()

router.use('/v1', user)
router.use('/v1', chat)


export default router;