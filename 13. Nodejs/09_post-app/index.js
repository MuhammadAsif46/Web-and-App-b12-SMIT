import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import connectDB from "./db/index.js";
import "dotenv/config";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
