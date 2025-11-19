import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InterviewTrainingCell.css";

const InterviewTrainingCell = () => {
  return (
    <section className="interview-training-wrapper">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className="interview-training-title">
              Interview Training Cell
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
          <div className="col-lg-6 text-center">
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
