import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="yw-wrapper">
      <div className="yw-container">

        <div className="yw-left">
          <h2 className="yw-title">
            Who We Are
            <span className="yw-underline"></span>
          </h2>

          <p className="yw-text">
            We empower students, freshers, and working professionals with
            industry-aligned skills, practical learning, and guided career
            support. Through expert mentorship, structured training programs,
            and real-time exposure, we help learners gain clarity, confidence,
            and competence to step into the corporate world with purpose.
          </p>

          <p className="yw-text">
            Our focus is simple: transform skills, strengthen careers, and open
            meaningful opportunities. We bridge the gap between education and
            industry expectations by nurturing talent and supporting individuals
            until they achieve breakthrough results.
          </p>
        </div>

        <div className="yw-right">
          <div className="highlight-card">
            <h3>Skill transformation</h3>
            <p>Training that prepares you for the real world.</p>
          </div>

          <div className="highlight-card">
            <h3>Career growth</h3>
            <p>Clarity and support for your next big step.</p>
          </div>

          <div className="highlight-card">
            <h3>Industry exposure</h3>
            <p>Experience what companies actually expect.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
