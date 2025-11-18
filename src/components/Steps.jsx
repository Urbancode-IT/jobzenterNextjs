'use client';
import React from 'react';
import './Steps.css';

const steps = [
  { id: 1, title: 'Student Enrollment', subtitle: 'Step 1', top: 560, left: 40 },
  { id: 2, title: 'Career Counselling & Skill Assessment', subtitle: 'Step 2', top: 490, left: 140 },
  { id: 3, title: 'Training Program Begins', subtitle: 'Step 3', top: 430, left: 260 },
  { id: 4, title: 'Resume Building & LinkedIn Optimization', subtitle: 'Step 4', top: 360, left: 380 },
  { id: 5, title: 'Mock Interviews', subtitle: 'Step 5', top: 300, left: 500 },
  { id: 6, title: 'Internship / Live Project Experience', subtitle: 'Step 6', top: 260, left: 640 },
  { id: 7, title: 'Placement Drive & Job Openings', subtitle: 'Step 7', top: 210, left: 760 },
  { id: 8, title: 'Company Interviews', subtitle: 'Step 8', top: 160, left: 600 },
  { id: 9, title: 'Selection & Offer Letter', subtitle: 'Step 9', top: 120, left: 460 },
  { id: 10, title: 'Post-Placement Support', subtitle: 'Step 10', top: 80, left: 300 },
];

export default function Steps() {
  const pathPoints = steps
    .map((s) => `${s.left + 110},${s.top + 32}`)
    .join(' ');

  return (
    <section className="placement-flow container">
      <div className="flow-header text-center">
        <h2>Student Placement Cycle Flowchart</h2>
        <p className="flow-sub">A clear, step-by-step journey that guides students from learning to landing the right job.</p>
      </div>

      <div className="flow-canvas">
        <svg className="flow-path" viewBox="0 0 1100 680" preserveAspectRatio="none">
          <polyline points={pathPoints} fill="none" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" opacity="0.9" />
        </svg>

        {steps.map((s) => (
          <div
            className="flow-step"
            key={s.id}
            style={{ top: `${s.top}px`, left: `${s.left}px` }}
          >
            <div className="step-card">
              <div className="step-icon" aria-hidden>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.2" fill="transparent" />
                </svg>
              </div>

              <div className="step-content">
                <div className="step-title">{s.title}</div>
                <div className="step-sub">{s.subtitle}</div>
              </div>
            </div>

            <div className="step-pill">{s.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
