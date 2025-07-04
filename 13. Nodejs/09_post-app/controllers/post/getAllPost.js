import { Post } from "../../models/post.js";

const getAllPost = async (req, res) => {
    try {
        // const allPosts = await Post.find().populate("author" , "username email")
        const allPosts = await Post.aggregate([
            {
                $match : {title : "test"}
            },

            
            {
                $lookup:{
                    from: "users", // collection name
                    localField: "author", // local field
                    foreignField:"_id", // match field name
                    as: "author" // return value
                }
            }
        ])

        return res.status(200).send({ status: 200, message: "All Posts getting Successfully!", data: allPosts })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

export default getAllPost

