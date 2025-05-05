// src/routes/contactRoutes.js
import express from "express";
import nodemailer from "nodemailer";
import ContactMessage from "../models/ContactMessage.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "Eksik bilgi var." });
  }

  try {
    // Veritabanına kaydet
    const savedMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    // Mail gönder
    const transporter = nodemailer.createTransport({
      service: "gmail", // gmail yerine başka SMTP olabilir
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"2Nomaden İletişim" <${process.env.MAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Yeni İletişim: ${subject}`,
      html: `
        <h3>Yeni Mesaj</h3>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error("İletişim hatası:", err);
    res.status(500).json({ success: false, error: "Sunucu hatası" });
  }
});

export default router;
