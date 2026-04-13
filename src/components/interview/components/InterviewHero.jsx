"use client";
import React, { useEffect, useRef, useState } from "react";
import "./InterviewHero.css";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const cardRef = useRef(null);
  const headingRef = useRef(null);
  const [sweepActive, setSweepActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ih-animate');
          if (entry.target === headingRef.current) setSweepActive(true);
        }
      });
    }, { threshold: 0.2 });

    if (descRef.current) observer.observe(descRef.current);
    if (btnRef.current) observer.observe(btnRef.current);
    if (cardRef.current) observer.observe(cardRef.current);
    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      <div className="container">
        <h1 ref={headingRef} className={`hero-title-main ${sweepActive ? "title-sweep" : ""}`}>Interview Preparation</h1>
        <p ref={descRef} className="hero-text ih-fade-in" style={{ transitionDelay: '0.2s' }}>
          Ready to ace your interview? Join our free preparation course and gain the confidence to impress recruiters. Learn top strategies from experts and secure your dream role today
        </p>

        <div ref={btnRef} className="d-flex justify-content-center gap-3 mt-4 ih-slide-up" style={{ transitionDelay: '0.4s' }}>
          <button
            type="button"
            className="btn btn-register"
            onClick={() => {
              const el = document.getElementById("interview-register");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push('/career-lab');
              }
            }}
          >
            Register
          </button>
        </div>

        <div ref={cardRef} className="program-card mt-5 ih-slide-up" style={{ transitionDelay: '0.6s' }}>
          <div className="program-text text-start">
            <h3 className="program-title">Interview Prepartion</h3>
            <p className="program-desc">
            Practice real interviews with expert guidance to boost your
             <br/>confidence and performance.
            </p>
            <button className="btn btn-enroll" onClick={() => router.push('/career-lab/mock-interviews')}>Mock Interview</button>
          </div>

          <div className="program-img">
            <img src="/Mockinterviews/interview.jpeg" alt="Java Program Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
