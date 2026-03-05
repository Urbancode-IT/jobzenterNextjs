"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import StudyAbroadEnquiryModal from "./StudyAbroadEnquiryModal";
import "./DestinationsSection.css";

const countries = [
  {
    name: "United States",
    description: "Land of Opportunity",
    universities: "120+ Universities",
    image: "/Study-Abroad/USA.png",
  },
  {
    name: "United Kingdom",
    description: "World-Class Education",
    universities: "90+ Universities",
    image: "/Study-Abroad/UK.png",
  },
  {
    name: "Canada",
    description: "Quality Living & Learning",
    universities: "100+ Universities",
    image: "/Study-Abroad/canada.png",
  },
  {
    name: "Australia",
    description: "Innovation & Research",
    universities: "80+ Universities",
    image: "/Study-Abroad/Australia.png",
  },
  {
    name: "Germany",
    description: "Tuition-Free Excellence",
    universities: "70+ Universities",
    image: "/Study-Abroad/Germany.png",
  },
  {
    name: "Ireland",
    description: "Tech Hub of Europe",
    universities: "30+ Universities",
    image: "/Study-Abroad/Ireland.png",
  },
  {
    name: "New Zealand",
    description: "Safe & Welcoming",
    universities: "25+ Universities",
    image: "/Study-Abroad/Newzealand.png",
  },
  {
    name: "Singapore",
    description: "Asia's Education Hub",
    universities: "35+ Universities",
    image: "/Study-Abroad/Singapore.png",
  },
];

const DestinationsSection = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const openEnquiry = (countryName) => {
    setSelectedCountry(countryName);
    setIsEnquiryOpen(true);
  };

  return (
    <section className="study-abroad-destinations py-5">
      <div className="container">
        <h2 className="study-abroad-section-title text-center">
          Choose Your Dream Destination
        </h2>
        <p className="study-abroad-section-subtitle text-center">
          Explore top-ranked universities in the world&apos;s most popular study
          destinations.
        </p>
        <div className="row g-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
            >
              <div className="study-abroad-destination-card">
                <div className="study-abroad-destination-img-wrap">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="study-abroad-destination-img"
                  />
                </div>
                <div className="study-abroad-destination-content">
                  <h3 className="study-abroad-destination-name">{country.name}</h3>
                  <p className="study-abroad-destination-desc">
                    {country.description}
                  </p>
                  <span className="study-abroad-destination-universities-pill">
                    {country.universities}
                  </span>
                  <button
                    type="button"
                    className="study-abroad-destination-btn"
                    onClick={() => openEnquiry(country.name)}
                  >
                    Enquire Now
                    <i className="bi bi-arrow-up-right" aria-hidden />
                  </button>
                </div>
              </div>
            </div>
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
