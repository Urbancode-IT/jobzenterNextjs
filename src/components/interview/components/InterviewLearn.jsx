'use client';
import "./InterviewLearn.css";
import React, { useState } from "react";

const cards = [
  {
    img: "/bootcamp/learncards/learn1.jpg",
    title: "Master Core Java Concepts",
    desc: "Understand the building blocks of Java, from object-oriented programming to classes, objects, and essential syntax, laying a solid foundation for your development journey.",
  },
  {
    img: "/bootcamp/learncards/learn2.jpg",
    title: "Work on Real-World Projects",
    desc: "Apply your knowledge to practical projects, solving real-world problems that will help you gain confidence and experience in Java programming.",
  },
  {
    img: "/bootcamp/learncards/learn3.jpg",
    title: "Dive Into Advanced Java Topics",
    desc: "Explor_e advanced concepts like multithreading, collections, and exception handling, empowering you to create scalable and efficient applications.",
  },
  {
    img: "/bootcamp/learncards/learn4.jpg",
    title: "Develop Web Applications Using Java",
    desc: "Learn to build dynamic web applications with Java frameworks like Spring and Hibernate, equipping you with in-demand skills for modern web development.",
  },
  {
    img: "/bootcamp/learncards/learn5.jpg",
    title: "Prepare for Java Certifications",
    desc: "Our bootcamp aligns with certification standards, ensuring you’re prepared to pass Java certifications and enhance your career prospects.",
  },
  {
    img: "/bootcamp/learncards/learn6.jpg",
    title: "Receive Career Support and Job Assistance",
    desc: "Benefit from expert guidance on building a strong portfolio, preparing for technical interviews, and landing your dream job in Java development.",
  },
];

const LearnSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleCardClick = () => {
    setIsPaused(true); // pause animation when clicked
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // resume animation when cursor leaves
  };

  return (
    <section className="learn-section container-fluid text-center">
      <h2 className="section-title">
        What Will You Learn In Our Free <br /> Building Classes?
      </h2>
      <p className="section-desc">
        Our Java Bootcamp is designed to take you from beginner to job-ready
        professional. By the end of this program, you will gain strong
        foundations, hands-on coding skills, and industry-relevant project
        experience.
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
