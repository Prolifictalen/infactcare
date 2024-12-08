import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../Assets/banner_img.jpeg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      {/* Home Header Section */}
      <div className="home-container">
        <div className="home-text-section">
          <h1 className="heading">
            Giggles & Growth: Your Trusted Guide to Infant Care
          </h1>
          <p className="description">
            Discover expert guidance and joyful parenting on Giggles and Growth
            – your ultimate companion for nurturing happy, healthy infants.
          </p>
          <Link to="/login">
            <button className="secondary-button">
              Login <FiArrowRight />
            </button>
          </Link>
        </div>
        <img src={BannerImage} className="home-image" alt="banner"></img>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Giggles & Growth</h2>
        <p>
          Giggles & Growth is dedicated to providing parents with reliable
          information on infant care. Our mission is to support the journey of
          parenting with expert advice, community support, and a touch of joy.
          Join us as we explore the wonders of growth and development for the
          little ones.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          <h3>Giggles and Growth</h3>
          <p>Your Caring Partner for Child Development</p>
        </div>
        <div className="footer-middle">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li></li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>206 Ashok Vihar2</p>
          <p>Sector 59, New Delhi 1101</p>
          <p>Email: prolific.talen.a@gmail.com</p>
          <p>Phone: +91 810333XXXX</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
