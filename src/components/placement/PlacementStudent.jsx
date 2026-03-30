'use client';
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlacementStudent.css";

const PlacementStudent = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`placement-combined-section ${visible ? "placement-combined-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        {/* Placement Services + image */}
        <div className="row align-items-center placement-combined-block">
          <div className="col-lg-7 pcb-col-text">
            <h2 className="placement-combined-title">
              Placement Services for{" "}
              <span className="placement-combined-accent">Students</span>
            </h2>
            <p className="placement-combined-desc">
              At Jobzenter, we understand that a student’s biggest challenge is not
              just learning skills—but finding the right opportunity to apply them.
              Our Placement Services are designed exclusively to support students
              in transforming their academic learning into real-world success.
              <br />
              <br />
              We provide a structured, end-to-end placement experience that prepares
              every student to confidently step into the corporate world with
              clarity, competence, and direction.
            </p>
          </div>
          <div className="col-lg-5 text-center pcb-col-img">
            <img
              src="/student.jpg"
              alt="Students in a placement discussion at Jobzenter"
              className="placement-combined-image placement-combined-image--student"
            />
          </div>
        </div>

        {/* Interview Training Cell + image */}
        <div className="row align-items-center placement-combined-block placement-combined-block--second">
          <div className="col-lg-7 pcb-col-text">
            <h2 className="placement-combined-title">
              Interview placement{" "}
              <span className="placement-combined-accent">Cell</span>
            </h2>
            <p className="placement-combined-desc">
              At Jobzenter’s Interview Training Cell, we prepare students, freshers,
              and experienced professionals to face interviews with complete
              confidence, clarity, and competence. Our structured interview training
              ecosystem is designed to help candidates overcome fear, improve
              communication, strengthen technical understanding, and perform
              effectively in real recruitment scenarios.
              <br />
              <br />
              We focus on practical, industry-aligned interview preparation that
              equips learners to handle HR rounds, technical rounds, aptitude tests,
              coding assessments, and real-time problem-solving, ensuring they
              present themselves as strong and job-ready candidates.
            </p>
          </div>
          <div className="col-lg-5 text-center pcb-col-img">
            <img
              src="/interviewtraining.jpg"
              alt="Interview training session at Jobzenter"
              className="placement-combined-image placement-combined-image--training"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStudent;
