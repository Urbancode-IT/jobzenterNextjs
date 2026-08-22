'use client';
import React, { useRef, useState, useEffect } from "react";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import "./SuccessSection.css";

const SUCCESS_STORIES = [
  {
    id: 1,
    name: "Divyabharathi",
    role: "Frontend Developer",
    ctc: "7.0 LPA",
    companyLogo: "/mncs/tcs.png",
    company: "TCS",
    review: "Jobzenter's guidance and real-time projects boosted my confidence."
  },
  {
    id: 2,
    name: "Sindhu",
    role: "System Engineer",
    ctc: "15.0 LPA",
    companyLogo: "/mncs/infosys.png",
    company: "Infosys",
    review: "Best learning experience with amazing placement support team!"
  },
  {
    id: 3,
    name: "Prakash",
    role: "Data Analyst",
    ctc: "13.0 LPA",
    companyLogo: "/mncs/wipro.svg",
    company: "Wipro",
    review: "The mock interviews and mentor support were game changers!"
  },
  {
    id: 4,
    name: "Anitha",
    role: "DevOps Engineer",
    ctc: "9.0 LPA",
    companyLogo: "/mncs/capgemini.png",
    company: "Capgemini",
    review: "The one-to-one mentor support and real-time projects helped me a lot in getting placed."
  },
  {
    id: 5,
    name: "latha",
    role: "Software Engineer",
    ctc: "8.5 LPA",
    companyLogo: "/mncs/hcl.png",
    company: "HCL",
    review: "The structured curriculum and hands-on projects made me industry-ready."
  },
  {
    id: 6,
    name: "Sathish",
    role: "Cloud Engineer",
    ctc: "10.0 LPA",
    companyLogo: "/mncs/zoho.png",
    company: "Zoho",
    review: "Excellent faculty and continuous placement assistance helped me land my dream job."
  },
  {
    id: 7,
    name: "Kishore",
    role: "Data Analyst",
    ctc: "17.5 LPA",
    companyLogo: "/mncs/amazon.png",
    company: "Amazon",
    review: "Their focus on real-world skills is exactly what top companies look for."
  },
  {
    id: 8,
    name: "Shagul",
    role: "BI developer",
    ctc: "9.0 LPA",
    companyLogo: "/mncs/ibm.png",
    company: "IBM",
    review: "A fantastic platform to upskill and connect with top recruiters seamlessly."
  },
  {
    id: 9,
    name: "Abisheka Arasu",
    role: "QA Automation Engineer",
    ctc: "18.5 LPA",
    companyLogo: "/mncs/microsoft.png",
    company: "Microsoft",
    review: "From basics to advanced topics, everything was taught exceptionally well."
  },
  {
    id: 10,
    name: "Meena",
    role: "Full Stack Developer",
    ctc: "15.5 LPA",
    companyLogo: "/mncs/freshworks.png",
    company: "Freshworks",
    review: "The one-to-one mentor support and real-time projects helped me a lot in getting placed."
  }
];

const SuccessSection = () => {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(null);

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

  const handleToggleReview = (index, isOpen) => {
    setActiveReviewIndex(isOpen ? null : index);
  };

  const marqueeStories = [...SUCCESS_STORIES, ...SUCCESS_STORIES, ...SUCCESS_STORIES];

  return (
    <section className="ss-section" id="success">
      <div className="ss-container">

        {/* Left Content */}
        <div className="ss-left">
          <h2
            ref={titleRef}
            className={`ss-title ${titleVisible ? 'title-sweep' : ''}`}
          >
            Success <span style={{ color: '#ffc928' }}>Stories</span>
          </h2>
          <p className="ss-desc">
            Hundreds of students are building their dream careers with Jobzenter.
          </p>
        </div>

        {/* Right Carousel */}
        <div className="ss-right">
          <div className="ss-carousel-wrapper">
            <div className={`ss-carousel ${activeReviewIndex !== null ? 'paused' : ''}`}>
              {marqueeStories.map((story, index) => {
                const isOpen = activeReviewIndex === index;
                return (
                  <div className={`ss-card-group ${isOpen ? 'review-open' : ''}`} key={`${story.id}-${index}`}>

                    {/* Left Info Card */}
                    <div className="ss-card ss-card-left">
                      <div className="ss-card-top-center">
                        <div className="ss-company-circle">
                          <img src={story.companyLogo} alt="Company" className="ss-company-logo-circle" />
                        </div>
                      </div>
                      <div className="ss-card-body-center">
                        <h3 className="ss-name">{story.name}</h3>
                        <p className="ss-role">{story.role}</p>
                        <p className="ss-ctc">CTC: {story.ctc}</p>
                        <div className="ss-placed-badge">
                          <FaGraduationCap className="ss-placed-icon" /> Placed
                        </div>
                        <button
                          className="ss-view-review-btn"
                          onClick={() => handleToggleReview(index, isOpen)}
                        >
                          {isOpen ? "Hide Review" : "View Review"}
                        </button>
                      </div>
                    </div>

                    {/* Right Review Card */}
                    <div className={`ss-card ss-card-right ${isOpen ? 'show' : ''}`}>
                      <button
                        className="ss-close-btn"
                        aria-label="Close review"
                        onClick={() => handleToggleReview(index, true)}
                      >
                        &times;
                      </button>
                      {/* The pointer triangle to the left card */}
                      <div className="ss-pointer"></div>
                      <div className="ss-stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <p className="ss-review-text">"{story.review}"</p>
                      <div className="ss-reviewer-info">
                        <p className="ss-reviewer-name">- {story.name}</p>
                        <p className="ss-reviewer-company">Placed at {story.company}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessSection;
