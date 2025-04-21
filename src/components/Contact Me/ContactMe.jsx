import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section id='contact' className='contact-container'>
      <h2 className='contact-title'>Send Me a Message</h2>
      <p className='contact-subtitle'>I'd love to connect with you! Reach out through the form or contact me directly.</p>

      <div className='contact-content'>
        <div className='contact-left'>
          <ContactInfoCard
            iconUrl="./assets/images/icon-gmail.png"
            text="faizanali.webdev@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/icon-github.gif"
            text="https://github.com/07faizanali"
          />
        </div>

        <div className='contact-right'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
