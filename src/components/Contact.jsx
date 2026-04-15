import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      await axios.post(`${apiUrl}/send-enquiry`, formData)
      alert('Enquiry Sent Successfully')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(true)
    } catch (error) {
      alert('Failed to send enquiry. Please try again.')
      console.error(error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '9822516027',
      link: 'tel:9822516027',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'rgadade75@gmail.com',
      link: 'mailto:rgadade75@gmail.com',
    },
    {
      icon: '📍',
      label: 'Address',
      value: 'Pune - 411058',
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-title">
              Get In <span className="primary">Touch</span>
            </h2>
            <p className="contact-description">
              Have a project in mind? Let us know! We're ready to help you with your glass, aluminium, and
              construction needs.
            </p>

            <div className="contact-items">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <p className="contact-label">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* GST Info */}
            <div className="gst-info">
              <p className="gst-label">GST Number</p>
              <p className="gst-number">27AIIPG8253D1ZB</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a service</option>
                  <option value="glasses">All Types of Glasses</option>
                  <option value="doors">Aluminium Doors</option>
                  <option value="windows">Windows & Partitions</option>
                  <option value="partitions">Interior Partitions</option>
                  <option value="ceiling">False Ceiling</option>
                  <option value="civil">Civil & Fabrication</option>
                  <option value="interior">Interior Designing</option>
                  <option value="furniture">Furniture & Fabrication</option>
                  <option value="painting">Painting Services</option>
                  <option value="residential-flooring">Residential Flooring</option>
                  <option value="commercial-flooring">Commercial Flooring</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input form-textarea"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="btn-primary btn-submit">
                Send Inquiry →
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! We'll contact you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
