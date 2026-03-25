"use client";
import React, { useState } from "react";
import Image from 'next/image';
import "./ResumeLearn.css";

const cards = [
  {
    img: "/Mockinterviews/learncards/learn1.jpg",
    title: "ATS-Friendly Layouts",
    desc: "We ensure your resume is built with Applicant Tracking Systems (ATS) in mind, using proper formatting and keywords to get you past automated filters.",
  },
  {
    img: "/Mockinterviews/learncards/learn2.jpg",
    title: "Professional Summary",
    desc: "Craft a compelling professional summary that highlights your key strengths and immediately grabs the attention of hiring managers.",
  },
  {
    img: "/Mockinterviews/learncards/learn3.jpg",
    title: "Skill Optimization",
    desc: "Identify and showcase the most in-demand industry skills, tailoring them to match specific job descriptions for maximum impact.",
  },
  {
    img: "/Mockinterviews/learncards/learn4.jpg",
    title: "Experience Highlighting",
    desc: "Learn to quantify your achievements rather than just listing duties, showing recruiters the tangible value you bring to a company.",
  },
  {
    img: "/Mockinterviews/learncards/learn5.jpg",
    title: "Project Showcase",
    desc: "Effectively present your portfolio and real-world projects to demonstrate hands-on expertise and problem-solving capabilities.",
  },
  {
    img: "/Mockinterviews/learncards/learn6.jpg",
    title: "Resume Audit & Feedback",
    desc: "Receive expert feedback and personalized audits to refine your resume, ensuring it's polished and ready for top-tier job applications.",
  },
];

const LearnSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = React.useRef(null);

  /* ── Heading scroll observer ── */
  React.useEffect(() => {
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

  const handleCardClick = () => {
    setIsPaused(true); // pause animation when clicked
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // resume animation when cursor leaves
  };

  return (
    <section className="learn-section container-fluid text-center">
      <h2
        ref={titleRef}
        className={`section-title ${titleVisible ? "title-sweep" : ""}`}
      >
        Importance of Resume Building
      </h2>
      <p className="section-desc">
        A professional resume is your first impression. Our Resume Building program helps you craft a high-impact profile that highlights your skills, experience, and achievements to land your dream job.
      </p>

      <div className="cards-scroll">
        <div className={`cards-wrapper ${isPaused ? "paused" : ""}`}>
          {/* Main + duplicate cards for seamless loop */}
          {[...cards, ...cards].map((card, index) => (
            <div
              className="feature-card"
              key={index}
              onClick={handleCardClick}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                viewBox="0 0 168 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-0.000337426 388.72C27.5562 388.72 101.48 421.4 80.3019 373.925C146.2 373.925 107.9 352.767 165.12 336.69C184.605 318.642 80.6142 288.891 91.1596 265.31C101.705 241.729 125.56 230.204 125.56 204.68C125.56 179.156 117.185 182.681 106.64 159.1C96.0942 135.519 139.885 150.918 120.4 132.87C100.914 114.822 88.6686 66.6942 63.2097 56.9267C37.7507 47.1592 27.5562 -8.35105e-06 -0.000335693 -7.32423e-06L-0.00032893 194.36L-0.000337426 388.72Z"
                  fill="#FAF58B"
                  fillOpacity="0.3"
                />
              </svg>
              <Image
                src={card.img}
                alt={card.title}
                width={395}
                height={188}
                className="feature-img"
                onError={(e) => {
                  // In case of client-side load error, hide the broken image
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="feature-title">{card.title}</h3>
              <p className="feature-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
