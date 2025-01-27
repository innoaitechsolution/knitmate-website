import React from 'react';
import './contact.css';
import { FaYoutube, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact__header">
        <h1>Contact Us</h1>
        <p>Have questions or need help? Reach out to us or send us a message!</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact__form">
        <form 
          action="https://formspree.io/f/mpwwojgn" 
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Social Media Section */}
      <section className="contact__social">
        <h2>Follow Us on Social Media</h2>
        <div className="social__icons">         
          <a href="https://www.youtube.com/@KnittMates" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.tiktok.com/@knittmates?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
