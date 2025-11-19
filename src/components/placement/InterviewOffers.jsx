import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./InterviewOffers.css";

const InterviewOffers = () => {
  const data = [
    {
      title: "1. HR Interview Training",
      content: [
        "Self-introduction",
        "Personality-based questions",
        "Behavioural & situational responses",
        "Communication skills",
        "Confidence development"
      ]
    },
    {
      title: "2. Technical Interview Preparation",
      content: [
        "Domain-specific revision",
        "Hands-on technical tasks",
        "Concept strengthening",
        "Practical Q&A practice"
      ]
    },
    {
      title: "3. Mock Interviews with Feedback",
      content: [
        "HR mock rounds",
        "Technical mock rounds",
        "Managerial mock rounds",
        "Instant scoring & feedback"
      ]
    },
    {
      title: "4. Resume, LinkedIn & Profiling Guidance",
      content: [
        "Impact-driven resumes",
        "Strong LinkedIn profiles",
        "Highlighting skills & achievements"
      ]
    },
    {
      title: "5. Aptitude & Problem-Solving Support",
      content: [
        "Logical reasoning",
        "Quantitative aptitude",
        "Analytical thinking"
      ]
    },
    {
      title: "6. Interview Etiquette & Professional Grooming",
      content: [
        "Professional communication",
        "Body language & confidence",
        "Online interview etiquette"
      ]
    },
    {
      title: "7. Domain-Specific Interview Roadmaps",
      content: [
        "IT & Software",
        "Data & Analytics",
        "Cloud/DevOps",
        "UI/UX",
        "Testing",
        "Networking & Cybersecurity"
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Set initial heights for each dropdown
    const initialHeights = data.map((_, index) => 
      contentRefs.current[index]?.scrollHeight || 0
    );
    setHeights(initialHeights);
  }, [data]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="interview-offers-wrapper">
      <div className="container">
        <h2 className="interview-offers-title">
          What Our Interview Training Cell Offers
        </h2>

        <div className="row g-3 mt-3">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`interview-offers-card ${
                  openIndex === index ? "active" : ""
                }`}
                onClick={() => toggle(index)}
              >
                <span className="interview-offers-text">{item.title}</span>

                <i
                  className={`bi bi-chevron-down interview-offers-icon ${
                    openIndex === index ? "rotate-up" : ""
                  }`}
                ></i>
              </div>

              <div
                ref={el => contentRefs.current[index] = el}
                className={`dropdown-outer ${
                  openIndex === index ? "open" : ""
                }`}
                style={{
                  maxHeight: openIndex === index ? `${heights[index]}px` : '0px'
                }}
              >
                <div className="dropdown-inner">
                  <div className="content-wrapper">
                    <ul className="interview-dd-list">
                      {item.content.map((point, i) => (
                        <li key={i} className="list-item">
                          <span className="bullet">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewOffers;