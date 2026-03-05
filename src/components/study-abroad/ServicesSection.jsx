"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ServicesSection.css";

const services = [
  {
    icon: "bi-award",
    title: "100% Scholarship Assistance",
    description:
      "We help you find and apply for scholarships to fund your education abroad.",
  },
  {
    icon: "bi-passport",
    title: "98% Visa Success Rate",
    description:
      "Expert guidance and documentation support to maximize your visa approval chances.",
  },
  {
    icon: "bi-mortarboard",
    title: "Top University Admissions",
    description:
      "Get admitted to top-ranked universities that match your profile and goals.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Application & Documentation",
    description:
      "End-to-end support for applications, SOPs, LORs, and all required documents.",
  },
  {
    icon: "bi-briefcase",
    title: "Career Guidance",
    description:
      "Personalized career counselling to choose the right course and country.",
  },
  {
    icon: "bi-house-door",
    title: "Accommodation Support",
    description:
      "We help you find safe and affordable accommodation in your study destination.",
  },
  {
    icon: "bi-translate",
    title: "IELTS / TOEFL Coaching",
    description:
      "Structured coaching to help you achieve the required language test scores.",
  },
  {
    icon: "bi-airplane",
    title: "Post-Arrival Support",
    description:
      "Assistance with airport pickup, orientation, and settling in your new country.",
  },
];

const ServicesSection = () => {
  return (
    <section className="study-abroad-services py-5">
      <div className="container">
        <h2 className="study-abroad-section-title text-center">
          Premium Services for Your Success
        </h2>
        <p className="study-abroad-section-subtitle text-center">
          We provide end-to-end support to ensure your study abroad journey is
          smooth and successful.
        </p>
        <div className="study-abroad-services-grid">
          {services.map((service) => (
            <div key={service.title} className="study-abroad-service-card">
              <div className="study-abroad-service-icon-wrap">
                <i className={`bi ${service.icon} study-abroad-service-icon`} aria-hidden />
              </div>
              <h3 className="study-abroad-service-title">{service.title}</h3>
              <p className="study-abroad-service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
