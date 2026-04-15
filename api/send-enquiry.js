import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, phone, service, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required" })
  }

  const EMAIL_USER = process.env.EMAIL_USER
  const EMAIL_PASS = process.env.EMAIL_PASS

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.")
    return res.status(500).json({ message: "Email configuration is missing." })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: EMAIL_USER,
      to: "rgadade75@gmail.com",
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
      `,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({
      message: "Enquiry sent successfully! We'll get back to you soon.",
      success: true,
    })
  } catch (error) {
    console.error("Email sending error:", error)
    return res.status(500).json({
      message: "Failed to send enquiry. Please try again or contact us directly.",
      error: error.message,
      success: false,
    })
  }
}
