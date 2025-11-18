import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const whyChooseData = [
    {
      number: "01",
      title: "Industry-Aligned Training",
      text: "Learn exactly what companies expect. Our courses are designed with real-world industry standards, ensuring you gain relevant, job-ready skills."
    },
    {
      number: "02",
      title: "Expert Trainers & Mentors",
      text: "Train under experienced professionals who guide you with practical insights, hands-on projects, and interview-driven preparation."
    },
    {
      number: "03",
      title: "Dedicated Placement Support",
      text: "From resume building to mock interviews and job referrals, we provide complete career support until you land the right opportunity."
    }
  ];

  const provideData = [
    {
      icon: "bi-journal-check",
      text: "Job-Ready Curriculum built by Industry Experts"
    },
    {
      icon: "bi-cpu",
      text: "Hands-on Real-Time Projects & Assessments"
    },
    {
      icon: "bi-laptop",
      text: "Flexible Learning Options – Online & Offline Classroom"
    },
    {
      icon: "bi-people",
      text: "Interview-Focused Training & Mock HR/Technical Rounds"
    },
    {
      icon: "bi-briefcase",
      text: "Dedicated Placement Cell with Strong Hiring Network"
    },
    {
      icon: "bi-person-lines-fill",
      text: "Personal Mentorship for Every Learner"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">

        {/* Why Choose Us */}
        <h2 className="mb-4 section-title">Why Choose Us</h2>

        <div className="row g-4">
          {whyChooseData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="choose-card p-4">
                <div className="number">{item.number}</div>
                <h4 className="fw-bold mt-3">{item.title}</h4>
                <p className="text-muted mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What We Provide */}
        <div className="section-gap">
          <h2 className="mb-4 section-title">What We Provide</h2>

          <div className="row provide-row">
            {provideData.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="provide-card p-4 text-center">
                  <div className="icon-box mb-3">
                    <i className={`${item.icon} provide-icon`}></i>
                  </div>
                  <p className="fw-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SUBSCRIBE SECTION */}
      <div className="subscribe-section mt-5">
        <div className="subscribe-box mx-auto">

          <h3 className="subscribe-title">Stay Updated</h3>
          <p className="subscribe-text">
            Get the latest courses, tips, and exclusive offers delivered to your inbox.
          </p>

          <div className="d-flex subscribe-input-wrapper">
            <input
              type="text"
              placeholder="Email Address"
              className="subscribe-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
