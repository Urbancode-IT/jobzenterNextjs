"use client";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroAbout.css";

/* Fixed corners (reference): only dashed rings rotate — labels stay upright */
const ORBIT_CHIPS = [
  { corner: "tl", text: "Job-Ready" },
  { corner: "tr", text: "Skill-First" },
  { corner: "bl", text: "Top Placements" },
  { corner: "br", text: "Dream Careers" },
];

const HeroSection = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const revealIfInView = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        setHeroVisible(true);
        return true;
      }
      return false;
    };

    if (revealIfInView()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -2% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero-section hero-about ${heroVisible ? "hero-about--visible" : ""}`}
      aria-labelledby="about-hero-heading"
    >
      <div className="hero-about-bg" aria-hidden="true">
        <span className="hero-blob hero-blob--a" />
        <span className="hero-blob hero-blob--b" />
        <span className="hero-blob hero-blob--c" />
        <div className="hero-grid-fade" />
      </div>

      <div className="container position-relative hero-about-container">
        <div className="row align-items-center gy-5 gx-lg-5">
          <div className="col-12 col-lg-7">
            <div className="hero-about-content">
              <h1 id="about-hero-heading" className={`hero-about-heading ${heroVisible ? "title-sweep" : ""}`}>
                About Us
              </h1>

              <p className="hero-about-lead">
                We don&apos;t just teach skills — we build confident, job-ready
                professionals that companies genuinely want to hire.
              </p>

              <ul className="hero-about-pills" aria-label="Highlights">
                <li className="hero-about-pill">
                  <span className="hero-pill-dot" aria-hidden="true" />
                  Industry-aligned curriculum
                </li>
                <li className="hero-about-pill">
                  <span className="hero-pill-dot" aria-hidden="true" />
                  Hands-on projects
                </li>
                <li className="hero-about-pill">
                  <span className="hero-pill-dot" aria-hidden="true" />
                  Placement support
                </li>
              </ul>

              <figure className="hero-about-quote-card">
                <span className="hero-quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="hero-about-quote">
                  Thousands of jobs are available, but only a few are truly
                  prepared to grab them. In a world full of applicants, skills
                  and confidence make the real difference. At JobZenter, we
                  don&apos;t just train — we transform you into the right
                  candidate. Every step you take with us brings you closer to
                  your dream career. Don&apos;t just apply for jobs, become
                  someone companies are searching for. Stand out, get noticed,
                  and secure your future. Your offer letter isn&apos;t a dream —
                  it&apos;s waiting for you.
                </blockquote>
              </figure>

              <div className="hero-about-stats" role="group" aria-label="Impact highlights">
                <div className="hero-stat">
                  <span className="hero-stat-value">100+</span>
                  <span className="hero-stat-label">Students placed</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">100%</span>
                  <span className="hero-stat-label">Placement rate</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">30+</span>
                  <span className="hero-stat-label">Partner companies</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="hero-visual-column">
              <div className="hero-orbit-stage">
                <div className="hero-orbit-ring hero-orbit-ring--outer" aria-hidden="true" />
                <div className="hero-orbit-ring hero-orbit-ring--inner" aria-hidden="true" />

                <div className="hero-orbit-labels">
                  {ORBIT_CHIPS.map(({ corner, text }) => (
                    <span
                      key={corner}
                      className={`hero-orbit-chip hero-orbit-chip--${corner}`}
                    >
                      <span className="hero-orbit-chip-dot" aria-hidden="true" />
                      {text}
                    </span>
                  ))}
                </div>

                <div className="hero-orbit-hub">
                  <img
                    src="/log.png"
                    alt="Jobzenter JZ Logo"
                    className="hero-orbit-logo"
                    width={280}
                    height={280}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
