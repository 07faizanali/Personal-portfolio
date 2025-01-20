import React, { useState } from 'react'
import './Navbar.css'
// import MobileNav from './MobileNav/MobileNav';
import  DownloadForOfflineIcon  from '@mui/icons-material/DownloadForOffline';



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
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><DownloadForOfflineIcon className='downbtn'/><button  className="btn">Download CV</button></li>
          </ul>
          
        </nav>
      </div>
    </header>


    </>
  );
};

export default Navbar