"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyChooseUs.css";

const ROW_SWAP_MS = 11000;

const WhyChooseUs = ({ showWhyChoose = true, showProvide = true }) => {
  const reduceMotion = useReducedMotion();
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [visibleProvide, setVisibleProvide] = useState([]);
  const [visibleTitles, setVisibleTitles] = useState([]);
  const [isOthersHovered, setIsOthersHovered] = useState(false);

  const provideRefs = useRef([]);
  const titleRefs = useRef([]);


  // Why Choose Us Data
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

  const compareData = [
    {
      ours: "100% Live Interactive Classes",
      others: "Pre-recorded Video Classes",
    },
    {
      ours: " No Recorded Sessions",
      others: " Limited Trainer Interaction",
    },
    {
      ours: " Learn Directly from Industry Experts",
      others: " Theory-Based Learning",
    },
    {
      ours: "Real-Time Project Experience",
      others: " Generic Course Content",
    },
    {
      ours: " Daily Doubt Clearing Support",
      others: " Little or No Mentor Support",
    },
    {
      ours: "One-to-One Mentor Guidance",
      others: " Basic or Outdated Projects",
    },
    {
      ours: "Resume & Profile Optimization",
      others: " Limited Interview Practice",
    },
    {
      ours: " Mock HR & Technical Interviews",
      others: " Placement Support Ends After Course",
    },
     {
      ours: " Placement Support Until You Get Hired in Top Companys",
      others: " Large Batch Sizes",
    },
     {
      ours: "  Small Batches for Personalized Learning",
      others: "  Slow Doubt Resolution",
    },
  ];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setHighlightIndex((prev) => (prev + 1) % compareData.length);
    }, ROW_SWAP_MS);
    return () => window.clearInterval(id);
  }, [compareData.length, reduceMotion]);

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
        {showWhyChoose && (
          <>
            <h2
              ref={(el) => (titleRefs.current[0] = el)}
              className={`section-title section-title--compact ${visibleTitles.includes(0) ? "title-sweep" : ""}`}
            >
              Why Choose Us
            </h2>

            <p className="why-choose-lead">
              A transparent side-by-side look at what makes Jobzenter different from typical training providers.
            </p>

            <div className="why-compare-wrap">
              <div className={`why-compare-grid ${isOthersHovered ? "is-swapped" : ""}`}>
                <div
                  className="why-compare-card why-compare-card--ours"
                  onMouseEnter={() => setIsOthersHovered(false)}
                  onFocus={() => setIsOthersHovered(false)}
                >
                  <h3 className="why-compare-card__title">What We Give</h3>
                  <ul className={`why-compare-list ${isOthersHovered ? "why-compare-list--icons-only" : ""}`}>
                    {compareData.map((item, index) => (
                      <motion.li
                        key={`ours-${index}`}
                        className={`why-compare-list__item ${
                          highlightIndex === index ? "is-highlighted" : ""
                        }`}
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                      >
                        <i
                          className={`bi ${
                            isOthersHovered ? "bi-x-circle-fill item-icon--swap" : "bi-check-circle-fill item-icon--good"
                          } item-icon`}
                          aria-hidden
                        />
                        <span className="item-text item-text--ours">{item.ours}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div
                  className="why-compare-card why-compare-card--others"
                  onMouseEnter={() => setIsOthersHovered(true)}
                  onMouseLeave={() => setIsOthersHovered(false)}
                  onFocus={() => setIsOthersHovered(true)}
                  onBlur={() => setIsOthersHovered(false)}
                >
                  <h3 className="why-compare-card__title">Others </h3>
                  <ul className={`why-compare-list ${!isOthersHovered ? "why-compare-list--icons-only" : ""}`}>
                    {compareData.map((item, index) => (
                      <motion.li
                        key={`others-${index}`}
                        className={`why-compare-list__item why-compare-list__item--others ${
                          highlightIndex === index ? "is-highlighted" : ""
                        }`}
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                      >
                        <i className="bi bi-x-circle-fill item-icon item-icon--bad" aria-hidden />
                        <span className="item-text item-text--others">{item.others}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {showProvide && <div className="section-gap provide-section-outer">
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
        </div>}
      </div>
    </section>
  );
};

export default WhyChooseUs;
