import React from 'react';
import './Contact.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Description */}
        <div className="footer-logo">
          <h2>Giggles and Growth</h2>
          <p>
            At Giggles and Growth, we are passionate about supporting parents in nurturing 
            their child’s development. From expert advice to a welcoming community, we are 
            here to guide you every step of the way.
          </p>
          <p>
            Join us in exploring the joys of parenting, discover resources tailored to your needs, 
            and create memories that last a lifetime.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>
              206 Ashok Vihar<br />
              Sector 52, New Delhi 15101
            </p>
            <p>Email: <a href="mailto:infantcare24@gmail.com">infantcare24@gmail.com</a></p>
            <p>Phone: +91 810333XXXX</p>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <div className="footer-message">
        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Social Links */}
      <div className="footer-social">
        <p>Follow us on:</p>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
