const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Get port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Vijay Enterprises API is running!", status: "OK" });
});

app.post("/send-enquiry", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "rgadade@gmail.com",
      subject: `New Project Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            🏗️ New Project Enquiry - Vijay Enterprises
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📞 Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>🔧 Service:</strong> ${service || 'Not specified'}</p>
            <p><strong>💬 Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This enquiry was sent from Vijay Enterprises website contact form.
          </p>
        </div>
      `
    });

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Enquiry sent successfully! We'll get back to you soon.",
      success: true
    });

  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      message: "Failed to send enquiry. Please try again or contact us directly.",
      error: error.message,
      success: false
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Vijay Enterprises API running on port ${PORT}`);
  console.log(`📧 Email service configured for: rgadade@gmail.com`);
});