import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="portfolio-nav">
      <div className="container">

        {/* Portfolio Brand */}
        <NavLink to="/" className="nav-brand">
          SydGrace<span className="brand-period">.</span>
        </NavLink>

        {/* Page Navigation */}
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/work">
            Work
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/art">
            Art
          </NavLink>

          <NavLink to="/resume">
            Résumé
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
