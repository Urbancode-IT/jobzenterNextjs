"use client";
import React, { useEffect, useRef, useState } from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  /* ── Scroll observer for cards ── */
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 180);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const cards = [
    { title: "Skill transformation", desc: "Training that prepares you for the real world." },
    { title: "Career growth",        desc: "Clarity and support for your next big step." },
    { title: "Industry exposure",    desc: "Experience what companies actually expect." },
  ];

  return (
    <section className="yw-wrapper">
      <div className="yw-container">

        {/* LEFT */}
        <div className="yw-left">
          <h2 className="yw-title">
            Who We Are
            <span className="yw-underline"></span>
          </h2>

          <p className="yw-text">
            We empower students, freshers, and working professionals with
            industry-aligned skills, practical learning, and guided career
            support. Through expert mentorship, structured training programs,
            and real-time exposure, we help learners gain clarity, confidence,
            and competence to step into the corporate world with purpose.
          </p>

          <p className="yw-text">
            Our focus is simple: transform skills, strengthen careers, and open
            meaningful opportunities. We bridge the gap between education and
            industry expectations by nurturing talent and supporting individuals
            until they achieve breakthrough results.
          </p>
        </div>

        {/* RIGHT */}
        <div className="yw-right">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`highlight-card ${visibleCards.includes(index) ? "card-visible" : "card-hidden"}`}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;

