import React, { useState, useEffect } from 'react';
import './Landingpage.css';
import serverIcon from '../../assets/Server.png';
import designIcon from '../../assets/Server.png';
import qaIcon from '../../assets/Server.png';

const Landingpage = () => {
    const services = [
        {
            icon: serverIcon,
            title: "Server & Maintenance",
            description: "Promoting through SEO, ads, and app store optimization, followed by ongoing maintenance and support."
        },
        {
            icon: designIcon,
            title: "Design & Prototyping",
            description: "UI/UX design and creating interactive prototypes for user feedback."
        },
        {
            icon: qaIcon,
            title: "Quality Assurance",
            description: "Conducting testing, resolving bugs, and incorporating user feedback."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="services-container">
            <div className="rainbow-background">
                <div className="content-circle">
                    <img 
                        src={services[currentIndex].icon} 
                        alt={services[currentIndex].title} 
                        className="service-icon"
                    />
                    <h2>{services[currentIndex].title}</h2>
                    <p>{services[currentIndex].description}</p>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;