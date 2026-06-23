"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./MbbsAbroadSection.css";

const trustPoints = ["WHO Recognized", "Globally Accepted", "English Medium Programs"];

const features = [
  {
    icon: "bi-cash-coin",
    title: "Affordable Tuition Fees",
    desc: "Save up to 60% on tuition fees.",
  },
  {
    icon: "bi-globe2",
    title: "Global Medical Exposure",
    desc: "Gain international clinical exposure.",
  },
  {
    icon: "bi-translate",
    title: "English Medium Programs",
    desc: "Complete your MBBS fully in English.",
  },
  {
    icon: "bi-clipboard-check",
    title: "Admission Assistance",
    desc: "End-to-end support for admissions.",
  },
  {
    icon: "bi-passport",
    title: "Visa Support",
    desc: "Expert visa guidance and travel support.",
  },
  {
    icon: "bi-house-heart",
    title: "Safe Accommodation",
    desc: "Hassle-free, secure stay abroad.",
  },
  {
    icon: "bi-briefcase",
    title: "Career Opportunities",
    desc: "Bright career prospects after MBBS.",
  },
  {
    icon: "bi-person-check",
    title: "Student Guidance",
    desc: "Dedicated mentorship at every step.",
  },
];

const stats = [
  { value: "6", suffix: "+", label: "MBBS Destinations" },
  { value: "50", suffix: "+", label: "Partner Universities" },
  { value: "6", suffix: " Yrs", label: "Programme Duration" },
  { value: "100", suffix: "%", label: "Admission Support" },
];

const AnimatedFeatureCard = ({ feature, index }) => {
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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`study-abroad-mbbs-feature-card ${isVisible ? "card-entrance" : "card-hidden"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="study-abroad-mbbs-feature-icon-wrap">
        <i className={`bi ${feature.icon} study-abroad-mbbs-feature-icon`} aria-hidden />
      </div>
      <h3 className="study-abroad-mbbs-feature-title">{feature.title}</h3>
      <p className="study-abroad-mbbs-feature-desc">{feature.desc}</p>
    </div>
  );
};

const MbbsAbroadSection = () => {
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
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="study-abroad-mbbs py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left column */}
          <div className="col-lg-6">
            <span className="study-abroad-mbbs-badge">Study MBBS Abroad</span>
            <h2 ref={titleRef} className={`study-abroad-mbbs-title ${isSweepActive ? "mbbs-sweep-active" : ""}`}>
              Study MBBS Abroad
            </h2>
            <p className="study-abroad-mbbs-desc">
              Pursue your dream of becoming a doctor with globally recognized
              medical universities offering affordable tuition fees,
              international exposure, and quality education.
            </p>
            <div className="study-abroad-mbbs-trust-row">
              {trustPoints.map((point) => (
                <span key={point} className="study-abroad-mbbs-trust-item">
                  <i className="bi bi-check-lg study-abroad-mbbs-trust-icon" aria-hidden />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="col-lg-6">
            <div className="study-abroad-mbbs-img-stage">
              <div className="study-abroad-mbbs-img-frame">
                {/* Soft yellow glow behind the image */}
                <div className="study-abroad-mbbs-img-glow" aria-hidden />

                {/* Floating decorative shapes */}
                <motion.span
                  className="study-abroad-mbbs-shape study-abroad-mbbs-shape-dot"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <motion.span
                  className="study-abroad-mbbs-shape study-abroad-mbbs-shape-ring"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  aria-hidden
                />
                <motion.span
                  className="study-abroad-mbbs-shape study-abroad-mbbs-shape-small"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  aria-hidden
                />

                <motion.div
                  className="study-abroad-mbbs-img-wrap"
                  initial={{ opacity: 0, x: 40, scale: 0.92 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div
                    className="study-abroad-mbbs-img-float"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/Study-Abroad/mbbs.png"
                      alt="Medical student pursuing MBBS abroad"
                      fill
                      sizes="(max-width: 991px) 100vw, 420px"
                      quality={92}
                      className="study-abroad-mbbs-img"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="study-abroad-mbbs-features-grid">
          {features.map((feature, index) => (
            <AnimatedFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="study-abroad-mbbs-stats-bar">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="study-abroad-mbbs-stat-item">
                <h3>
                  {stat.value}
                  <span>{stat.suffix}</span>
                </h3>
                <p>{stat.label}</p>
              </div>
              {index !== stats.length - 1 && (
                <div className="study-abroad-mbbs-stat-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MbbsAbroadSection;
