// 📁 server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Env değişkenlerini oku
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mail gönderme route'u
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Lütfen tüm alanları doldurun." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: `Yeni İletişim Mesajı: ${subject}`,
      html: `
        <h2>Yeni Mesaj</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Mesaj gönderildi ✅" });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    res
      .status(500)
      .json({ success: false, message: "Sunucu hatası: Mail gönderilemedi." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Sunucu çalışıyor: http://localhost:${PORT}`)
);
