"use client";
import React, { useEffect, useRef, useState } from "react";
import "./MissionVision.css";

export default function MissionVision() {
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
    <section className="mv-section-new">

      <header className="mv-header-new">
        <h2
          ref={titleRef}
          className={`mv-heading-new ${titleVisible ? "title-sweep" : ""}`}
        >
          Mission. Vision. Goal.
        </h2>
        <p className="mv-tagline-new">The foundation that guides everything we do.</p>
        <img src="/Mockinterviews/Mission.png" alt="" />
      </header>

    </section>
  );
};


