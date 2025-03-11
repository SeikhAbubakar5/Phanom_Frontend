import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/phantomFooter.png';
import phone from "../../assets/phoneicon.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h2>Let's make something<br />great together.</h2>
                <p>Let us know what challenges you are trying to solve so we can help.</p>
                <div className="join-btn">
                    <button >Join Us →</button>
                </div>
            </div>
            <div className='lines'>

            </div>
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-logo">
                        <img src={footerLogo} alt="Phanom Professionals" />
                    </div>
                    <div className="link-column">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#hire">Hire Indian Talent</a></li>
                            <li><a href="#portfolio">Our Portfolio</a></li>
                            <li><a href="#appointment">Book an Appointment</a></li>
                        </ul>
                    </div>

                    <div className="link-column">
                        <ul>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#linkedin">LinkedIn</a></li>
                            <li><a href="#pinterest">Pinterest</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                        </ul>
                    </div>

                    <div className="link-column">
                        <p>Address</p>
                        <p>
                            P-156, Block-S, DLF Tower,<br />
                            Near Sh. Industrial Area Sector<br />
                            P-5, Sahibabad, Guj Singh Nagar,<br />
                            Punjab 140055
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div >
                        <div className="legal-links">
                            <a href="#terms">Terms of Use</a>
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#cookies">About Cookies</a>
                        </div>
                        <div className="copyright">
                            <p >Copyright © 2023 Phanom Techno Private Ltd. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="contact-button">
                        <div className="phone-number">
                            <span className="phone-icon"><img src={phone} alt=''/></span>
                            <div>
                                <p>Call to ask any question</p>
                                <a href="tel:+916280072655">+91 (628) 007-2655</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer >
    );
};

export default Footer;