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
    name: "Pushparaj",
    role: "Lead Educator",
    image: "/team/pushparajjj.png",
  },
  {
    name: "Sankara Pandian",
    role: "Success Lead",
    image: "/team/sangu.png",
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
    title: "Resume & LinkedIn Build",
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
    step: 1,
    title: "Enroll & Assess",
    subtitle: "Free skill test + batch placement",
    icon: "bi-bullseye",
  },
  {
    step: 2,
    title: "Live Training",
    subtitle: "Industry trainers, real projects",
    icon: "bi-easel2-fill",
  },
  {
    step: 3,
    title: "Hands-on Labs",
    subtitle: "Build portfolio projects live",
    icon: "bi-tools",
  },
  {
    step: 4,
    title: "Assessments",
    subtitle: "Mock tests + industry-level exams",
    icon: "bi-bar-chart-fill",
  },
  {
    step: 5,
    title: "Interview Prep",
    subtitle: "HR rounds, aptitude, coding",
    icon: "bi-mic-fill",
  },
  {
    step: 6,
    title: "Job Placement",
    subtitle: "Direct referrals to hiring partners",
    icon: "bi-briefcase-fill",
  },
];

const centerTeamMembers = [
  { name: "Siva", image: "/team/siva-sir.png" },
  { name: "Pushparaj", image: "/team/pushparajjj.png" },
  { name: "Sankara Pandian", image: "/team/sangu.png" },
  { name: "Mukesh", image: "/team/mukesh.jpg" },
  { name: "Sanjay", image: "/team/sanjay.jpg" },
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

            <div className="hero-cards-grid" aria-hidden="true">
              <div className="big-card">
                <Image
                  src={teamHighlights[0].image}
                  alt={teamHighlights[0].name}
                  fill
                  sizes="(max-width: 991px) 100vw, 33vw"
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
              <div className="mini-card green">
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
              <span className="skillforge-chip">How It Works</span>
              <h2 className="resume-like-heading resume-sweep">
                The <span>Jobzenter</span> cycle
              </h2>
              <p>
                Every student goes through a proven, industry-aligned cycle from enrollment to job offer.
              </p>
            </div>

            <div className="skillforge-orbit-wrap">
              <div className="skillforge-orbit-ring" aria-hidden />
              <div className="skillforge-orbit-glow" aria-hidden />
              <div className="skillforge-center-core">
                <div className="center-team-stack" aria-label="Our teammates">
                  {centerTeamMembers.map((member) => (
                    <div key={member.name} className="center-team-avatar">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="48px"
                        className="center-team-avatar-image"
                      />
                    </div>
                  ))}
                </div>
                <strong>Our Team</strong>
               
              </div>

              {skillForgeCycle.map((item, index) => (
                <article
                  key={item.title}
                  className={`skillforge-node skillforge-node--${index + 1}`}
                >
                  <div className="skillforge-node-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <span className="skillforge-node-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
      </section>

    </main>
  );
}
