"use client";
import React, { useEffect, useRef, useState } from "react";
import "./MissionVision.css";

const CARDS = [
  {
    id: "mission",
    step: "01",
    label: "MISSION",
    accent: "jz-gold",
    heading: "What We Are Here to Do",
    body:
      "Deliver hands-on IT training, real project exposure, and placement support so every learner can build a confident, industry-ready career.",
    tags: ["PURPOSE", "IMPACT", "PEOPLE"],
    Icon: IconOctahedron,
  },
  {
    id: "vision",
    step: "02",
    label: "VISION",
    accent: "jz-amber",
    heading: "Where We Are Going",
    body:
      "To be the most trusted bridge between ambitious talent and the tech industry—known for quality mentoring, outcomes, and lifelong learner success.",
    tags: ["FUTURE", "GROWTH", "GLOBAL"],
    Icon: IconSphere,
  },
  {
    id: "goal",
    step: "03",
    label: "GOAL",
    accent: "jz-deep",
    heading: "How We Measure Success",
    body:
      "Placements, skill mastery, and learner satisfaction. We track progress with mock interviews, project reviews, and partner hiring pipelines.",
    tags: ["MILESTONES", "RESULTS", "2030"],
    Icon: IconCube,
  },
];

function IconOctahedron({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M50 8 L88 50 L50 92 L12 50 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M50 8 L50 92" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M12 50 L88 50" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M31 29 L69 71" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
      <path d="M69 29 L31 71" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
    </svg>
  );
}

function IconSphere({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="50" cy="50" rx="38" ry="38" stroke="currentColor" strokeWidth="1.1" />
      <ellipse
        cx="50"
        cy="50"
        rx="38"
        ry="14"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.75"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="14"
        ry="38"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.75"
      />
      <path
        d="M12 50 Q50 28 88 50 Q50 72 12 50"
        stroke="currentColor"
        strokeWidth="0.85"
        opacity="0.55"
      />
      <path
        d="M12 50 Q50 72 88 50 Q50 28 12 50"
        stroke="currentColor"
        strokeWidth="0.85"
        opacity="0.55"
      />
    </svg>
  );
}

function IconCube({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M22 58 L22 32 L50 18 L78 32 L78 58 L50 72 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M22 32 L50 46 L78 32" stroke="currentColor" strokeWidth="0.95" opacity="0.8" />
      <path d="M50 46 L50 72" stroke="currentColor" strokeWidth="0.95" opacity="0.8" />
      <path d="M50 18 L50 46" stroke="currentColor" strokeWidth="0.85" opacity="0.55" />
      <path d="M78 32 L50 46" stroke="currentColor" strokeWidth="0.85" opacity="0.45" />
      <path d="M22 32 L50 46" stroke="currentColor" strokeWidth="0.85" opacity="0.45" />
    </svg>
  );
}

export default function MissionVision() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mv-foundation ${sectionVisible ? "mv-foundation--visible" : ""}`}
      aria-labelledby="mv-foundation-title"
    >
      <div className="mv-foundation__inner">
        <header className="mv-foundation__header">
          <p className="mv-foundation__eyebrow">OUR FOUNDATION</p>
          <h2
            id="mv-foundation-title"
            ref={titleRef}
            className={`mv-foundation__title ${titleVisible ? "mv-foundation__title--visible" : ""}`}
          >
            Built on <em className="mv-foundation__title-accent">Purpose</em>, Driven by Vision
          </h2>
          <p className="mv-foundation__subtitle">
            Jobzenter exists to turn ambition into employability—through rigorous training,
            human mentorship, and a community that backs you until you win.
          </p>
        </header>

        <div className="mv-foundation__grid">
          {CARDS.map((card) => {
            const { Icon } = card;
            return (
              <article
                key={card.id}
                className={`mv-glass-card mv-glass-card--${card.accent}`}
              >
                <div className="mv-glass-card__glow" aria-hidden />
                <div className="mv-glass-card__icon-wrap">
                  <div className={`mv-icon-3d mv-icon-3d--${card.accent}`}>
                    <Icon className="mv-glass-card__icon" />
                  </div>
                </div>
                <p className="mv-glass-card__step">
                  {card.step} — {card.label}
                </p>
                <h3 className="mv-glass-card__heading">{card.heading}</h3>
                <span className="mv-glass-card__rule" aria-hidden />
                <p className="mv-glass-card__body">{card.body}</p>
                <ul className="mv-glass-card__tags" aria-label={`${card.label} focus areas`}>
                  {card.tags.map((tag) => (
                    <li key={tag}>
                      <span className="mv-glass-card__tag">{tag}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mv-foundation__stats" role="presentation">
          <div className="mv-foundation__stats-rule" aria-hidden />
          <dl className="mv-foundation__stats-grid">
            <div className="mv-foundation__stat">
              <dt className="sr-only">Years of excellence</dt>
              <dd>
                <span className="mv-foundation__stat-num">10+</span>
                <span className="mv-foundation__stat-label">Years of Excellence</span>
              </dd>
            </div>
            <div className="mv-foundation__stat">
              <dt className="sr-only">Hiring partners</dt>
              <dd>
                <span className="mv-foundation__stat-num">500+</span>
                <span className="mv-foundation__stat-label">Learners Supported</span>
              </dd>
            </div>
            <div className="mv-foundation__stat">
              <dt className="sr-only">Career journeys</dt>
              <dd>
                <span className="mv-foundation__stat-num">50+</span>
                <span className="mv-foundation__stat-label">Hiring Partners</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
