import React from 'react'
import "./Hero.css"



const Hero = () => {
  return (
    
    
    <section className="hero">
      <div className="containerAbout">
        <h5>Hi, I am </h5>
        <span className="name">Faizan Ali</span>
        <h1 className="ui">Software </h1>
        <span className="designer">Developer</span>
        <p><b>CAREER OBJECTIVE:</b> Aspiring Software Developer with a strong foundation in programming languages and a passion for creating efficient and scalable software solutions. Seeking an entry-level position to leverage my skills in web development, problem-solving, and software design to contribute to innovative projects and grow within a dynamic team.</p>
        <a href="#contact" className="cta">Hire Me</a>
      </div>
      
      <div className="circleContainer">
          <div className="circleImage">
            <img src="assets/images/hero-image2.png" alt="Profile" />
            <div className="rectangleContainer">
             <div className="rectangle"></div>
            </div>
          </div>
          <div className="heroBg"></div>
          <div className="socialIcons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/twitter.png" alt="Twitter" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/instagram.png" alt="Github" />
        </a>
      </div>
          
        </div>
      
    </section>
    
  )
}

export default Hero