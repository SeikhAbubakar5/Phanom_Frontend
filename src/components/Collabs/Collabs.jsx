import React from 'react';
import './Collabs.css';
import logo1 from '../../assets/Ultralogo.png';
import logo2 from '../../assets/Powermodule.png';
import logo3 from '../../assets/Ultimatepower.png';
import logo4 from '../../assets/globe.png';
import logo5 from '../../assets/Logoipsum.png';

const Collabs = () => {
    return (
        <div className="collabs-container">
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={logo1} alt="Partner 1" />
                    </div>
                    <div className="slide">
                        <img src={logo2} alt="Partner 2" />
                    </div>
                    <div className="slide">
                        <img src={logo3} alt="Partner 3" />
                    </div>
                    <div className="slide">
                        <img src={logo4} alt="Partner 4" />
                    </div>
                    <div className="slide">
                        <img src={logo5} alt="Partner 5" />
                    </div>


                    <div className="slide">
                        <img src={logo1} alt="Partner 1" />
                    </div>
                    <div className="slide">
                        <img src={logo2} alt="Partner 2" />
                    </div>
                    <div className="slide">
                        <img src={logo3} alt="Partner 3" />
                    </div>
                    <div className="slide">
                        <img src={logo4} alt="Partner 4" />
                    </div>
                    <div className="slide">
                        <img src={logo5} alt="Partner 5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collabs;