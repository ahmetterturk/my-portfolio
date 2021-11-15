import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <div className="social-logo">Ahmet Erturk</div>
          </div>
          <small className="website-rights">Ahmet Erturk © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link twitter"
              href="https://www.linkedin.com/in/erturkahmet/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://github.com/ahmetterturk"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link twitter"
              href="#"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
