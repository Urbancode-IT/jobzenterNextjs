import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroAbout.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE — CONTENT */}
          <div className="col-md-6">
            <h1 className="hero-title-about">About Us</h1>
            <p className="hero-subtitle">
              Trusted by thousands, JobZenter is a leading career development
              and placement training institute committed to shaping
              future-ready professionals.
            </p>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="col-md-6 text-center">
            <img 
              src="/aboutus/abouthero.png"
              alt="About JobZenter"
              className="hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
