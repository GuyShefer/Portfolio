import React from 'react';
import './footer.style.css';
import logo from '../../assets/images/logo.png'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="find-me-right-here">
                    <ul>
                        <li><a href="mailto:shefer.guy1@gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/guy-shefer-5330791b3/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.facebook.com/gshefer1" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://github.com/GuyShefer" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
                <div className="footer-line-block"></div>
                <div className="logo"><img src={logo} alt="personal-logo"></img></div>
                <p>Guy Shefer &copy; 2021, All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;