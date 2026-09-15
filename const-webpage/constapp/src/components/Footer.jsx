import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">

          <div className="footer-logo">
                    
            <img src={logo} alt="logo" width="150px" height="100px" />
          </div>

          <p>
            Building exceptional spaces with quality,
            transparency and care.
          </p>

          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>


        {/* Company Links */}
        <div className="footer-column">

          <h3>Company</h3>

          <a href="#about">About Us</a>
          <a href="#projects">Our Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>Services</h3>

          <a href="#services">Interior Design</a>
          <a href="#services">Renovation</a>
          <a href="#services">Architecture</a>
          <a href="#services">Construction</a>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Get In Touch</h3>

          <p>📍 Chennai, Tamil Nadu</p>

          <p>📞 +91 98765 43210</p>

          <p>✉️ hello@bluepeak.com</p>

          <p>🕐 Mon - Sat: 9 AM - 7 PM</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 BluePeak Construction. All Rights Reserved.
        </p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;