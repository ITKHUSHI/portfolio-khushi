import express from "express";
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();

app.use(cors({
  origin:  process.env.ORIGIN || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
     pass: process.env.EMAIL_PASS
  }
});

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  console.log('Request body:', req.body);
  next();
});

app.post("/contact", (req, res) => {
  const { name, email, contact, message } = req.body;

  if (!name || !email || !contact || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name}`,
    text: `Message: ${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p><p>Contact: ${contact}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent: ', info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
