"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./our-team.css";

const teamHighlights = [
  {
    name: "Siva",
    role: "Senior Mentor",
    image: "/team/siva-sir.png",
  },
  {
    name: "Sanjai",
    role: "Placement Head",
    image: "/team/sanjai.jpg",
  },
  {
    name: "Pushparaj",
    role: "Lead Educator",
    image: "/team/pushparajjj.png",
  },
  {
    name: "Atchaya",
    role: "Lead Educator",
    image: "/team/Atchaya.jpg.png",
  },
];

const teamStats = [
  { label: "Expert Educators", value: "30+" },
  { label: "Student Satisfaction", value: "100%" },
  { label: "Avg. Experience", value: "10+ Yrs" },
  { label: "Certifications Held", value: "200+" },
];

const learningJourney = [
  {
    step: "01",
    title: "Student Entry",
    description:
      "You start with a quick profile review and goal discussion so we can map the right path from day one.",
    icon: "bi-person-check-fill",
    image: "/journey/student-entry.svg",
  },
  {
    step: "02",
    title: "Online/Offline Classes",
    description:
      "Live and structured sessions build strong fundamentals with concept clarity, guided notes, and mentor support.",
    icon: "bi-laptop-fill",
    image: "/journey/online-classes.svg",
  },
  {
    step: "03",
    title: "Practical Sessions",
    description:
      "Hands-on tasks and project labs convert theory into job-ready execution and real problem-solving confidence.",
    icon: "bi-code-slash",
    image: "/journey/practical-sessions.svg",
  },
  {
    step: "04",
    title: "Mock Test",
    description:
      "Technical and aptitude mock rounds reveal gaps early and improve speed, accuracy, and interview readiness.",
    icon: "bi-clipboard2-check-fill",
    image: "/journey/mock-test.svg",
  },
  {
    step: "05",
    title: "Live Projects",
    description:
      "Build and deliver real project modules with mentor guidance to gain production-style exposure and confidence.",
    icon: "bi-kanban-fill",
    image: "/journey/practical-sessions.svg",
  },
  {
    step: "06",
    title: "Certification",
    description:
      "You complete assessments, earn certification, and move forward with placement-focused guidance and support.",
    icon: "bi-patch-check-fill",
    image: "/journey/certification.svg",
  },
];

const placementTimeline = [
  {
    title: "Course Completion + Certification",
    description: "Complete course milestones, final assessments, and build a verified project portfolio.",
    week: "Week 0",
    icon: "bi-patch-check-fill",
  },
  {
    title: "Resume & Naukri and other profiles",
    description: "Our HR team creates ATS-friendly resume and LinkedIn profiles aligned to your target role.",
    week: "Week 1",
    icon: "bi-file-earmark-person-fill",
  },
  {
    title: "Mock Interviews (3 Rounds)",
    description: "Technical, aptitude, and HR mocks with personal feedback from industry interviewers.",
    week: "Week 2-3",
    icon: "bi-chat-square-quote-fill",
  },
  {
    title: "Company Referrals & Drives",
    description: "Profiles are shared to matched companies and interview drives are scheduled with support.",
    week: "Week 4-5",
    icon: "bi-briefcase-fill",
  },
  {
    title: "Offer Letter & Onboarding",
    description: "We guide salary discussion, documentation, and smooth onboarding till first-day readiness.",
    week: "Week 6+",
    icon: "bi-trophy-fill",
  },
];

const skillForgeCycle = [
  {
    step: "01",
    title: "Enroll & Assess",
    subtitle: "Free skill test + batch placement",
    icon: "bi-bullseye",
    color: "#eab308",
    bgColor: "#fffbeb",
    borderColor: "rgba(234, 179, 8, 0.25)",
    badgeBg: "#eab308",
  },
  {
    step: "02",
    title: "Live Training",
    subtitle: "Industry trainers, real-time projects",
    icon: "bi-easel2-fill",
    color: "#f97316",
    bgColor: "#fff7ed",
    borderColor: "rgba(249, 115, 22, 0.25)",
    badgeBg: "#f97316",
  },
  {
    step: "03",
    title: "Hands-on Labs",
    subtitle: "Build portfolio projects live",
    icon: "bi-tools",
    color: "#22c55e",
    bgColor: "#f0fdf4",
    borderColor: "rgba(34, 197, 94, 0.25)",
    badgeBg: "#22c55e",
  },
  {
    step: "04",
    title: "Projects & Placement",
    subtitle: "Capstone projects + placement support",
    icon: "bi-code-slash",
    color: "#3b82f6",
    bgColor: "#eff6ff",
    borderColor: "rgba(59, 130, 246, 0.25)",
    badgeBg: "#3b82f6",
  },
  {
    step: "05",
    title: "Interview Prep",
    subtitle: "HR rounds, aptitude, coding",
    icon: "bi-mic-fill",
    color: "#a855f7",
    bgColor: "#faf5ff",
    borderColor: "rgba(168, 85, 247, 0.25)",
    badgeBg: "#a855f7",
  },
  {
    step: "06",
    title: "Job Placement",
    subtitle: "Direct referrals to hiring partners",
    icon: "bi-briefcase-fill",
    color: "#ef4444",
    bgColor: "#fef2f2",
    borderColor: "rgba(239, 68, 68, 0.25)",
    badgeBg: "#ef4444",
  },
];

