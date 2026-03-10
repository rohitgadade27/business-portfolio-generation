import { Link } from 'react-router-dom'

export default function About() {
  const highlights = [
    {
      icon: '✓',
      title: 'Quality Assured',
      description: 'Premium materials and expert craftsmanship in every project',
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: '25+ years of experience with skilled professionals',
    },
    {
      icon: '⚡',
      title: 'On-Time Delivery',
      description: 'Efficient project management and timely completion',
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Left Content */}
          <div className="about-text">
            <h2 className="section-title">
              About <span className="primary">Vijay Enterprises</span>
            </h2>
            <p className="about-description">
              With over 15 years of experience in the glass, aluminium, and construction industry, Vijay
              Enterprises has established itself as a trusted name in Pune. We specialize in providing
              comprehensive solutions for glasses, aluminium doors, windows, partitions, false ceilings, civil
              fabrication, interior designing, furniture, painting, and premium flooring solutions for both
              residential and commercial spaces.
            </p>
            <p className="about-description">
              Our commitment to quality, precision, and customer satisfaction has made us the preferred choice
              for contractors, architects, businesses, and homeowners seeking complete building and design solutions.
            </p>

            <div className="highlights-list">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div>
                    <h3 className="highlight-title">{highlight.title}</h3>
                    <p className="highlight-description">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-primary btn-lg">
              Start Your Project
            </Link>
          </div>

          {/* Right Stats */}
          <div className="stats-box-grid">
            <div className="stat-box">
              <p className="stat-number">100+</p>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-box">
              <p className="stat-number">500+</p>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-box">
              <p className="stat-number">25+</p>
              <p className="stat-label">Years in Business</p>
            </div>
            <div className="stat-box">
              <p className="stat-number">100%</p>
              <p className="stat-label">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
