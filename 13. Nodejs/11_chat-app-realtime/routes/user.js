import express from "express"
import {loginUser,getAllUsers, CreateUser } from "../controllers/index.js";
// import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router()


router.post("/signup", CreateUser)
router.post("/login", loginUser)

// router.get("/user",verifyToken, getByUsername)
// router.get("/users", verifyToken, getAllUsers)
router.get("/users", getAllUsers)
// router.get("/user/:id", getUserById)

// router.delete("/user/:id", deleteUser)








export default router;