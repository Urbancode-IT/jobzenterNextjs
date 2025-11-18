import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroAbout.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <h1 className="hero-title-about">About Us</h1>
        <p className="hero-subtitle">
          Trusted by thousands, JobZenter is a leading career development and
          placement training institute committed to shaping future-ready
          professionals.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
