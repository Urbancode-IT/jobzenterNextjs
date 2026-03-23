"use client";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const [visibleCards,   setVisibleCards]   = useState([]);
  const [visibleProvide, setVisibleProvide] = useState([]);
  const [visibleTitles,  setVisibleTitles]  = useState([]);

  const cardRefs    = useRef([]);
  const provideRefs = useRef([]);
  const titleRefs   = useRef([]);

  const whyChooseData = [
    {
      number: "01",
      title: "Industry-Aligned Training",
      text: "Designed based on current industry standards with a focus on real-time projects and in-demand technologies, ensuring candidates gain practical, job-ready skills for real-world environments."
    },
    {
      number: "02",
      title: "Expert Trainers & Mentors",
      text: "Led by experienced professionals providing mentorship, technical guidance, and feedback. This helps candidates align their skills with industry expectations and improve practical expertise."
    },
    {
      number: "03",
      title: "Dedicated Placement Support",
      text: "Offers structured placement support including resume building, interview preparation, and job assistance, ensuring candidates are ready to meet hiring requirements and secure opportunities."
    }
  ];

  const provideData = [
    { icon: "bi-journal-check",     text: "Job-Ready Curriculum built by Industry Experts" },
    { icon: "bi-cpu",               text: "Hands-on Real-Time Projects & Assessments" },
    { icon: "bi-laptop",            text: "Flexible Learning Options – Online & Offline Classroom" },
    { icon: "bi-people",            text: "Interview-Focused Training & Mock HR/Technical Rounds" },
    { icon: "bi-briefcase",         text: "Dedicated Placement Cell with Strong Hiring Network" },
    { icon: "bi-person-lines-fill", text: "Personal Mentorship for Every Learner" }
  ];

  /* ── Why Choose Us scroll observer ── */
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleCards((prev) => [...prev, index]), index * 180);
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

  /* ── What We Provide scroll observer ── */
  useEffect(() => {
    const observers = [];
    provideRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleProvide((prev) => [...prev, index]), index * 150);
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

  /* ── Spotlight — track mouse position on each card ── */
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section className="py-5">
      <div className="container">

        {/* Why Choose Us */}
        <h2
          ref={(el) => (titleRefs.current[0] = el)}
          className={`section-title ${visibleTitles.includes(0) ? "title-sweep" : ""}`}
        >
          Why Choose Us
        </h2>
        <div className="row g-4">
          {whyChooseData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`choose-card p-4 ${visibleCards.includes(index) ? "card-visible" : "card-hidden"}`}
              >
                <div className="number">{item.number}</div>
                <h4 className="fw-bold mt-3">{item.title}</h4>
                <p className="text-muted mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What We Provide */}
        <div className="section-gap">
          <h2
            ref={(el) => (titleRefs.current[1] = el)}
            className={`provide-title ${visibleTitles.includes(1) ? "title-sweep" : ""}`}
          >
            What We Provide
          </h2>
          <div className="row provide-row">
            {provideData.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div
                  ref={(el) => (provideRefs.current[index] = el)}
                  onMouseMove={handleMouseMove}
                  className={`provide-card p-4 text-center ${visibleProvide.includes(index) ? "provide-visible" : "provide-hidden"}`}
                >
                  <div className="icon-box mb-3">
                    <i className={`${item.icon} provide-icon`}></i>
                  </div>
                  <p className="fw-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;