import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'


const ContactForm = () => { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zwjt8z7', 'template_fipiwkm', form.current, {
        publicKey: 'cdA3lcFmKwafRT3Bd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  return (


    <div className='contact-form-content'>
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Please Enter Your Full Name'  />
            <input type='email' name='user-email' placeholder='email@gmail.com' />
            <input type='text' name='subject' placeholder='subject' />
            <textarea type='text' name='message' placeholder='message' rows={5}/>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}


export default ContactForm