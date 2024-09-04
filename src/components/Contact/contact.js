import React, { useRef } from 'react';
import './contact.css';
import XIcon from '../../assets/x.png';
import LinkedInIcon from '../../assets/linkedIn.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sgazfwc', 'template_edkezw9', form.current, {
        publicKey: 'e55t0YsBnsn57QEwf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset(); 
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">      
      <div id="contact">
        <h1 className="contactPageTitle">Contact Us!</h1>
        <span className="contactDesc">Share your Knitt Mates journey with us!</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='your_name'/>
              <input type="email" className="email" placeholder='Your Email' name='your_email'/>
              <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className="submitBtn">Submit</button>
              <div className="links"> 
              <a href="https://www.linkedin.com/company/100811930/admin">
  <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
</a>
<a href="https://x.com/knittmates">
  <img src={XIcon} alt="X" className="social-icon" /></a>    
                   
              </div>        
       </form>
      </div>

    </section> 
    
  );
}

export default Contact;