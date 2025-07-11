import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "create",
      updatedAt: "update",
    },
  }
);

export const Post = mongoose.model("Post", PostSchema);
