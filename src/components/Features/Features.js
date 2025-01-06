import React from 'react';
import './Features.css';
import WhatToKnit from '../../assets/WhatToKnit.png';
import SelectPattern from '../../assets/SelectPattern.png';
import ProjectSummary from '../../assets/ProjectSummary.png';

const Features = () => {
  return (
    <div className="features">
      {/* Header Section */}
      <section className="features__header">
        <h1>Features</h1>
        <p>Discover how KnittMates makes your knitting journey effortless and fun.</p>
      </section>

      {/* Features Showcase Section */}
      <section className="features__showcase">
        <div className="feature__item">
          <img src={WhatToKnit} alt="What to Knit" />
          <h3>What Do You Want to Knit?</h3>
          <p>Choose what you want to knit today and get started with ease.</p>
        </div>
        <div className="feature__item">
          <img src={SelectPattern} alt="Select Pattern" />
          <h3>Select Your Pattern</h3>
          <p>Find the perfect knitting pattern that matches your style.</p>
        </div>
        <div className="feature__item">
          <img src={ProjectSummary} alt="Project Summary" />
          <h3>Track Your Progress</h3>
          <p>Review your project summary and celebrate your accomplishments.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="features__cta">
        <h2>Ready to Elevate Your Knitting?</h2>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.innoaits.knitmate&hl=en_GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Get it on Google Play</button>
          </a>
          <a
            href="Coming Soon"
                       
          >
            <button>Download on the App Store (Coming Soon)</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Features;
