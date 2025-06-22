import "dotenv/config"
import jwt from "jsonwebtoken"


const verifyToken = (req, res, next) => {
    // console.log("token-->", req.headers.authorization);

    const { authorization } = req.headers;
    const token = authorization.split(" ")[1]
    // console.log("middle---->");
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(401).send({ status: 401, message: "Unauthorized", err })
        }
        return next()

    });
    // next()
}

export default verifyToken

