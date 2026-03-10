import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Building Excellence with <span className="primary">Glass & Aluminium</span>
            </h1>
            <p className="hero-description">
              Premium fabrication and installation services for all types of glasses, doors, windows, partitions, and civil work. We deliver quality and precision.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary btn-lg">
                Get Started →
              </Link>
              <Link to="/services" className="btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <p className="stat-number">100+</p>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">15+</p>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">500+</p>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img
              src="/glass-work.jpg"
              alt="Glass and aluminium work showcase"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
