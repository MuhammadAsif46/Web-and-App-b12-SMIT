import express from "express"
import { getChat, sendMessage } from "../controllers/index.js";
import verifyToken from "../middlewares/verifyToken.js";
// import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router()

router.get("/messages/:id", verifyToken, getChat)

router.post("/message",verifyToken, sendMessage)

export default router;