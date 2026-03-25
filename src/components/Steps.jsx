'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Steps.css';

export default function Steps() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  /* ── Heading scroll observer ── */
  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="placement-flow container">
      <div className="flow-header">
        <h2
          ref={titleRef}
          className={`${titleVisible ? "title-sweep" : ""}`}
        >
          Student placement cycle flowchart
        </h2>
        <p>A clear, step-by-step journey that guides students from learning to landing the right job.<br/>Each stage is designed to build confidence, showcase skills, and ensure a smooth placement experience.</p>
        <img src="/Life cycle.png" alt="Student Placement Cycle Flowchart" className="placement-image" />
      </div>
       
    </section>
  );
}
