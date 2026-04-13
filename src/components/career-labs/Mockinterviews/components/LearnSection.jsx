'use client';
import { useEffect, useRef, useState } from "react";
import "./LearnSection.css";

const cards = [
  {
    img: "/Mockinterviews/learncards/learn1.jpg",
    title: "Real-Time Interview Simulation",
    desc: "Experience HR, technical, and managerial rounds exactly like real corporate interviews.This helps you understand expectations and reduce interview anxiety.",
  },
  {
    img: "/Mockinterviews/learncards/learn2.jpg",
    title: "Personalized Performance Feedback",
    desc: "After each mock session, trainers provide detailed feedback on strengths and improvement areas.You receive actionable suggestions to boost your confidence and clarity.",
  },
  {
    img: "/Mockinterviews/learncards/learn3.jpg",
    title: "HR Question Mastery &amp;Behavioral Training",
    desc: "Get prepared for the most commonly asked HR and behavioral questions using structured response techniques. You learn how to communicate clearly, rofessionally, and confidently.",
  },
  {
    img: "/Mockinterviews/learncards/learn4.jpg",
    title: "Domain-Specific Technical Practice",
    desc: "Mock interviews are tailored to your field — IT, software, testing, data, cloud, or non-tech.You practice role-specific technical questions and real-world problem-solving.",
  },
  {
    img: "/Mockinterviews/learncards/learn5.jpg",
    title: "Body Language &amp;Communication Coaching",
    desc: "We assess your tone, posture, eye contact, and overall presentation.This helps you refine your communication style and leave a strong first impression.",
  },
  {
    img: "/Mockinterviews/learncards/learn6.jpg",
    title: "Final Readiness &amp; Interview Strategy ",
    desc: "You learn how to approach interviews strategically, handle pressure, and answer tricky questions. By the end, you walk in confident, prepared, and fully interview-ready.",
  },
];

const LearnSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

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

  const handleCardClick = () => {
    setIsPaused(true); // pause animation when clicked
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // resume animation when cursor leaves
  };

  return (
    <section className="learn-section container-fluid text-center">
      <h2 ref={titleRef} className={`section-title ${titleVisible ? "title-sweep" : ""}`}>
       Importance of Mock Interview <br /> 
      </h2>
      <p className="section-desc">
        Mock interviews help you understand real interview expectations, refine your responses, and boost your confidence.
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
              <img src={card.img} alt={card.title} />
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
