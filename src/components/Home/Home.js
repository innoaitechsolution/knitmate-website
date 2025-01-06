import React from 'react';
import './Home.css';
import AppShowcase from '../../assets/AppShowcase.png';

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <div className="banner__content">
          <h1>Plan, Track, Knit. Made Easy.</h1>
          <p>Your personalized knitting calculator & guide!</p>

          <div className="home__getapp">
            <p>Download KnittMates and start your journey today!</p>
            <div className="getapp__buttons">
              <a
                href="https://play.google.com/store/apps/details?id=com.innoaits.knitmate&hl=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-appstore"
              >
                Get it on Google Play
              </a>
              <a href="Coming Soon" className="btn-appstore disabled">
              Download on the App Store (Coming Soon)
              </a>
            </div>
          </div>
        </div>
        <div className="banner__image">
          <img src={AppShowcase} alt="KnittMates App Showcase" className="image__showcase" />
        </div>
      </div>
    </div>
  );
};

export default Home;
