import { Post } from "../../models/post.js";

const getAllPost = async (req, res) => {
    try {

        const { skips, limits } = req.query;

        const skip = Number(skips) || 0;
        const limit = Number(limits) || 5;
        // const allPosts = await Post.find().populate("author" , "username email")
        const allPosts = await Post.aggregate([
            // {
            //     $match : {title : "test"}
            // },

            {
                $lookup: {
                    from: "users", // collection name
                    localField: "author", // local field
                    foreignField: "_id", // match field name
                    as: "author" // return value
                }
            },
            {
                $facet: {
                    total: [
                        {
                            $count: "count",
                        },
                    ],
                    data: [
                        {
                            $addFields: {
                                _id: "$_id",
                            },
                        },
                    ],
                },
            },
            {
                $unwind: "$total",
            },
            {
                $project: {
                    data: {
                        $slice: [
                            "$data",
                            skip,
                            {
                                $ifNull: [limit, "$total.create"],
                            },
                        ],
                    },
                    metaData: {
                        totalCount: "$total.count",
                        limit: {
                            $literal: limit,
                        },
                        currentPage: {
                            $literal: skip / limit + 1,
                        },
                        totalPages: {
                            $ceil: {
                                $divide: ["$total.count", limit],
                            },
                        },
                    },
                },
            },
        ])

        return res.status(200).send({ status: 200, message: "All Posts getting Successfully!", data: allPosts })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

export default getAllPost

