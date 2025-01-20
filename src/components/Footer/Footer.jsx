import React from 'react'
import './Footer.css'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationIcon from '@mui/icons-material/LocationOn'


const Footer = () => {
  return (
    <>
    <section className="footer">
      <div className='Quick-Links'>

      <h5>Quicks Links</h5>
      <ul>
      <li>
        <a href='#skills'>Skills</a>
      </li>
      <li>
      <a href='#experience'>Work Experience</a>
      </li>
      <li>
      <a href='#projects'>Project</a>
      </li>
      <li>
      <a href='#aboutme'>About Me</a>
      </li>
      <li>
      <a href='#contactme'>Contact Me</a>
      </li>
      </ul>
      </div>
<div className='Contact'>
      <h5>Contact Me</h5>
    <PhoneIcon/><a href='https://wa.me/9990891895' target='_blank'> +91-9990891895</a><br/>
     <EmailIcon/> <a href='mailto:1998faizali@gmail.com' target='_blank'> 1998faizali@gmail.com</a><br/>
      <LocationIcon/> <p>Delhi, India  </p>
      <iframe
      // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13999.127880296084!2d77.28292850000004!3d28.69616800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc759be98409%3A0xb6d651be78bf3035!2sKardampuri%20Extn%2C%20Kardam%20Puri%2C%20Babarpur%2C%20Delhi%2C%20110032!5e0!3m2!1sen!2sin!4v1707130456485!5m2!1sen!2sin"
      width="200" height="200"  allowfullscreen="" loading="lazy" >
      </iframe>
       </div>

       <div className='social-media'>
        
        <h5>Social Media</h5>
        <ul>
        <li>
         <TelegramIcon/> <a href='https://www.t.me/Faizanali098' target='_blank'> Telegram</a>
        </li>
        <li>
        <InstagramIcon/><a href='https://www.instagram.com/ali_._faizan' target='_blank'> Instagram</a>
        </li>
        <li>
        <LinkedInIcon/><a href='https://www.linkedin.com/in/07faizanali' target='_blank'> LinkedIn</a>
        </li>
        <li>
        <GithubIcon/><a href='https://www.github.com/07faizanali' target='_blank'> GitHub</a>
        </li>
        </ul>
        </div>
       
      </section>
         
    <div className='Last-footer'>
      
        <p>@copyright:2025 Design By Faizan Ali</p>
    </div>
    </>
  )
}

export default Footer