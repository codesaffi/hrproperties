import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/newsletter", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can also configure SMTP if not using Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HR Properties" <${process.env.EMAIL_USER}>`,
      to: "hrestatebuilders@gmail.com", // where you want to receive emails
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
    });

    res.json({ message: "Thanks for subscribing!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to subscribe" });
  }
});

export default router;
