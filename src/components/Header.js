import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
          <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
          <li><a href="https://github.com/your-username" onClick={toggleMenu}>GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/your-username" onClick={toggleMenu}>LinkedIn</a></li>
          <li><Link to="blog" smooth={true} duration={500} onClick={toggleMenu}>My Blog*</Link></li>

          <li><a href="/SorieBSillah-CV.pdf" download className="resume-button" onClick={toggleMenu}>Download my CV</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
