import React, { useState } from 'react'
import './Navbar.css'




const Navbar = () => {

  const [openMenu, setOpenMenu]= useState(false);

  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  };
  
  return (
    <>
       <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="mu">
            <span>FA</span>
          </div>
          <span className="m" >Faizan<span className="umair">ali</span></span>
          <ul className="navLinks">
            <li><a href="/">Home</a></li>
            <li><a href="#about">AboutMe</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            
            </ul>
            <button  className="btn">Hire Me </button>
          
        </nav>
      </div>
    </header>


    </>
  );
};

export default Navbar