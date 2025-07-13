import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import connectDB from "./db/index.js";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "./web/dist")))

connectDB();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
