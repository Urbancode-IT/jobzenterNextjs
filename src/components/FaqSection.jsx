'use client';
import React, { useState, useEffect, useRef } from "react";
import "./FaqSection.css";

const QA = [
  {
    q: "What services does Jobzenter provide for career-focused learners?",
    a: "Jobzenter is a professional IT training and placement institute offering industry-aligned programmes, resume building, interview preparation, and dedicated career support. We help learners develop job-ready skills and connect with the right employment opportunities.",
  },
  {
    q: "Are your programmes suitable for beginners without prior technical experience?",
    a: "Yes. Our curriculum is structured to support learners at every level—from foundational concepts to advanced, job-ready skills. No prior coding or technical background is required to get started.",
  },
  {
    q: "Do your courses include hands-on, industry-relevant project work?",
    a: "Absolutely. Every programme incorporates practical assignments and real-world projects that mirror current industry standards, helping you build confidence, technical depth, and a portfolio employers value.",
  },
  {
    q: "How does Jobzenter stand apart from other IT training providers?",
    a: "We combine expert-led instruction, personalised mentoring, and a practical-first approach focused on employability. Our emphasis on live projects, interview readiness, and placement support sets us apart from theory-heavy alternatives.",
  },
  {
    q: "What learning modes do you offer—online, offline, or hybrid?",
    a: "Jobzenter offers flexible online and offline classroom options, allowing you to choose a format that fits your schedule, location, and learning preferences without compromising on quality.",
  },
  {
    q: "What placement support is included after course completion?",
    a: "We provide comprehensive placement assistance, including mock interviews, HR preparation sessions, resume optimisation, job referrals, and ongoing career guidance until you secure a suitable role.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  const [imgVisible, setImgVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const imgRef = useRef(null);
  const titleRef = useRef(null);

  /* ── Image scroll observer ── */
  useEffect(() => {
    if (!imgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Title scroll observer ── */
  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-section position-relative d-flex flex-column align-items-center">
      <h2
        ref={titleRef}
        className={`faq-title text-center ${titleVisible ? "title-sweep" : ""}`}
      >
        Frequently asked questions
      </h2>

      <div className="faq-row d-flex flex-wrap align-items-start justify-content-between">
        <div className="faq-list d-flex flex-column mt-auto">
          {QA.map((item, index) => {
            const active = open === index;
            return (
              <div
                key={index}
                className={`faq-card bg-white ${active ? "active" : ""}`}
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="faq-toggle d-flex align-items-center"
                  aria-expanded={active}
                >
                  <span className="faq-question flex-grow-1">
                    {item.q}
                  </span>
                  <span className="faq-toggle-icon d-flex align-items-center justify-content-center">
                    <span className="faq-toggle-icon-inner">
                      {active ? "−" : "+"}
                    </span>
                  </span>
                </button>

                <div className={`faq-answer ${active ? "show" : ""}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-side d-flex flex-column align-items-center text-center">
          <div className="questions-image-section">
            {/* Circle wrapper */}
            <div className={`img-circle-wrapper ${imgVisible ? 'circles-visible' : ''}`}>
              {/* Pulse glow ring */}
              <div className="pulse-ring" />

              {/* Rotating ring */}
              <div className="rotating-ring" />

              {/* Dashed border spin */}
              <div className="dashed-ring" />

              {/* Image */}
              <img
                ref={imgRef}
                src="/faq_illustration..png"
                alt="FAQ Illustration"
                className={imgVisible ? 'img-visible' : 'img-hidden'}
              />
            </div>
          </div>

          <h3 className="faq-side-title text-center">Have a question?</h3>
          <p className="faq-side-text text-center">
            Reach out to learn more about our courses, schedules, and placement
            support—we&apos;re happy to help.
          </p>

          <div className="faq-input-group d-flex flex-column">
            <label className="faq-input-label">Your question</label>
            <div className="faq-input-wrapper d-flex align-items-center">
              <input
                type="text"
                placeholder="Ask a question"
                className="faq-input"
              />
              <span className="faq-input-clear">×</span>
            </div>
          </div>
        </div>
      </div>
      {/* Particles */}
<div className="faq-particles">
  {[...Array(12)].map((_, i) => (
    <div key={i} className={`faq-particle p-${i + 1}`}></div>
  ))}
</div>
    </section>
  );
}
