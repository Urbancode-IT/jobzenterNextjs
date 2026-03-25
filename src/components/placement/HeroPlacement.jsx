'use client';
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroPlacement.css";

const HeroPlacement = () => {
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ph-animate');
        }
      });
    }, { threshold: 0.2 });

    if (descRef.current) observer.observe(descRef.current);
    if (btnRef.current) observer.observe(btnRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="placement-hero-bg d-flex align-items-center">
      <div className="container text-center">

        <h1 className="placement-hero-heading">
          Placement Services
        </h1>

        <p
          ref={descRef}
          className="placement-hero-desc mx-auto ph-fade-in"
          style={{ transitionDelay: '0.2s' }}
        >
          Our Placement Services are designed to connect skilled candidates with the right
          career opportunities. We work closely with both job seekers and employers to ensure
          a perfect match that supports long-term success.
        </p>

        <button
          ref={btnRef}
          className="placement-hero-register-btn mx-auto d-block ph-slide-up"
          style={{ transitionDelay: '0.4s' }}
        >
          Register
        </button>

      </div>
    </section>
  );
};

export default HeroPlacement;