import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";
import routes from "./routes/index.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 7070;
const corsConfig = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
};

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use("/api", routes);

const server = app.listen(port, console.log(`Server started on port: ${port}`));
