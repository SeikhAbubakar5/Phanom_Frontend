import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Navlogo.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Phanom Professionals" />
        </div>


        <button className="hamburger-menu" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>


        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#service">Service <span><RiArrowDropDownLine /></span></a>
          </li>
          <li>
            <a href="#hire">Hire Indian Talent <span><RiArrowDropDownLine /></span></a>
          </li>
          <li><a href="#portfolio">Our Portfolio</a></li>
          <li><a href="#case-study">Case Study</a></li>
          <li>
            <button className="book-appointmentnav">Book an Appointment</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
