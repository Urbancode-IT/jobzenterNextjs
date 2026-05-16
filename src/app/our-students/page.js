 "use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import StudentReviews from "@/components/StudentReviews";

export default function OurStudentsPage() {
  return (
    <main>
      <section className="students-hero py-4 py-md-5">
        <div className="container">
          <div className="students-hero-panel">
            <div className="students-hero-left">
              <span className="students-hero-chip">Student Success</span>
              <h1>
                They came with
                <br />
                zero experience.
                <br />
                They left with <span>offers.</span>
              </h1>
              <p>
                Our students come from all backgrounds - freshers, career changers, and diploma holders.
                What unites them? They all found jobs through Jobzenter. These are their stories.
              </p>
              <div className="students-hero-actions">
                <Link href="#what-our-students-say" className="btn students-btn-primary rounded-pill">
                  Read All Stories
                </Link>
                <Link href="/reach-us" className="btn students-btn-outline rounded-pill">
                  Watch Testimonials
                </Link>
              </div>
              <div className="students-stats-row">
                <article className="students-mini-stat">
                  <strong>5,200+</strong>
                  <span>Successful Placements</span>
                </article>
                <article className="students-mini-stat">
                  <strong>92%</strong>
                  <span>Placement Success Rate</span>
                </article>
                <article className="students-mini-stat">
                  <strong>80+</strong>
                  <span>Hiring Companies</span>
                </article>
              </div>
            </div>

            <div className="students-hero-right">
              <div className="students-image-wrap">
                <Image
                  src="/interns.jpg"
                  alt="Our student placement journey"
                  fill
                  sizes="(max-width: 991px) 100vw, 45vw"
                  className="students-hero-image"
                />
                <div className="students-image-badge students-image-badge--top">
                  <strong>Real Classroom</strong>
                  <span>Hands-on sessions every week</span>
                </div>
                <div className="students-image-badge students-image-badge--bottom">
                  <strong>Career Outcomes</strong>
                  <span>Interview to Offer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StudentReviews />

      <style jsx global>{`
        .students-hero {
          background: transparent;
        }
        .students-hero-panel {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(244, 234, 23, 0.35);
          background: radial-gradient(circle at 10% 18%, rgba(250, 226, 94, 0.25), transparent 38%),
            radial-gradient(circle at 85% 82%, rgba(59, 130, 246, 0.14), transparent 32%),
            linear-gradient(155deg, #fffef7 0%, #fff9df 48%, #fff5c8 100%);
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          padding: clamp(22px, 3.4vw, 34px);
          color: #1f2937;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
        }
        .students-hero-panel::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          right: -120px;
          top: -120px;
          background: radial-gradient(circle, rgba(245, 208, 56, 0.5), rgba(245, 208, 56, 0));
          pointer-events: none;
        }
        .students-hero-chip {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.14);
          background: #fff8d1;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: #7c5a00;
          margin-bottom: 12px;
        }
        .students-hero-left h1 {
          margin: 0;
          font-size: clamp(2.1rem, 5vw, 3.5rem);
          line-height: 0.94;
          letter-spacing: -0.02em;
          color: #111827;
          font-weight: 600;
        }
        .students-hero-left h1 span {
          color: #f59e0b;
          font-style: italic;
        }
        .students-hero-left p {
          margin: 16px 0 0;
          color: #475569;
          line-height: 1.7;
          max-width: 56ch;
        }
        .students-hero-actions {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .students-btn-primary {
          background: linear-gradient(90deg, #f4ea17 17.79%, #ffffff 100%);
          color: #000;
          font-weight: 600;
          border: 1px solid #f4ea17;
          padding: 8px 18px;
        }
        .students-btn-outline {
          background: #fff;
          color: #000;
          border: 1px solid #d1d5db;
          padding: 8px 18px;
        }
        .students-stats-row {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .students-mini-stat {
          margin-top: 0;
          text-align: center;
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: 14px;
          padding: 12px 8px;
          background: rgba(255, 255, 255, 0.7);
        }
        .students-mini-stat strong {
          display: block;
          color: #111827;
          font-size: 1.05rem;
        }
        .students-mini-stat span {
          display: block;
          margin-top: 4px;
          color: #64748b;
          font-size: 0.75rem;
        }
        .students-hero-right {
          display: flex;
          align-items: center;
        }
        .students-image-wrap {
          position: relative;
          width: 100%;
          min-height: 420px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: #f8fafc;
          box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04), 0 12px 24px rgba(15, 23, 42, 0.1);
        }
        .students-hero-image {
          object-fit: cover;
          object-position: center;
          filter: brightness(0.96) saturate(1);
        }
        .students-image-badge {
          position: absolute;
          border-radius: 12px;
          padding: 10px 12px;
          background: rgba(17, 24, 39, 0.8);
          color: #f8fafc;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 220px;
        }
        .students-image-badge strong {
          display: block;
          font-size: 0.83rem;
        }
        .students-image-badge span {
          display: block;
          margin-top: 2px;
          font-size: 0.72rem;
          color: #cbd5e1;
        }
        .students-image-badge--top {
          top: 14px;
          left: 14px;
        }
        .students-image-badge--bottom {
          right: 14px;
          bottom: 14px;
        }
        @media (max-width: 991px) {
          .students-hero-panel {
            grid-template-columns: 1fr;
          }
          .students-stats-row {
            grid-template-columns: 1fr;
          }
          .students-image-wrap {
            min-height: 300px;
          }
          .students-image-badge {
            max-width: 190px;
          }
        }
        @media (max-width: 575px) {
          .students-hero-left h1 {
            font-size: 1.95rem;
            line-height: 1;
          }
          .students-image-badge {
            position: static;
            margin: 10px;
          }
        }
      `}</style>
    </main>
  );
}
