import React from 'react';
import "./Footer.css";
import image from "../../../assets/Home/img/shape_bg.jpg";


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-parent">
            <img src={image} alt="no internet connection"/>
        </div>
    </div>
  );
};

export default Footer;