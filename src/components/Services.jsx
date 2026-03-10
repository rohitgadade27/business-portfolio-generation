import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: 'All Types of Glasses',
    description: 'Tempered glass, laminated glass, tinted glass, and custom glass solutions for residential and commercial spaces.',
    image: '/glass-work.jpg',
    icon: '🔷',
  },
  {
    id: 2,
    title: 'Aluminium Doors',
    description: 'High-quality aluminium door frames and systems with modern designs and superior durability.',
    image: '/aluminium-doors.jpg',
    icon: '🚪',
  },
  {
    id: 3,
    title: 'Windows & Partitions',
    description: 'Sliding windows, fixed windows, and glass partitions for offices, homes, and commercial establishments.',
    image: '/windows.jpg',
    icon: '📟',
  },
  {
    id: 4,
    title: 'Interior Partitions',
    description: 'Modern glass and aluminium partitions to create flexible and elegant interior spaces.',
    image: '/partitions.jpg',
    icon: '⚔️',
  },
  {
    id: 5,
    title: 'False Ceiling',
    description: 'Professional false ceiling installation with acoustic panels, LED integration, and modern designs.',
    image: '/false-ceiling.jpg',
    icon: '☁️',
  },
  {
    id: 6,
    title: 'Civil & Fabrication',
    description: 'Complete civil work, structural fabrication, and construction solutions for all your building needs.',
    image: '/civil-work.jpg',
    icon: '🏗️',
  },
  {
    id: 7,
    title: 'Interior Designing',
    description: 'Professional interior design services creating beautiful, functional spaces tailored to your style and needs.',
    image: '/interior-design.jpg',
    icon: '🎨',
  },
  {
    id: 8,
    title: 'Furniture & Fabrication',
    description: 'Custom furniture design and fabrication with premium materials and contemporary aesthetics.',
    image: '/furniture.jpg',
    icon: '🛋️',
  },
  {
    id: 9,
    title: 'Painting Services',
    description: 'Interior and exterior painting with high-quality finishes, color consultation, and expert application.',
    image: '/painting.jpg',
    icon: '🎭',
  },
  {
    id: 10,
    title: 'Residential Flooring',
    description: 'Premium residential flooring solutions including wood, tiles, and luxury vinyl with expert installation.',
    image: '/residential-flooring.jpg',
    icon: '✨',
  },
  {
    id: 11,
    title: 'Commercial Flooring',
    description: 'Durable commercial-grade flooring for offices, malls, and retail spaces with professional finishing.',
    image: '/commercial-flooring.jpg',
    icon: '🏢',
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">OUR EXPERTISE</span>
          </div>
          <h2 className="section-title">
            Comprehensive Solutions for Your Needs
          </h2>
          <p className="section-description">
            From glass and aluminium work to complete civil construction, we provide end-to-end solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* Image Container */}
              <div className="service-image">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                />
              </div>

              {/* Content */}
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/contact" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
