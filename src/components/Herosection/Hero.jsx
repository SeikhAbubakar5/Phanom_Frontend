import React from 'react';
import './Hero.css';
import seoImage from '../../assets/Hero.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                        <span className="purple-text">Let's innovation</span> meets your excellence
                    </h1>
                    <p>Excellence refined, innovation ignited, the future starts here</p>
                    <button className="book-appointment">Book an Appointment</button>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-image">
                    <img src={seoImage} alt="SEO Illustration" />
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <h2>24/7</h2>
                        <p>Online Support</p>
                    </div>
                    <div className="stat-item">
                        <h2>100+</h2>
                        <p>Web Developed & Application</p>
                    </div>
                    <div className="stat-item">
                        <h2>5+</h2>
                        <p>Year Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
