
import express from "express"
import router from "./routes/index.js"

const app = express()

app.use(express.json())


const PORT = 5000


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
