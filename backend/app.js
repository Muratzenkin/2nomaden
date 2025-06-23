import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./src/routes/blogRoutes.js";
import dbConnection from "./src/scripts/dbConnection.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://2nomaden.netlify.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

if (process.env.NODE_ENV !== "test") {
  dbConnection();
}

app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

export default app;
