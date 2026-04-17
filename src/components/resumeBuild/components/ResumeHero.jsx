'use client';
import { useEffect, useRef, useState } from 'react';
import "./ResumeHero.css";
import ResumeReadyBanner from "./ResumeReadyBanner";

const Hero = () => {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const [isSweepActive, setIsSweepActive] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero-animate');
          if (entry.target === headingRef.current) {
            setIsTitleVisible(true);
            setTimeout(() => setIsSweepActive(true), 150);
          }
        }
      });
    }, { threshold: 0.2 });

    if (headingRef.current) observer.observe(headingRef.current);
    if (descRef.current) observer.observe(descRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      <div className="container">
        <h1
          ref={headingRef}
          className={`hero-title ${isTitleVisible ? "hero-animate" : "hero-slide-down"} ${isSweepActive ? "title-sweep" : ""}`}
        >
          Resume Building
        </h1>
        <p
          ref={descRef}
          className="hero-text hero-fade-in"
          style={{ transitionDelay: '0.2s' }}
        >
          Ready to build a standout resume? Join our expert-led resume building
          service and create a professional CV that gets noticed. Showcase your
          strengths and secure your dream job today!
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4"></div>

        <ResumeReadyBanner />
      </div>
    </section>
  );
};

export default Hero;