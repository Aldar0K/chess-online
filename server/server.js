import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 7070;

const app = express();
app.use(express.json());

const server = app.listen(port, console.log(`Server started on port: ${port}`));
