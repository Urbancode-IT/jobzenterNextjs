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

const PAGE_SIZE = 3;

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [imgVisible, setImgVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const imgRef = useRef(null);
  const titleRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(QA.length / PAGE_SIZE));
  const pageItems = QA.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

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

  const goToPage = (nextPage) => {
    if (nextPage < 0 || nextPage >= totalPages) return;
    setPage(nextPage);
    setOpen(null);
  };

  return (
    <section className="faq-section position-relative d-flex flex-column align-items-center">
      <h2
        ref={titleRef}
        className={`faq-title text-center ${titleVisible ? "title-sweep" : ""}`}
      >
        Frequently asked questions
      </h2>

      <div className="faq-row">
        <div className="faq-side">
          <div className="questions-image-section">
            <div className="img-circle-wrapper">
              <img
                ref={imgRef}
                src="/faq_illustration..png"
                alt="FAQ Illustration"
                className={imgVisible ? "img-visible" : "img-hidden"}
              />
            </div>
          </div>
        </div>

        <div className="faq-list-panel">
          <div className="faq-list" key={page}>
            {pageItems.map((item, localIndex) => {
              const index = page * PAGE_SIZE + localIndex;
              const active = open === index;
              return (
                <div
                  key={index}
                  className={`faq-card bg-white ${active ? "active" : ""}`}
                  onClick={() => setOpen(active ? null : index)}
                >
                  <div className="faq-toggle">
                    <span className="faq-question">{item.q}</span>
                    <span className="faq-toggle-icon">
                      {active ? "−" : "+"}
                    </span>
                  </div>

                  <div className={`faq-answer ${active ? "show" : ""}`}>
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="faq-carousel-nav" aria-label="FAQ pagination">
              <button
                type="button"
                className="faq-nav-btn"
                onClick={() => goToPage(page - 1)}
                disabled={page === 0}
                aria-label="Previous FAQ page"
              >
                ←
              </button>

              <div className="faq-dots">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`faq-dot ${i === page ? "active" : ""}`}
                    onClick={() => goToPage(i)}
                    aria-label={`Go to FAQ page ${i + 1}`}
                    aria-current={i === page ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                className="faq-nav-btn"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages - 1}
                aria-label="Next FAQ page"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
