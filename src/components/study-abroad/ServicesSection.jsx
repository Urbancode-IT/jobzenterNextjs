"use client";

import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ServicesSection.css";

const services = [
  {
    icon: "bi-mortarboard",
    title: "University Shortlisting",
    description:
      "We help you find the best universities that match your academic profile and career goals.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Application Assistance",
    description:
      "End-to-end help with filling out applications, SOPs, and LORs to ensure 100% accuracy.",
  },
  {
    icon: "bi-cash-coin",
    title: "Scholarship Guidance",
    description:
      "Assistance in finding and applying for scholarships to make your education more affordable.",
  },
  {
    icon: "bi-pass",
    title: "Visa Processing",
    description:
      "Expert guidance for visa documentation and interview preparation with a 98% success rate.",
  },
  {
    icon: "bi-house-heart",
    title: "Accommodation Support",
    description:
      "We help you find safe and affordable housing options near your university before you fly.",
  },
  {
    icon: "bi-airplane",
    title: "Post-Arrival Support",
    description:
      "Assistance with airport pickup, orientation, and settling in your new country.",
  },
];

const AnimatedServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`study-abroad-service-card ${isVisible ? "card-entrance" : "card-hidden"}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="study-abroad-service-icon-wrap">
        <i className={`bi ${service.icon} study-abroad-service-icon`} aria-hidden />
      </div>
      <h3 className="study-abroad-service-title">{service.title}</h3>
      <p className="study-abroad-service-desc">{service.description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const [isSweepActive, setIsSweepActive] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSweepActive(true);
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

  return (
    <section className="study-abroad-services py-5">
      <div className="container text-center">
        <h2
          ref={titleRef}
          className={`study-abroad-section-title ${isSweepActive ? "title-sweep" : ""}`}
        >
          Premium Services for Your Success
        </h2>
        <p className="study-abroad-section-subtitle text-center">
          We provide end-to-end support to ensure your study abroad journey is
          smooth and successful.
        </p>
        <div className="study-abroad-services-grid">
          {services.map((service, index) => (
            <AnimatedServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
