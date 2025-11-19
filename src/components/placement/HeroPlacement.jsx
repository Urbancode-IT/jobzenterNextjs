import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroPlacement.css";

const HeroPlacement = () => {
  return (
    <section className="placement-hero-bg d-flex align-items-center">
      <div className="container text-center">

        <h1 className="placement-hero-heading">
          Placement Services
        </h1>

        <p className="placement-hero-desc mx-auto">
          Our Placement Services are designed to connect skilled candidates with the right
          career opportunities. We work closely with both job seekers and employers to ensure
          a perfect match that supports long-term success.
        </p>

        <button className="placement-hero-register-btn mx-auto d-block">
          Register
        </button>

      </div>
    </section>
  );
};

export default HeroPlacement;
