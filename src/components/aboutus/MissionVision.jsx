import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  const iconMap = {
    Mission: "bi-bullseye",
    Vision: "bi-eye",
    Goal: "bi-flag"
  };

  const sections = [
    {
      id: 1,
      title: "Mission",
      content:
        "We empower learners with industry-ready skills, practical training, and personalized career support. Our mission is to shape confident professionals and bridge the skill gap through strong industry collaboration."
    },
    {
      id: 2,
      title: "Vision",
      content:
        "To become India's most trusted career development ecosystem—one that empowers individuals with the right skills, confidence, and industry exposure to grow, evolve, and achieve lifelong professional success."
    },
    {
      id: 3,
      title: "Goal",
      content:
        "To create confident, interview-ready individuals who can articulate their skills with clarity, showcase their strengths effectively, and perform exceptionally well in every stage of the interview process."
    }
  ];

  return (
    <section className="mv-section-new">

      <header className="mv-header-new">
        <h2 className="mv-heading-new">Mission. Vision. Goal.</h2>
        <p className="mv-tagline-new">The foundation that guides everything we do.</p>
      </header>

      <div className="mv-timeline">
        {sections.map((sec, i) => (
          <div key={sec.id} className={`mv-step ${i % 2 ? "right" : "left"}`}>
            
            <div className="mv-node">
              <i className={`bi ${iconMap[sec.title]}`}></i>
            </div>

            <div className="mv-content-card">
              <h3>{sec.title}</h3>
              <p>{sec.content}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default MissionVision;
