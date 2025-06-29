import { Post } from "../../models/post.js";
import joi from "joi";
import "dotenv/config";

const postValidationSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  author: joi.string().required(),
});

const addPost = async (req, res) => {
  //   const { title, description, author } = req.body;

  try {
    await postValidationSchema.validateAsync(req.body);

    const createPost = await Post.create(req.body);
    return res.status(200).send({
      status: 200,
      message: "Post Added Successfully!",
      data: createPost,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};

export default addPost
