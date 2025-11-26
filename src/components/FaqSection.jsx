'use client';
import React, { useState } from "react";
import "./FaqSection.css";

const QA = [
  {
    q: "What is JobZenter and how does it help job seekers?",
    a: "JobZenter is a professional placement training and career development platform that helps students and job seekers enhance their skills, build strong resumes, and prepare for interviews. Our industry-focused training ensures better job opportunities and faster placements.",
  },
  {
    q: " What training programs does JobZenter offer?",
    a: "Any student, graduate, or working professional looking to improve career prospects, switch domains, or upgrade skills can join JobZenter’s training programs.",
  },
  {
    q: "Who can enroll in JobZenter courses?",
    a: "Yes—flexible batches (weekday/weekend/evening), backup classes, doubt-clearing support, and recordings for online/hybrid sessions ensure you never fall behind.",
  },
  {
    q: "Who are the trainers and how is the class conducted?",
    a: "Industry practitioners lead small cohorts with structured roadmaps, live coding, assignments, code reviews, and interview-style checkpoints. You get personal feedback and a clear weekly progression plan.",
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

  return (
    <section className="faq-section position-relative d-flex flex-column align-items-center">
      <h2 className="faq-title text-center">
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
          <div className="faq-blob position-relative d-flex align-items-center justify-content-center">
            <img
              src="/Vector 2.webp"
              alt="outer blob"
              className="faq-blob-outline position-absolute"
            />
            <img
              src="/Vector 1.webp"
              alt="blob"
              className="faq-blob-image position-absolute"
            />
            <img
              src="/questionmark.webp"
              alt="question mark"
              className="faq-blob-icon position-relative"
            />
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
    </section>
  );
}
