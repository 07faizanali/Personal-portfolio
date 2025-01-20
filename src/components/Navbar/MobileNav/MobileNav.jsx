import React from 'react'
import "./MobileNav.css"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'


const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
    <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
    >
        <div className='mobile-menu-container'>
        <img className='logo' src='./photos/resume.png' alt='' />
        <ul>
          <li>
            <a href='/' className='menu-item'>Home</a>
          </li>
                  
          <li>
            <a href='#skills' className='menu-item'>Skills</a>
          </li>
          <li>
            <a href='#projects' className='menu-item'>Projects</a>
          </li>
          
          <li>
            <a href='#experience' className='menu-item'>Work Experience </a>
          </li>

          <li>
            <a href='#aboutme' className='menu-item'>AboutMe</a>
          </li>
        
          <a href='Faizan_ali_cv.pdf' download='Faizan_ali_cv.pdf' className='contact-btn2' >
           <DownloadForOfflineIcon/> Resume
            </a>

          <a href='#contact' className='contact-btn2' >
            Hire Me
            </a>
        </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav