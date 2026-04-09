"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyChooseUs.css";

const AUTOPLAY_MS = 8500;
const SLIDE_DURATION = 0.78;
const SLIDE_EASE = [0.25, 0.1, 0.25, 1];

const WhyChooseUs = () => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDir, setSlideDir] = useState("next");
  const [visibleProvide, setVisibleProvide] = useState([]);
  const [visibleTitles, setVisibleTitles] = useState([]);

  const provideRefs = useRef([]);
  const titleRefs = useRef([]);
  const carouselRef = useRef(null);

  const whyChooseData = [
    {
      title: "Industry-Aligned Training",
      text: "Designed based on current industry standards with a focus on real-time projects and in-demand technologies, ensuring candidates gain practical, job-ready skills for real-world environments.",
    },
    {
      title: "Expert Trainers & Mentors",
      text: "Led by experienced professionals providing mentorship, technical guidance, and feedback. This helps candidates align their skills with industry expectations and improve practical expertise.",
    },
    {
      title: "Dedicated Placement Support",
      text: "Offers structured placement support including resume building, interview preparation, and job assistance, ensuring candidates are ready to meet hiring requirements and secure opportunities.",
    },
    {
      title: "Hands-On Projects & Assessments",
      text: "Work on real-world assignments and periodic evaluations that strengthen problem-solving, build a credible portfolio, and prepare you for technical discussions in real hiring scenarios.",
    },
    {
      title: "Flexible Learning Options",
      text: "Learn in the format that suits you—online, offline, or blended—so students, freshers, and working professionals can upskill without compromising on schedules or quality.",
    },
    {
      title: "Interview & HR Readiness",
      text: "Targeted coaching for aptitude, communication, and mock technical and HR rounds so you walk into interviews with clarity, confidence, and a clear understanding of what recruiters expect.",
    },
    {
      title: "Strong Hiring & Industry Network",
      text: "Benefit from a placement ecosystem connected to employers and roles across domains, with support that aligns your profile with the right opportunities as you progress.",
    },
    {
      title: "Personal Mentorship & Follow-Through",
      text: "Every learner gets guided support beyond the classroom—doubt resolution, career direction, and consistent follow-up until you are equipped to achieve meaningful career breakthroughs.",
    },
    {
      title: "Career Roadmap & Role Guidance",
      text: "Map the right job roles to your background, fix skill gaps early, and focus your projects and interview prep on what employers actually hire for—so every week of training moves you closer to a real offer.",
    },
  ];

  const provideData = [
    { icon: "bi-journal-bookmark", text: "Job-Ready Curriculum built by Industry Experts" },
    { icon: "bi-layers", text: "Hands-on Real-Time Projects & Assessments" },
    { icon: "bi-chat-square-text", text: "Interview-Focused Training & Mock HR/Technical Rounds" },
    { icon: "bi-building-check", text: "Dedicated Placement Cell with Strong Hiring Network" },
    { icon: "bi-person-hearts", text: "Personal Mentorship for Every Learner" },
    { icon: "bi-pc-display-horizontal", text: "Flexible Learning Options – Online & Classroom" },
    { icon: "bi-graph-up-arrow", text: "Affordable Training with High Value Outcomes" },
    { icon: "bi-lightning-charge", text: "Continuous Skill Development + Soft Skills Training" },
  ];

  const total = whyChooseData.length;
  const current = whyChooseData[activeIndex];
  const dirSign = slideDir === "next" ? 1 : -1;

  const slideVariants = useMemo(
    () => ({
      enter: (dir) => ({
        x: reduceMotion ? 0 : dir * 48,
        opacity: 0,
      }),
      center: { x: 0, opacity: 1 },
      exit: (dir) => ({
        x: reduceMotion ? 0 : dir * -40,
        opacity: 0,
      }),
    }),
    [reduceMotion]
  );

  const goTo = useCallback(
    (index, dir) => {
      const next = ((index % total) + total) % total;
      setSlideDir(dir);
      setActiveIndex(next);
    },
    [total]
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1, "next");
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1, "prev");
  }, [activeIndex, goTo]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      setSlideDir("next");
      setActiveIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [total]);

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
    <section className="py-5 why-choose-section">
      <div className="container">
        <h2
          ref={(el) => (titleRefs.current[0] = el)}
          className={`section-title section-title--compact ${visibleTitles.includes(0) ? "title-sweep" : ""}`}
        >
          Why Choose Us
        </h2>

        <p className="why-choose-lead">
          One clear reason at a time — swipe through what makes Jobzenter different.
        </p>

        <div className="why-choose-carousel" ref={carouselRef}>
          <div className="why-choose-stage" aria-roledescription="carousel">
            <div className="why-choose-stage__row">
              <button
                type="button"
                className="why-choose-stage__arrow why-choose-stage__arrow--prev"
                onClick={goPrev}
                aria-label="Previous reason"
              >
                <i className="bi bi-chevron-left" aria-hidden />
              </button>

              <div className="why-choose-stage__viewport">
                <AnimatePresence mode="wait" initial={false} custom={dirSign}>
                  <motion.article
                    key={activeIndex}
                    role="tabpanel"
                    aria-live="polite"
                    custom={dirSign}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: reduceMotion ? 0.15 : SLIDE_DURATION,
                      ease: SLIDE_EASE,
                    }}
                    className="why-choose-pro-card"
                  >
                    <div className="why-choose-pro-card__badge">
                      <i className="bi bi-star-fill why-choose-pro-card__badge-icon" aria-hidden />
                      <span>
                        {String(activeIndex + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="why-choose-pro-card__title">{current.title}</h3>
                    <p className="why-choose-pro-card__body">{current.text}</p>
                  </motion.article>
                </AnimatePresence>
              </div>

              <button
                type="button"
                className="why-choose-stage__arrow why-choose-stage__arrow--next"
                onClick={goNext}
                aria-label="Next reason"
              >
                <i className="bi bi-chevron-right" aria-hidden />
              </button>
            </div>

            <div
              className="why-choose-stage__dots"
              role="tablist"
              aria-label="Why choose us slides"
            >
              {whyChooseData.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`${i + 1}: ${item.title}`}
                  className={`why-choose-stage__dot ${i === activeIndex ? "is-active" : ""}`}
                  onClick={() => {
                    if (i === activeIndex) return;
                    goTo(i, i > activeIndex ? "next" : "prev");
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="section-gap provide-section-outer">
          <div className="provide-section-header text-center">
            <h2
              ref={(el) => (titleRefs.current[1] = el)}
              className={`provide-title provide-title-in-section ${visibleTitles.includes(1) ? "title-sweep" : ""}`}
            >
              What We Provide
            </h2>
            <p className="provide-section-lead">
              Everything in one place—curriculum, practice, interviews, placements, and ongoing growth—so you move from learning to hiring with clarity.
            </p>
          </div>

          <div className="provide-shell">
            <div className="provide-bento">
              {provideData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (provideRefs.current[index] = el)}
                  className={`provide-tile ${visibleProvide.includes(index) ? "provide-visible" : "provide-hidden"}`}
                >
                  <div className="provide-tile-icon" aria-hidden="true">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <p className="provide-tile-label">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
