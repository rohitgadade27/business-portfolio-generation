import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">
              Vijay<br />
              Enterprises
            </h3>
            <p className="footer-description">
              Your trusted partner for glass, aluminium, and construction solutions.
            </p>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Glasses</Link></li>
              <li><Link to="/services">Aluminium Doors</Link></li>
              <li><Link to="/services">Windows & Partitions</Link></li>
              <li><Link to="/services">False Ceiling</Link></li>
              <li><Link to="/services">Interior Design</Link></li>
              <li><Link to="/services">Furniture & Painting</Link></li>
              <li><Link to="/services">Residential Flooring</Link></li>
              <li><Link to="/services">Commercial Flooring</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:9822516027">9822516027</a>
              </div>
              <div className="footer-contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:rgadade@gmail.com">rgadade@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <span className="contact-icon">📍</span>
                <span>Pune - 411058</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>GST: 27AIIPG8253D1ZB</p>
            <p className="footer-copyright">© 2024 Vijay Enterprises. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            <a href="#" className="social-link">f</a>
            <a href="#" className="social-link">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
