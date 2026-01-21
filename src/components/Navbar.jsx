import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setActiveSection(hash)
      } else {
        setActiveSection('home')
      }
    }

    // Initial check
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    // Track scroll position to detect active section
    const handleScroll = () => {
      const sections = ['home', 'what-we-do', 'our-story', 'our-system', 'our-team', 'contact']
      const scrollPos = window.scrollY + 150

      // If at top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('home')
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPos >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isActive = (section) => {
    return activeSection === section
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveSection('home')
    window.history.replaceState(null, null, window.location.pathname)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Syndeou
        </Link>
        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
              <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li>
                  <a
                    href="#"
                    className={isActive('home') ? 'active' : ''}
                    onClick={handleHomeClick}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#what-we-do"
                    className={isActive('what-we-do') ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="#our-story"
                    className={isActive('our-story') ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#our-system"
                    className={isActive('our-system') ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our System
                  </a>
                </li>
                <li>
                  <a
                    href="#our-team"
                    className={isActive('our-team') ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={isActive('contact') ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
      </div>
    </nav>
  )
}

export default Navbar

