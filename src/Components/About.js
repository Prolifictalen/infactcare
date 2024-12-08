import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Top Section */}
      <div className="about-top">
        <h1>Welcome to Giggles & Growth</h1>
        <p>
          A trusted platform for parents to explore expert advice and joyful
          parenting journeys. Discover resources designed to nurture healthy,
          happy little ones.
        </p>
      </div>

      {/* Middle Section */}
      <div className="about-middle">
        <h2>About Giggles & Growth</h2>
        <p>
          Giggles & Growth is dedicated to providing parents with reliable
          information on infant care. Our mission is to support the journey of
          parenting with expert advice, community support, and a touch of joy.
          Join us as we explore the wonders of growth and development for the
          little ones.
        </p>
        <p>
          Whether you're looking for guidance on infant nutrition, developmental
          milestones, or fun activities to engage with your child, Giggles &
          Growth is your go-to companion.
        </p>
        <p>
          We believe in empowering parents with knowledge and creating a
          supportive community for a fulfilling parenting experience.
        </p>
        <strong>
          Join Giggles & Growth today and experience a seamless way to nurture
          your child's development. Together, let's build a brighter, happier
          future for our little ones.
        </strong>
      </div>

      {/* Bottom Section */}
      <div className="about-bottom">
        <h3>Our Vision</h3>
        <p>
          To empower every parent with the knowledge and tools they need to
          raise happy, healthy, and confident children.
        </p>
      </div>
    </div>
  );
};

export default About;
