import { useState } from 'react'
import { Link } from 'react-router-dom'

const portfolioItems = [
  {
    id: 1,
    title: 'Corporate Office Partition',
    category: 'Partitions',
    image: '/partitions.jpg',
    description: 'Modern glass partitions for a tech startup office',
  },
  {
    id: 2,
    title: 'Luxury Building Facade',
    category: 'Windows',
    image: '/windows.jpg',
    description: 'Premium window installation in high-rise building',
  },
  {
    id: 3,
    title: 'Showroom Glass Work',
    category: 'Glass',
    image: '/glass-work.jpg',
    description: 'Complete glass solutions for retail showcase',
  },
  {
    id: 4,
    title: 'Entrance Door System',
    category: 'Doors',
    image: '/aluminium-doors.jpg',
    description: 'Automated aluminium door installation',
  },
  {
    id: 5,
    title: 'Modern Ceiling Design',
    category: 'Ceiling',
    image: '/false-ceiling.jpg',
    description: 'False ceiling with integrated LED lighting',
  },
  {
    id: 6,
    title: 'Construction Project',
    category: 'Civil',
    image: '/civil-work.jpg',
    description: 'Large-scale structural fabrication work',
  },
  {
    id: 7,
    title: 'Contemporary Living Space',
    category: 'Interior Design',
    image: '/interior-design.jpg',
    description: 'Complete interior design transformation for luxury residential space',
  },
  {
    id: 8,
    title: 'Custom Furniture Suite',
    category: 'Furniture',
    image: '/furniture.jpg',
    description: 'Bespoke furniture design and fabrication for modern office',
  },
  {
    id: 9,
    title: 'Exterior Painting Project',
    category: 'Painting',
    image: '/painting.jpg',
    description: 'Professional exterior painting with premium quality finish',
  },
  {
    id: 10,
    title: 'Residential Wooden Flooring',
    category: 'Flooring',
    image: '/residential-flooring.jpg',
    description: 'Premium wooden and tile flooring installation for luxury residence',
  },
  {
    id: 11,
    title: 'Commercial Space Flooring',
    category: 'Flooring',
    image: '/commercial-flooring.jpg',
    description: 'Durable flooring solution for high-traffic commercial areas',
  },
  {
    id: 12,
    title: 'Modern Glass Facade',
    category: 'Glass',
    image: '/glass-work-2.jpg',
    description: 'Stunning glass facade installation on commercial building',
  },
  {
    id: 13,
    title: 'Automatic Door System',
    category: 'Doors',
    image: '/aluminium-doors-2.jpg',
    description: 'Advanced automatic sliding door system installation',
  },
  {
    id: 14,
    title: 'Panoramic Windows',
    category: 'Windows',
    image: '/windows-2.jpg',
    description: 'Floor-to-ceiling panoramic windows for modern apartment',
  },
  {
    id: 15,
    title: 'Office Partition System',
    category: 'Partitions',
    image: '/partitions-2.jpg',
    description: 'Modular glass partition system for corporate workspace',
  },
  {
    id: 16,
    title: 'Modern Suspended Ceiling',
    category: 'Ceiling',
    image: '/false-ceiling-2.jpg',
    description: 'Contemporary suspended ceiling with LED integration',
  },
  {
    id: 17,
    title: 'Bedroom Interior Design',
    category: 'Interior Design',
    image: '/interior-design-2.jpg',
    description: 'Luxury bedroom interior design with elegant furnishings',
  },
  {
    id: 18,
    title: 'Office Workspace Design',
    category: 'Furniture',
    image: '/furniture-2.jpg',
    description: 'Custom modular office furniture and workspace solution',
  },
  {
    id: 19,
    title: 'Interior Wall Painting',
    category: 'Painting',
    image: '/painting-2.jpg',
    description: 'Professional interior painting with accent wall design',
  },
  {
    id: 20,
    title: 'Steel Structure Fabrication',
    category: 'Civil',
    image: '/civil-work-2.jpg',
    description: 'Large-scale structural steel fabrication and installation',
  },
]

const categories = ['All', 'Glass', 'Doors', 'Windows', 'Partitions', 'Ceiling', 'Civil', 'Interior Design', 'Furniture', 'Painting', 'Flooring']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <span className="badge-icon">🏆</span>
            <span className="badge-text">PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Our Completed Projects
          </h2>
          <p className="section-description">
            Showcase of our finest work across various sectors and project types
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              {/* Image */}
              <div className="portfolio-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                />
                <div className="portfolio-overlay" />
              </div>

              {/* Overlay Content */}
              <div className="portfolio-content-overlay">
                <span className="portfolio-category-badge">{item.category}</span>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <p className="portfolio-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="portfolio-cta">
          <p className="cta-text">Want to see more of our work?</p>
          <Link to="/contact" className="btn-primary btn-lg">
            Request Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
