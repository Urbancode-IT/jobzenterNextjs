'use client';
import React, { useState, useEffect, useRef } from "react";
import "./FaqSection.css";

const QA = [
  {
    q: "What is JobZenter and how does it help job seekers?",
    a: "JobZenter is a professional placement training and career development platform that helps students and job seekers enhance their skills, build strong resumes, and prepare for interviews. Our industry-focused training ensures better job opportunities and faster placements.",
  },
  {
    q: " Do I need any prior coding knowledge to join?",
    a: "No, prior coding knowledge is not required. Training starts from the basics and gradually moves to advanced concepts, making it suitable even for beginners.",
  },
  {
    q: "Will I get real-time project experience during the course?",
    a: "Yes, students work on real-time projects that simulate actual industry work. This helps in gaining hands-on experience and building a strong portfolio.",
  },
  {
    q: "What makes JobZenter different from other training institutes?",
    a: "JobZenter focuses more on practical learning, personal mentoring, and industry-relevant skills rather than just theory, which helps students get placed faster.",
  },
  {
    q: "Does JobZenter offer online or offline classes?",
    a: "Yes. JobZenter provides both online and offline training, allowing learners to choose flexible, convenient learning options based on their schedule and location.",
  },
  {
    q: "Does JobZenter provide placement assistance?",
    a: "Yes. JobZenter offers 100% placement assistance, including mock interviews, job referrals, HR interaction sessions, resume optimization, and continuous career guidance until placement.",
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
                  <span className="faq-toggle-plus">+</span>
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

          <h3 className="faq-side-title text-center">Any question?</h3>
          <p className="faq-side-text text-center">
            You can ask anything you want to know about our courses and
            services.
          </p>

          <div className="faq-input-group d-flex flex-column">
            <label className="faq-input-label">Let us know</label>
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
