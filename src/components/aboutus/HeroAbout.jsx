"use client";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroAbout.css";

const HeroSection = () => {
  const [visibleTitles, setVisibleTitles] = useState([]);
  const titleRefs = useRef([]);

  /* ── Heading Gradient Sweep observer ── */
  useEffect(() => {
    const observers = [];
    titleRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleTitles((prev) => [...prev, index]), 100);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE — CONTENT */}
          <div className="col-md-6 hero-text-animate">
            <p className="hero-tag">Who We Are</p>
            <h1
              ref={(el) => (titleRefs.current[0] = el)}
              className={`hero-title-about ${visibleTitles.includes(0) ? "title-sweep" : ""}`}
            >
              About Us
            </h1>
            <p className="hero-subtitle">
             "Thousands of jobs are available, but only a few are truly prepared to grab them.
In a world full of applicants, skills and confidence make the real difference.
At JobZenter, we don’t just train — we transform you into the right candidate.
Every step you take with us brings you closer to your dream career.
Don’t just apply for jobs, become someone companies are searching for.
Stand out, get noticed, and secure your future.
Your offer letter isn’t a dream — it’s waiting for you."
            </p>
          </div>

          {/* RIGHT SIDE — 2 OVERLAPPING IMAGES */}
          <div className="col-md-6 hero-img-animate">
            <div className="hero-img-overlap">
              <img
                src="courses/aboutus/about1.png"
                alt="Student 1"
                className="hero-img-back"
              />
              <img
                src="courses/aboutus/about2.png"
                alt="Student 2"
                className="hero-img-front"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
