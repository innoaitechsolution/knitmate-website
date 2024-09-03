import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">Welcome to <span className="introName">KnittMates🧶</span></span>  
                <p className="introPara">Your ultimate destination for all things knitting. Plan, track, and estimate your yarn needs with ease. Let's knit together and bring your creative projects to life!</p> 
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Get in Touch!</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
