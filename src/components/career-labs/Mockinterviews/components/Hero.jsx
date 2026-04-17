'use client';
import React, { useEffect, useRef, useState } from 'react';
import "./Hero.css";

const Hero = () => {
  const headingRef = useRef(null);
  const [sweepActive, setSweepActive] = useState(false);

  const scrollToRegister = () => {
    document
      .getElementById("mock-interview-register")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!headingRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSweepActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      <div className="container">
        <h1 ref={headingRef} className={`hero-title ${sweepActive ? "title-sweep" : ""}`}>Mock Interviews</h1>
        <p className="hero-text">
          Sharpen your interview skills with realistic mock sessions guided by industry experts. Get personalized feedback that builds confidence and prepares you to crack your dream job.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
  
          
        </div>

        <div className="program-card mt-5">
          <div className="program-text text-start">
            <h3 className="program-title">Mock Interview</h3>
            <p className="program-desc">
              
              Practice real interviews with expert guidance to boost your
            
             confidence and performance.</p>
            <button
              type="button"
              className="btn btn-enroll"
              onClick={scrollToRegister}
            >
              Enroll now
            </button>
          </div>

          <div className="program-img">
            <img src="/Mockinterviews/man.jpeg" alt="Java Program Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
