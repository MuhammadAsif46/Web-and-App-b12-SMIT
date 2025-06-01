
import express from "express"
import router from "./routes/index.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

// app.use('/', (req, res, next) => {
//     // console.log("middleware running...");
//     // console.log("query-->",typeof req?.query?.apiKey);
//     if (req?.query?.apiKey === '123') {
//         next()
//     } else {
//         res.status(400).send({ message: "Not Allowed" })
//     }
// })

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})

// -- success
// 200
// 201

// -- client side error
// 400
// 401
// 402
// 403
// 404

// -- server error
// 500
// 502
