import express from "express"
import { CreateUser, deleteUser, getAllUsers, getByUsername, getUserById, loginUser } from "../controllers/index.js";

const router = express.Router()


router.post("/signup", CreateUser)
router.post("/login", loginUser)

router.get("/user", getByUsername)
router.get("/users", getAllUsers)
router.get("/user/:id", getUserById)

router.delete("/user/:id", deleteUser)








export default router;