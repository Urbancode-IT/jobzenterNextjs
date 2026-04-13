import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./InterviewOffers.css";

const InterviewOffers = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  /* ── Heading scroll observer ── */
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

  const data = [
    {
      title: "1. HR Interview placement",
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
    },
    {
      title: "8. Salary Negotiation & Offer Evaluation Guidance",
      content: [
        "Understand CTC structure and in-hand salary",
        "Learn professional salary negotiation techniques",
        "Compare multiple offers with role-growth clarity",
        "Evaluate benefits, bond terms, and joining conditions"
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  return (
    <section className="interview-offers-wrapper">
      <div className="container">
        <div className="text-center">
          <h2
            ref={titleRef}
            className={`interview-offers-title ${titleVisible ? 'title-sweep' : ''}`}
          >
            What our interview placement cell offers
          </h2>
        </div>

        <div className="interview-offers-layout">
          <div className="interview-offers-menu" role="tablist" aria-label="Interview placement offers">
            {data.map((item, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={`interview-offers-option ${activeIndex === index ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="interview-offers-option-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="interview-offers-option-title">{item.title}</span>
                <i className="bi bi-arrow-up-right-circle interview-offers-option-icon" aria-hidden />
              </button>
            ))}
          </div>

          <article className="interview-offers-detail" role="tabpanel" aria-live="polite">
            <p className="interview-offers-detail-label">Selected Offer</p>
            <h3 className="interview-offers-detail-title">{activeItem.title}</h3>
            <ul className="interview-offers-detail-list">
              {activeItem.content.map((point, i) => (
                <li key={i} className="interview-offers-detail-item">
                  <span className="detail-bullet" aria-hidden>•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default InterviewOffers;