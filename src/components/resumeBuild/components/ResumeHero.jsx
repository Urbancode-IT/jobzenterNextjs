'use client';
import { useEffect, useRef } from 'react';
import "./ResumeHero.css";

const Hero = () => {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const cardRef = useRef(null);

  const scrollToRegister = () => {
    document
      .getElementById("resume-register")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero-animate');
        }
      });
    }, { threshold: 0.2 });

    if (headingRef.current) observer.observe(headingRef.current);
    if (descRef.current) observer.observe(descRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      <div className="container">
        <h1
          ref={headingRef}
          className="fw-bold hero-slide-down"
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

        <div
          ref={cardRef}
          className="program-card mt-5 hero-slide-up"
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="program-text text-start">
            <h3 className="program-title">Resume Building</h3>
            <p className="program-desc">
           
            Enhance your resume with practical tasks, 
             expert guidance and <br/>personalized support.</p>
            <button
              type="button"
              className="btn btn-enroll"
              onClick={scrollToRegister}
            >
              Enroll now
            </button>
          </div>

          <div className="program-img">
            <img src="/Mockinterviews/resume.jpeg" alt="Java Program Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;