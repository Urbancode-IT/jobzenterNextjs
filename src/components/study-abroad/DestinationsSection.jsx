"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { studyAbroadDestinations } from "@/data/studyAbroadDestinations";
import StudyAbroadEnquiryModal from "./StudyAbroadEnquiryModal";
import "./DestinationsSection.css";

const AnimatedCard = ({ country, index, onEnquire }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
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
      <article className="study-abroad-destination-card">
        <div className="study-abroad-destination-img-wrap">
          <Image
            src={country.image}
            alt={country.name}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
            quality={92}
            className="study-abroad-destination-img"
          />
        </div>
        <div className="study-abroad-destination-content">
          <h3 className="study-abroad-destination-name">{country.name}</h3>
          <p className="study-abroad-destination-desc">{country.description}</p>
          <span className="study-abroad-destination-universities-pill">
            {country.universities}
          </span>
          <div className="study-abroad-destination-actions">
            <button
              type="button"
              className="study-abroad-destination-btn study-abroad-destination-btn-primary"
              onClick={() => onEnquire(country.name)}
            >
              Enquire Now
            </button>
            <Link
              href={`/study-abroad/${country.slug}`}
              className="study-abroad-destination-btn study-abroad-destination-btn-outline"
            >
              View Details
              <i className="bi bi-arrow-up-right" aria-hidden />
            </Link>
          </div>
        </div>
      </article>
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
          {studyAbroadDestinations.map((country, index) => (
            <AnimatedCard
              key={country.slug}
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
