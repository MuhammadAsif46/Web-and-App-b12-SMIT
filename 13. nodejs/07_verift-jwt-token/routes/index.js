import express from "express"
import user from "./user.js"
import upload from "./upload.js"
const router = express.Router()

router.use('/v1', user)
router.use('/upload', upload)


export default router;