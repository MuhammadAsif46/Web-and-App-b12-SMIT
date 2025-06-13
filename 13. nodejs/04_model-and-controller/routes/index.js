import express from "express"
import user from "./user.js"
import product from "./product.js"
import auth from "./auth.js"
const router = express.Router()

router.use('/users', user)
router.use('/products', product)
router.use('/auth', auth)


export default router;