const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Get port from environment or default to 5000
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send-enquiry", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "rgadade75@gmail.com",
        pass: process.env.EMAIL_PASS || "zdjh nwbk ylpc kvdi"
      }
    });

    const mailOptions = {
      from: email,
      to: "rgadade@gmail.com",
      subject: "New Project Enquiry",
      html: `
        <h2>New Enquiry Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email Failed", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});