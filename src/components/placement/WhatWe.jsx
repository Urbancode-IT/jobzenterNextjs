'use client';
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./WhatWe.css";

const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const [animateTitles, setAnimateTitles] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimateTitles(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const offerData = [
    {
      icon: "bi-person-badge",
      title: "Career Guidance & Profiling",
      text: "We help students identify their strengths, interests, and career paths through expert counselling and personalized guidance."
    },
    {
      icon: "bi-file-earmark-person",
      title: "Resume & Portfolio Building",
      text: "Our team trains students to build ATS-friendly resumes, LinkedIn profiles, and digital portfolios that highlight their skills effectively."
    },
    {
      icon: "bi-bar-chart-line",
      title: "Soft Skills & Interview Training",
      text: "Students receive training in communication, presentation, HR & technical interview preparation, and problem-solving."
    },
    {
      icon: "bi-people",
      title: "Mock Interviews with Experts",
      text: "Students undergo mock rounds with industry experts who provide real-time feedback and improvement tips."
    },
    {
      icon: "bi-kanban",
      title: "Real-Time Project Exposure",
      text: "Students participate in real-world projects that strengthen their resumes and increase practical experience."
    },
    {
      icon: "bi-briefcase",
      title: "Internship Assistance",
      text: "We help students secure internships that offer corporate exposure, skill development, and industry understanding."
    },
    {
      icon: "bi-diagram-3",
      title: "Job Opportunities from Our Hiring Network",
      text: "Students get access to job openings across partnered companies, MNCs, and startups."
    },
    {
      icon: "bi-headset",
      title: "Dedicated Placement Support Until You're Hired",
      text: "Our placement team supports students until they secure the right job."
    }
  ];

  return (
    <section className="offer-section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`offer-main-title ${animateTitles ? 'title-sweep' : ''}`}>
            What we offer
          </h2>
        </div>

        <div className="row g-4">
          {offerData.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="offer-card">
                <div className="offer-card-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className={`offer-card-title ${animateTitles ? 'title-sweep' : ''}`}>
                  {item.title}
                </h3>
                <p className="offer-card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;