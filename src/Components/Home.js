import React from "react";
import BannerImage from "../Assets/banner_img.jpeg";
import ParentingImage from "../Assets/parenting.jpg";
import shopping from "../Assets/shopping.jpg";
import Food1 from "../Assets/Food1.jpg";
import vaccine from "../Assets/vaccine.jpg";

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      {/* Home Header Section */}
      <div className="home-container">
        <div className="home-text-section">
          <h1 className="heading">
            Giggles & Growth </h1>
          <h2>  Your Trusted Guide to Infant Care</h2>
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
      {/* Interactive Features Section */}
      <div className="interactive-section">
        <h2>Explore Our Features</h2>
        <p className="interactive-description">
          Click on any feature below to dive into a world of insights, guidance,
          and resources.
        </p>
        <div className="interactive-cards">
          <Link to="/blog" className="card">
            <img src={Food1} alt="food1" />
            <div className="card-content">
              <h3>Baby Nutrition</h3>
              <p>Explore our blogs on nutrition for a healthy and happy baby.</p>
            </div>
          </Link>
          <Link to="/blog" className="card">
            <img src={ParentingImage} alt="Parenting Tips" />
            <div className="card-content">
              <h3>Parenting Tips</h3>
              <p>
                Discover practical advice and tips to make parenting easier.
              </p>
            </div>
          </Link>
          <Link to="/shopping" className="card">
            <img src={shopping} alt="Shopping" />
            <div className="card-content">
              <h3>Shopping for Babies</h3>
              <p>
                Find essential items and curated products for your little one.
              </p>
            </div>
          </Link>
        </div>
        <div className="interactive-cards">
          <Link to="/Vaccine" className="card">
            <img src={vaccine} alt="Vaccine Guide" />
            <div className="card-content">
              <h3>Vaccine Guide</h3>
              <p>
                Learn about essential vaccines for your baby based on WHO
                recommendations.
              </p>
            </div>
          </Link>
        </div>
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
          <li><a href="/about">About Us</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/shopping">Shopping</a></li>
            
            
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
