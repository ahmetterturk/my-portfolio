import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            Ahmet Erturk
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a
                href="https://github.com/ahmetterturk"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Github
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/erturkahmet/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
