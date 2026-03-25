import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InterviewTrainingCell.css";

const InterviewTrainingCell = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const sectionRef = useRef(null);

  /* ── Scroll observer ── */
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          setContentVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="interview-training-wrapper" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className={`col-lg-6 itc-content ${contentVisible ? 'itc-animate' : ''}`}>
            <h2
              className={`interview-training-title ${titleVisible ? 'title-sweep' : ''}`}
            >
              Interview placement Cell
            </h2>

            <p className="interview-training-desc">
              At JobZenter’s Interview Training Cell, we prepare students, freshers,
              and experienced professionals to face interviews with complete confidence,
              clarity, and competence. Our structured interview training ecosystem is
              designed to help candidates overcome fear, improve communication,
              strengthen technical understanding, and perform effectively in real
              recruitment scenarios.
              <br /><br />
              We focus on practical, industry-aligned interview preparation that equips
              learners to handle HR rounds, technical rounds, aptitude tests, coding
              assessments, and real-time problem-solving, ensuring they present themselves
              as strong and job-ready candidates.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`col-lg-6 text-center itc-image-box ${contentVisible ? 'itc-animate' : ''}`}>
            <div className="interview-training-image-box">
              <img
                src="/interviewtraining.jpg"
                alt="Interview training"
                className="interview-training-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InterviewTrainingCell;
