"use client";

import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import StudyAbroadEnquiryModal from "./StudyAbroadEnquiryModal";
import "./DestinationsSection.css";

const countries = [
  { name: "United States", description: "Land of Opportunity", universities: "120+ Universities", image: "/Study-Abroad/USA.png" },
  { name: "United Kingdom", description: "World-Class Education", universities: "90+ Universities", image: "/Study-Abroad/UK.png" },
  { name: "Canada", description: "Quality Living & Learning", universities: "100+ Universities", image: "/Study-Abroad/canada.png" },
  { name: "Australia", description: "Innovation & Research", universities: "80+ Universities", image: "/Study-Abroad/Australia.png" },
  { name: "Germany", description: "Tuition-Free Excellence", universities: "70+ Universities", image: "/Study-Abroad/Germany.png" },
  { name: "Ireland", description: "Tech Hub of Europe", universities: "30+ Universities", image: "/Study-Abroad/Ireland.png" },
  { name: "New Zealand", description: "Safe & Welcoming", universities: "25+ Universities", image: "/Study-Abroad/Newzealand.png" },
  { name: "Singapore", description: "Asia's Education Hub", universities: "35+ Universities", image: "/Study-Abroad/Singapore.png" },
];

const AnimatedCard = ({ country, index, onEnquire }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!visible) {
      if (index % 4 === 0) return "translateX(-50px)";
      if (index % 4 === 3) return "translateX(50px)";
      return "translateY(50px)";
    }
    return "translate(0)";
  };

  return (
    <div
      className="col-12 col-sm-6 col-lg-4 col-xl-3"
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div className="study-abroad-destination-card">
        <div className="study-abroad-destination-img-wrap">
          <img src={country.image} alt={country.name} className="study-abroad-destination-img" />
        </div>
        <div className="study-abroad-destination-content">
          <h3 className="study-abroad-destination-name">{country.name}</h3>
          <p className="study-abroad-destination-desc">{country.description}</p>
          <span className="study-abroad-destination-universities-pill">{country.universities}</span>
          <button
            type="button"
            className="study-abroad-destination-btn"
            onClick={() => onEnquire(country.name)}
          >
            Enquire Now
            <i className="bi bi-arrow-up-right" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
};

const DestinationsSection = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [titleVisible, setTitleVisible] = useState(false);
  const [isSweepActive, setIsSweepActive] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          setTimeout(() => setIsSweepActive(true), 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openEnquiry = (countryName) => {
    setSelectedCountry(countryName);
    setIsEnquiryOpen(true);
  };

  return (
    <section className="study-abroad-destinations py-5">
      <div className="container text-center">
        <h2
          ref={titleRef}
          className={`study-abroad-section-title ${isSweepActive ? "title-sweep" : ""}`}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Choose Your Dream Destination
        </h2>
        <p
          className="study-abroad-section-subtitle text-center"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          Explore top-ranked universities in the world&apos;s most popular study destinations.
        </p>
        <div className="row g-4">
          {countries.map((country, index) => (
            <AnimatedCard
              key={country.name}
              country={country}
              index={index}
              onEnquire={openEnquiry}
            />
          ))}
        </div>
      </div>
      <StudyAbroadEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        selectedCountry={selectedCountry}
      />
    </section>
  );
};

export default DestinationsSection;