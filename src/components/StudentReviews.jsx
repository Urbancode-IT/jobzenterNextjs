'use client';
import React, { useState } from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import "./StudentReviews.css";

const reviews = [
  {
    name: "Soya",
    role: "React Native Developer",
    text: "At Jobzenter, I worked on a real-time project, which helped me secure a position as a React Native Developer in an MNC. The training was thorough and practical.",
    img: "/feed1.png",
  },
  {
    name: "Priya",
    role: "Fullstack Developer",
    text: "Jobzenter offers a friendly and practical environment that made learning enjoyable. The hands-on experience was invaluable in preparing me for the real world.",
    img: "/feed2.png",
  },
  {
    name: "Akash",
    role: "QA Engineer",
    text: "As a first-year student, I found Jobzenter for Software Testing and got real project exposure, improving my automation skills and employability.",
    img: "/feed3.png",
  },
  {
    name: "Deepak",
    role: "Backend Developer",
    text: "I worked with mentors having industry expertise. Learned advanced Node.js concepts and debugging practices through real-time case studies.",
    img: "/feed4.png",
  },
  {
    name: "Kiran",
    role: "Frontend Developer",
    text: "I was struggling with frontend frameworks before joining Jobzenter. Their step-by-step approach and project guidance made me interview-ready.",
    img: "/feed5.png",
  },
  {
    name: "Manisha",
    role: "Data Analyst",
    text: "Jobzenter's Power BI course helped me land a data analytics role. The project-focused approach gave me strong visualization and DAX skills.",
    img: "/feed6.png",
  },
];

const StudentReviews = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // track mobile to change step behavior (1 on mobile, 2 on desktop)
  React.useEffect(() => {
    function update() {
      setIsMobile(window.innerWidth <= 575);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nextReviews = () => {
    const step = isMobile ? 1 : 2;
    if (index + step < reviews.length && !isAnimating) {
      setIsAnimating(true);
      setIndex((i) => i + step);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevReviews = () => {
    const step = isMobile ? 1 : 2;
    if (index - step >= 0 && !isAnimating) {
      setIsAnimating(true);
      setIndex((i) => i - step);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <section className="student-reviews-section d-flex flex-column align-items-center bg-white position-relative" >
      <div className="student-reviews-header text-center">
        <h2 className="student-reviews-title">What Our Students Says</h2>
        <p className="student-reviews-subtitle">
          Real stories from learners who transformed their careers with us.
        </p>
      </div>

      <div className="student-reviews-container">
        <div className={`student-reviews-slider ${isAnimating ? 'sliding' : ''}`}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="student-review-slide"
              style={{
                transform: `translateY(-${index * (isMobile ? 100 : 100)}%)`
              }}
            >
              <div className="student-review-card">
                <div className="student-review-surface">
                  <div className="student-review-stars d-flex align-items-center">
                    {Array(5)
                      .fill()
                      .map((_, j) => (
                        <FaStar key={j} />
                      ))}
                  </div>

                  <p className="student-review-text">{review.text}</p>

                  <div className="student-review-footer">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="student-review-avatar"
                    />

                    <div className="student-review-meta">
                      <h4 className="student-review-name">{review.name}</h4>
                      <p className="student-review-role">{review.role}</p>
                      <div className="student-review-actions">
                        <button
                          type="button"
                          className="student-review-action student-review-like"
                          aria-label="Like review"
                        >
                          <FaThumbsUp />
                        </button>
                        <button
                          type="button"
                          className="student-review-action student-review-dislike"
                          aria-label="Dislike review"
                        >
                          <FaThumbsDown />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="student-reviews-controls">
       
          <button
            onClick={prevReviews}
            className="student-reviews-arrow student-reviews-arrow-up"
            aria-label="Show previous reviews"
            disabled={isAnimating}
          >
            <IoChevronUp />
          </button>
        
          <button
            onClick={nextReviews}
            className="student-reviews-arrow student-reviews-arrow-down"
            aria-label="Show next reviews"
            disabled={isAnimating}
          >
            <IoChevronDown />
          </button>
      
      </div>
    </section>
  );
};

export default StudentReviews;