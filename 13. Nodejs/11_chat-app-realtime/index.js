import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import connectDB from "./db/index.js";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';
import { createServer } from "http";
import { Server as socketIo } from 'socket.io';
import { globalIoObject } from "./core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "./web/dist")));

connectDB();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api", router);

// THIS IS THE ACTUAL SERVER WHICH IS RUNNING
const server = createServer(app);

// handing over server access to socket.io
const io = new socketIo(server, { cors: { origin: "*", methods: "*" } });
globalIoObject.io = io

io.on("connection", (socket) => {
  console.log("New client connected with id: ", socket.id);
});

io.on("disconnect", (message) => {
  console.log("Client disconnected with id: ", message);
});


// setInterval(() => {
//   // to emit data to a certain client
//   io.emit("channel-1", `some data --> ${new Date().toLocaleString()}`);
// }, 1000);

// app.listen(PORT, () => {
//   console.log(`http Server is running on port : ${PORT}`);
// });

server.listen(PORT, () => {
  console.log(`WS Server is running on port : ${PORT}`);
});

