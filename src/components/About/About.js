import React from 'react';
import './About.css';
import storyImage from '../../assets/story.png'; 

const About = () => {
  return (
    <div className="about">
      {/* Header Section */}
      <section className="about__header">
        <h1>About KnittMates</h1>
        <p>Discover the story behind your knitting companion.</p>
      </section>

      {/* Our Story Section */}
      <section className="about__story">
        <div className="story__content">
          <h2>Our Story</h2>
          <p>
          Knitt Mates is more than a knitting app. It’s a gateway to a world where every stitch holds meaning. Born from the need for reflection in today’s fast-paced life, Knitt Mates transforms knitting into a lifestyle, offering tools to plan, track, and create while fostering inner peace and joy.         
          </p>
          <p>
          Every stitch tells a story, and Knitt Mates helps you weave yours. With a community that inspires creativity and hope, it’s the perfect space to bring your dream projects to life and find moments of calm in the art of knitting.          
          </p>
        </div>
        <div className="story__image">
          <img src={storyImage} alt="Knitting story" />
        </div>
      </section>

      {/* App Download Section */}
<section className="about__app-download">
  <h2>Download the App</h2>
  <p>Start your knitting journey today with KnittMates!</p>
  <div className="app__buttons">
    {/* Google Play Button */}
    <a
      href="https://play.google.com/store/apps/details?id=com.innoaits.knitmate&hl=en_GB" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="google-play"
    >
      <i className="fab fa-google-play"></i> Get it on Google Play
    </a>
    {/* App Store Button */}
    <button className="app-store">
      <i className="fab fa-apple"></i> Download on the App Store (Coming Soon)      
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
