import React, { useState } from 'react';
import './Service.css';
import seoIcon from '../../assets/Seo.png';
import socialIcon from '../../assets/Social.png';
import ppcIcon from '../../assets/PPC.png';
import youtubeIcon from '../../assets/Youtube.png';
import smallIconSeo from "../../assets/iconseo.png";
import smallIconSocial from "../../assets/Iconsocialmedia.png";
import smallIconPay from "../../assets/iconpayper.png";
import smallIconYoutybe from "../../assets/iconyoutube.png";

const Services = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const itemsPerPage = 4;
    const slideDelay = 500;

    const services = [
        {
            icon: seoIcon,
            title: "240k+ Appointment Booked Today",
            description: "Technical SEO | On Page SEO | Off Page SEO | Local SEO",
        },
        {
            icon: socialIcon,
            title: "240k+ Appointment Booked Today",
            description: "Facebook | Instagram | X | LinkedIn Premium",
        },
        {
            icon: ppcIcon,
            title: "240k+ Appointment Booked Today",
            description: "Search Ads | Display Ads | Demand Gen Plus Ads | Video Ads ",
        },
        {
            icon: youtubeIcon,
            title: "240k+ Appointment Booked Today",
            description: "Channel SEO | Seo Non Skip Ads | Increase Subscriber & Views",
        },
        {
            icon: seoIcon,
            title: "Advanced SEO Strategies",
            description: "Keyword Research | Backlink Building | Site Audit",
        },
        {
            icon: socialIcon,
            title: "Social Media Mastery",
            description: "Content Creation | Ad Targeting | Engagement Boosting",
        },
        {
            icon: ppcIcon,
            title: "PPC Campaign Optimization",
            description: "Cost-Effective Bidding | Conversion Tracking | ROI Maximization",
        },
        {
            icon: youtubeIcon,
            title: "YouTube Growth Hacks",
            description: "Monetization | Content Strategy | Audience Retention",
        }
    ];

    const titles = [
        { title1: "Digital Marketing"},
        { title1: "Design & Developments"}
    ];

    const totalItems = services.length;
    const totalSlides = Math.ceil(totalItems / itemsPerPage);
    const currentTitleIndex = (startIndex / itemsPerPage) % totalSlides;

    const handleNext = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setStartIndex((prevIndex) =>
                prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage
            );
            setIsSliding(false);
        }, slideDelay);
    };

    const handlePrev = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setStartIndex((prevIndex) =>
                prevIndex - itemsPerPage < 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage
            );
            setIsSliding(false);
        }, slideDelay);
    };

    return (
        <div className="services-section">
            <div className="services-content">
                <div className="services-header">
                    <h2>Explore<br />our<br />Service</h2>
                    <p>Explore our service and discover solutions designed to meet your unique needs. With a focus on quality and innovation, we turn your vision into reality.</p>
                    <button className="book-appointment">Book an Appointment</button>
                </div>

                <div className='cards-content'>
                    <div className="services-title">
                        <div className="title-icon">
                            <img src={socialIcon} alt={titles[currentTitleIndex].title1} />
                            <h3>{titles[currentTitleIndex].title1}</h3>
                        </div>
                        <p>Keep your lawn in top shape without lifting a finger and boost the appearance of your property.</p>
                    </div>

                    <div className="services-cards">
                        {services.slice(startIndex, startIndex + itemsPerPage).map((service, index) => (
                            <div key={index} className="service-card">
                                <img src={service.icon} alt='' />
                                <div className='description'>
                                    <p>{service.title}</p>
                                    <h5>{service.description}</h5>
                                    <button className="learn-more">Learn More</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="navigation-buttons">
                        <button onClick={handlePrev} disabled={isSliding}>&lt;</button>
                        <button onClick={handleNext} disabled={isSliding}>&gt;</button>
                    </div>

                    <div className="tools">
                        <p>Tools:</p>
                        <div className="tool-icons">
                            <img src={smallIconSeo} alt='' />
                            <img src={smallIconSocial} alt='' />
                            <img src={smallIconPay} alt='' />
                            <img src={smallIconYoutybe} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Services;
