// 📁 server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import blogRoutes from "./src/routes/blogRoutes.js";
import dbConnection from "./src/scripts/dbConnection.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

// Env değişkenlerini oku
dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173", // geliştirme ortamı
      "https://2nomaden.netlify.app", // canlı Netlify frontend
    ],
    credentials: true,
  })
);
app.use(express.json());

dbConnection();

//Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`)
);
