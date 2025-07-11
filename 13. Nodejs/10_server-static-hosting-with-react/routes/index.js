import express from "express"
import user from "./user.js"
import post from "./post.js"
import upload from "./upload.js"
const router = express.Router()

router.use('/v1', user)
router.use('/v1', post)
router.use('/upload', upload)


export default router;