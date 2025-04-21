import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn,  FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-box about">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam itaque unde facere repellendus.</p>
          
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail" />
            <button>Send</button>
          </div>
        </div>

        <div className="contact-info">
          <p><FaPhoneAlt className="icon" /><strong>Phone:</strong> +91-9990891895</p>
          <p><FaEnvelope className="icon" /><strong>Email:</strong> faizanali.webdev@gmail.com</p>
          <p><FaMapLocation className="icon" /><strong>Address:</strong> Delhi-110094</p>

          <div className="social-icons">
            <a href="https://wa.me/919990891895" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-box instagram">
          <h3>Instagram</h3>
          <div className="insta-grid">
            <img src="https://via.placeholder.com/70" alt="insta1" />
            <img src="https://via.placeholder.com/70" alt="insta2" />
            <img src="https://via.placeholder.com/70" alt="insta3" />
            <img src="https://via.placeholder.com/70" alt="insta4" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
  <p>© 2025 Copyright | Made with ❤️ by <a href="https://https://linkedin.com/in/07faizanali" target="_blank" rel="noopener noreferrer">Faizan Ali</a></p>
</div>

    </footer>
  );
};

export default Footer;