const centerTeamMembers = [
  { name: "Siva", image: "/team/siva-sir.png" },
  { name: "Pushparaj", image: "/team/pushparajjj.png" },
  { name: "Siva Sankara Pandian", image: "/team/sangu.png" },
  { name: "Atchaya", image: "/team/Atchaya.jpg.png" },
  { name: "Sanjai", image: "/team/sanjai.jpg" },
];

export default function OurTeamPage() {
  return (
    <main className="our-team-page">
      <section className="our-team-hero">
        <div className="container">
          <div className="our-team-hero-panel">
            <div className="hero-copy">
              <span className="hero-chip">Our Educators</span>
              <h1 className="resume-like-heading resume-sweep">
                Meet the Experts Behind Jobzenter
              </h1>
              <p>
                Our mentors, trainers, and support team work together to make your learning simple, practical, and career-focused from day one.
              </p>
              <div className="hero-actions">
                <Link href="/reach-us" className="btn btn-warning rounded-pill px-4">
                  Connect With Team
                </Link>
              </div>
            </div>

            <div className="hero-cards-grid hero-cards-grid-4" aria-hidden="true">
              <div className="mini-card pink">
                <Image
                  src={teamHighlights[0].image}
                  alt={teamHighlights[0].name}
                  fill
                  sizes="(max-width: 991px) 100vw, 16vw"
                  className="team-photo"
                />
                <div className="photo-meta">
                  <strong>{teamHighlights[0].name}</strong>
                  <small>{teamHighlights[0].role}</small>
                </div>
              </div>
              <div className="mini-card pink">
                <Image
                  src={teamHighlights[1].image}
                  alt={teamHighlights[1].name}
                  fill
                  sizes="(max-width: 991px) 100vw, 16vw"
                  className="team-photo"
                />
                <div className="photo-meta">
                  <strong>{teamHighlights[1].name}</strong>
                  <small>{teamHighlights[1].role}</small>
                </div>
              </div>
              <div className="mini-card pink">
                <Image
                  src={teamHighlights[2].image}
                  alt={teamHighlights[2].name}
                  fill
                  sizes="(max-width: 991px) 100vw, 16vw"
                  className="team-photo"
                />
                <div className="photo-meta">
                  <strong>{teamHighlights[2].name}</strong>
                  <small>{teamHighlights[2].role}</small>
                </div>
              </div>
              <div className="mini-card pink">
                <Image
                  src={teamHighlights[3].image}
                  alt={teamHighlights[3].name}
                  fill
                  sizes="(max-width: 991px) 100vw, 16vw"
                  className="team-photo"
                />
                <div className="photo-meta">
                  <strong>{teamHighlights[3].name}</strong>
                  <small>{teamHighlights[3].role}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team-stats">
        <div className="container">
          <div className="stats-grid">
            {teamStats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section py-4 py-md-5">
        <div className="journey-full">
          <div className="container">
            <div className="journey-header text-center">
              <span className="journey-chip">Learning Roadmap</span>
              <h2 className="resume-like-heading resume-sweep">Sailing Your Learning Journey With Expert Guidance</h2>
              <p>
                A clear lifecycle designed to move every learner from onboarding to certification
                with confidence.
              </p>
            </div>

            <div className="journey-lifecycle">
              <div className="journey-ring" aria-hidden />
              <div className="journey-center">
                <span>Lifecycle</span>
                <strong>Your Learning Journey</strong>
                <small>Step-by-step guided progression</small>
              </div>
              <div className="journey-orbit">
                {learningJourney.map((item, index) => (
                  <div
                    key={item.title}
                    className={`journey-orbit-slot journey-orbit-slot--${item.step}`}
                    style={{ "--angle": `${(360 / learningJourney.length) * index}deg` }}
                  >
                    <div className="journey-step-rotator">
                      <article className="journey-step">
                        <div className="journey-step-bg" aria-hidden />
                        <div className="journey-step-watermark" aria-hidden>
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="70px"
                            className="journey-step-watermark-image"
                          />
                        </div>
                        <div className="journey-step-top">
                          <div className="journey-node">{item.step}</div>
                          <div className="journey-step-icon" aria-hidden>
                            <i className={`bi ${item.icon}`} />
                          </div>
                        </div>
                        <div className="journey-step-image-wrap">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="80px"
                            className="journey-step-image"
                          />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="placement-dark-section py-5">
        <div className="container">
          <div className="placement-dark-panel">
            <span className="placement-dark-chip">Placement Assurance</span>
            <h2 className="resume-like-heading resume-sweep placement-main-heading">We support you until you get hired.</h2>

            <div className="placement-dark-right">
              <h3>How placement works</h3>
              <div className="placement-flow-wrap">
                <div className="placement-flow-line" aria-hidden />
                {placementTimeline.map((item, index) => (
                  <article className="placement-flow-item" key={item.title}>
                    <div className="placement-flow-icon" aria-hidden>
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="placement-week-pill">{item.week}</span>
                    <span className="placement-flow-index">{index + 1}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skillforge-cycle-section py-5">
        <div className="skillforge-panel">
          <div className="skillforge-head text-center">
            <span className="skillforge-chip">THE JOBZENTER JOURNEY</span>
            <h2 className="resume-like-heading resume-sweep">
              From Learning to <span>Dream Career</span>
            </h2>
            <p>
              Everything you need. One platform. Endless opportunities.
            </p>
          </div>

          {/* Wave Timeline container */}
          <div className="jobzenter-wave-timeline-container d-none d-lg-block">
            <svg className="timeline-wave-svg" viewBox="0 0 1200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 30,100 C 60,100 70,60 100,60 C 200,60 200,180 300,180 C 400,180 400,60 500,60 C 600,60 600,180 700,180 C 800,180 800,60 900,60 C 1000,60 1000,180 1100,180 C 1130,180 1140,140 1170,140" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6 6" fill="none" />
              <circle cx="30" cy="100" r="5.5" fill="#eab308" stroke="#fff" strokeWidth="2.5" />
              <circle cx="200" cy="120" r="5" fill="#cbd5e1" />
              <circle cx="400" cy="120" r="5" fill="#cbd5e1" />
              <circle cx="600" cy="120" r="5" fill="#cbd5e1" />
              <circle cx="800" cy="120" r="5" fill="#cbd5e1" />
              <circle cx="1000" cy="120" r="5" fill="#cbd5e1" />
              <circle cx="1170" cy="140" r="5.5" fill="#334155" stroke="#fff" strokeWidth="2.5" />
            </svg>

            <div className="timeline-nodes-wrap">
              {skillForgeCycle.map((item, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={item.title}
                    className={`timeline-node-card ${isEven ? "node-even" : "node-odd"}`}
                    style={{
                      "--node-color": item.color,
                      "--node-bg": item.bgColor,
                      "--node-border": item.borderColor,
                      "--badge-bg": item.badgeBg,
                    }}
                  >
                    {!isEven && <span className="node-step-badge">{item.step}</span>}
                    <div className="node-icon-glow">
                      <div className="node-icon-inner">
                        <i className={`bi ${item.icon}`} />
                      </div>
                    </div>
                    {isEven && <span className="node-step-badge">{item.step}</span>}
                    <div className="node-text-content text-center">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fallback layout for mobile/tablet */}
          <div className="d-block d-lg-none mobile-timeline-wrap">
            {skillForgeCycle.map((item, index) => (
              <div
                key={item.title}
                className="mobile-timeline-node"
                style={{
                  "--node-color": item.color,
                  "--node-bg": item.bgColor,
                  "--node-border": item.borderColor,
                  "--badge-bg": item.badgeBg,
                }}
              >
                <div className="mobile-node-left">
                  <div className="node-icon-glow">
                    <div className="node-icon-inner">
                      <i className={`bi ${item.icon}`} />
                    </div>
                  </div>
                  <span className="mobile-node-badge">{item.step}</span>
                </div>
                <div className="mobile-node-right">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Our Team Card below */}
          <div className="our-team-highlight-card container mt-5">
            <div className="our-team-highlight-grid">
              {/* Left Column: Mentors staggered grid */}
              <div className="mentors-showcase-left">
                <div className="mentors-staggered-container">
                  <div className="mentor-row top-row">
                    {centerTeamMembers.slice(0, 3).map((member, i) => (
                      <div key={member.name} className={`mentor-circle mentor-circle-top-${i + 1}`}>
                        <div className="mentor-img-wrapper">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="96px"
                            className="mentor-avatar-img"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mentor-row bottom-row">
                    {centerTeamMembers.slice(3, 5).map((member, i) => (
                      <div key={member.name} className={`mentor-circle mentor-circle-bottom-${i + 1}`}>
                        <div className="mentor-img-wrapper">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="96px"
                            className="mentor-avatar-img"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vertical divider on desktop */}
              <div className="team-highlight-divider" />

              {/* Right Column: Info and button */}
              <div className="team-highlight-info-right">
                <h2>Our Team</h2>
                <div className="team-subtexts">
                  <p className="team-subtext-main">Experienced Mentors.</p>
                  <p className="team-subtext-sub">Real Guidance. Your Success.</p>
                </div>
                <Link href="/reach-us" className="btn-meet-our-mentors">
                  Meet Our Mentors <span className="chevron">&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
