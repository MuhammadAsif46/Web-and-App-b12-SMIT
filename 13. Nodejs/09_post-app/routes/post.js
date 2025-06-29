import express from "express"
import { getAllPost, getPostByName, addPost, deletePost, updatePost } from "../controllers/index.js";
// import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router()




router.get("/posts", getAllPost)

router.get("/post/:username", getPostByName)

router.post("/add-post", addPost)

router.delete("/delete/:id", deletePost)

router.put("/update/:id", updatePost)







export default router;