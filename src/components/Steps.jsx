'use client';
import React from 'react';
import './Steps.css';

const steps = [
  { id: 1, title: 'Student Enrollment', icon: '🎓', top: 80, left: 80 },
  { id: 2, title: 'Career Counselling & Skill Assessment', icon: '📊', top: 160, left: 220 },
  { id: 3, title: 'Training Program Begins (Technical skills + Soft skills + Live Projects)', icon: '👨‍🏫', top: 260, left: 360 },
  { id: 4, title: 'Resume Building & LinkedIn Optimization', icon: '📄', top: 360, left: 500 },
  { id: 5, title: 'Mock Interviews (HR Round + Technical Round + Feedback)', icon: '🗣️', top: 460, left: 640 },
  { id: 6, title: 'Internship / Live Project Experience', icon: '📦', top: 540, left: 780 },
  { id: 7, title: 'Placement Drive & Job Openings', icon: '💼', top: 620, left: 640 },
  { id: 8, title: 'Company Interviews', icon: '🧑‍💻', top: 700, left: 500 },
  { id: 9, title: 'Selection & Offer Letter', icon: '✉️', top: 780, left: 360 },
  { id: 10, title: 'Post-Placement Support (LinkedIn guidance + Career growth support)', icon: '🤝', top: 860, left: 220 },
];

export default function Steps() {
  const pathPoints = steps.map(
    (s) => `${s.left + 140},${s.top + 20}`
  ).join(' ');

  return (
    <section className="placement-flow container">
      <div className="flow-header">
        <h2>Student Placement Cycle Flowchart</h2>
        <p className="flow-sub">
        
        </p>
      </div>

      <div className="flow-canvas">
        <svg className="flow-path" viewBox="0 0 1200 1100" preserveAspectRatio="none">
          <polyline
            points={pathPoints}
            fill="none"
            stroke="#c2c2c2"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        {steps.map((s, index) => (
          <div key={s.id} className="flow-step" style={{ top: s.top, left: s.left }}>
            
            {/* Icon + Title Box */}
            <div className="step-card">
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
            </div>

            {/* Yellow pill */}
            <div className="step-pill">Step {index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
