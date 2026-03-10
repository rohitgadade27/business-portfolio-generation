import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ]

  return (
    <header className="header-sticky">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-main">Vijay</h1>
            <p className="logo-sub">Enterprises</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link to="/contact" className="btn-primary btn-desktop">
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-toggle"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="nav-mobile">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="nav-link-mobile"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary btn-mobile"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
