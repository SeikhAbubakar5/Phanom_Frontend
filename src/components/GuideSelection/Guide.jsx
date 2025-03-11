import React from 'react';
import './Guide.css';
import profileImage from '../../assets/GuiderImage.png';
import Material from "../../assets/materialsymbols1.png"
import mobile from "../../assets/fluentmobile2.png"
import seo from "../../assets/iconpark3.png"
import star from "../../assets/Star.png"
import starempty from "../../assets/Starempty.png"
const Guide = () => {
    return (
        <div className="guide-section">
            <div className="guide-container">
                <div className="profile-info">
                    <div className="subtitle">
                    <h3>Adarsh</h3>
                    <p >Phanom Guide</p>
                    </div>
                    <img src={profileImage} alt="Adarsh - guide Expert" className="profile-image" />
                </div>

                <div className="guide-content">
                    <span>Virtual Private Server</span>
                    <h1>Flexible, private, and affordable VPS Hosting</h1>

                    <div className="features">
                        <div className="feature-item">
                            <span className="icon"><img src={Material} alt=''/></span>
                            <p>Expand major projects with hardware strategy design options.</p>
                        </div>
                        <div className="feature-item">
                            <span className="icon"><img src={mobile} alt=''/></span>
                            <p>Pick Your Dream OS</p>
                        </div>
                        <div className="feature-item">
                            <span className="icon"><img src={seo} alt=''/></span>
                            <p>Maintain Sites and Applications uptime of 99.9%*</p>
                        </div>
                    </div>

                    <div className="cta-buttons">
                        <button className="btn primary">Get Plans and Pricing →</button>
                        <button className="btn secondary">Buy Fully Managed VPS</button>
                    </div>

                    <div className="rating">
                        <div className="stars">
                            <span><img src={star}/></span>
                            <span><img src={star}/></span>
                            <span><img src={star}/></span>
                            <span><img src={star}/></span>
                            <span><img src={starempty}/></span>
                            <span className="rating-text">4.6 out of 5 stars based on 110,937 reviews</span>
                        </div>
                        <a href="#reviews" className="view-all">View All</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;