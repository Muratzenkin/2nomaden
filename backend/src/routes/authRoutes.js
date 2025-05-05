import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// TEMPORARY — sabit admin kullanıcı
const ADMIN_USER = {
  email: process.env.ADMIN_EMAIL,
  passwordHash: process.env.ADMIN_PASSWORD_HASH,
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_USER.email) {
    return res.status(401).json({ error: "E-posta hatalı" });
  }

  const isMatch = await bcrypt.compare(password, ADMIN_USER.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ error: "Şifre hatalı" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  res.json({ token });
});

export default router;
