"use client";

import "./AboutSection.css";

const courses = [
  { title: "Full Stack Development", desc: "Full Stack Development is the most in-demand skill in today's tech industry. You'll learn to build complete web applications from frontend to backend, working with real projects that top companies expect from day one." },
  { title: "Software Testing", desc: "Every great product needs a great tester. Learn to find bugs, automate test cases, and ensure quality — a skill every IT company actively hires for with strong salary packages." },
  { title: "CCNA Networking", desc: "Networking is the backbone of every technology. Master Cisco routing, switching, and protocols to become the expert who keeps businesses connected and running 24/7." },
  { title: "AWS Cloud Platform", desc: "The world is moving to the cloud — and companies need people who know it. Learn AWS from scratch and step into one of the highest-paying roles in the IT industry today." },
];

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row gy-4 align-items-center">

          {/* LEFT - COURSE CARDS */}
          <div className="col-lg-6">
            <div className="course-cards-grid">
              {courses.map((course, i) => (
                <div key={i} className="course-card fade-card" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="course-title">{course.title}</div>
                  <p className="course-desc">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>
              {/* RIGHT - BLOB IMAGE */}
<div className="col-lg-6 d-flex justify-content-center align-items-center">
  <div className="blob-wrap">

    <div className="blob-dot dot-1"></div>
    <div className="blob-dot dot-2"></div>
    <div className="blob-dot dot-3"></div>

    <div className="blob-img-wrap">
      <img src="/Study-Abroad/arrow.jpg" alt="JobZenter Student" className="blob-img" />
    </div>

    <div className="blob-badge">
      <span className="blob-badge-icon">🏆</span>
      <div>
        <div className="blob-badge-title">92% Placement</div>
        <div className="blob-badge-sub">Rate This Year</div>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;