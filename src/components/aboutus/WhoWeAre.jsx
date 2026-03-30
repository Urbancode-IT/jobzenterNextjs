"use client";
import React, { useEffect, useRef, useState } from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleTitles, setVisibleTitles] = useState([]);
  const cardRefs = useRef([]);
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
          <h2
            ref={(el) => (titleRefs.current[0] = el)}
            className={`yw-title ${visibleTitles.includes(0) ? "title-sweep" : ""}`}
          >
            Who We Are
          </h2>

          <p className="yw-text">
            Trusted by thousands, JobZenter is a leading career development and
            placement training institute committed to shaping future-ready
            professionals.
          </p>

          <p className="yw-text">
            We empower students, freshers, and working individuals with
            industry-aligned skills, hands-on learning, and guided career
            support. Through expert mentorship, structured training programs,
            and real-time practical exposure, we help learners gain the
            clarity, competence, and confidence needed to build successful
            careers and step into the corporate world with purpose.
          </p>

          <p className="yw-text">
            At JobZenter, our focus is simple — transform skills, strengthen
            careers, and create opportunities. We are dedicated to bridging the
            gap between education and industry expectations by nurturing talent,
            enhancing employability, and supporting candidates until they
            achieve meaningful career breakthroughs.
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

