import express from "express"

const router = express.Router()

router.post('/login', (req, res) => {
    const { email, password } = req.body
    console.log("login api--->", email, password);
})

export default router