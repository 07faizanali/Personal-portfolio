import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h5>Hello, I'm</h5>
        <h1 className="hero-name">
          <span className="orange">Faizan</span> <span className="black">Ali</span>
        </h1>
        <h2 className="role">Software Developer</h2>
        <p className="description">
          <strong>CAREER OBJECTIVE:</strong> Aspiring Software Developer with a strong foundation in programming languages and a passion for creating efficient and scalable software solutions. Seeking an entry-level position to leverage my skills in web development, problem-solving, and software design to contribute to innovative projects and grow within a dynamic team.
        </p>
        <div className="hero-buttons">
          <a href="/Faizanali_resume.pdf" className="download" download>Download CV</a>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/07faizanali" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://github.com/07faizanali" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/github.png" alt="github" />
          </a>
          <a href="https://instagram.com/ali_._faizan" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/instagram.png" alt="instagram" />
          </a>
        </div>
      </div>

      <div className="hero-image">
      <div className="image-wrapper">
      <img src="assets/images/hero-image2.png" alt="Profile" />
    </div>
  </div> 


    </section>
  );
};

export default Hero;
