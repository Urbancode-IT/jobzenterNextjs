"use client";
import React, { useState, useEffect, useRef } from "react";
import { recentBlogs } from "./blogsData";
import "./recentBlogs.css";

const RecentBlogs = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  const featured = recentBlogs[0]; // Large left card
  const sideTop  = recentBlogs[1]; // Small right top
  const sideBot  = recentBlogs[3]; // Small right bottom
  const wide     = recentBlogs[2]; // Full-width bottom card

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="rb-section container-fluid px-4 px-md-5 pt-5 pb-2">
      {/* Heading */}
      <div className="w-100 text-center mb-4">
        <h2
          ref={titleRef}
          className={`rb-heading fw-bold m-0 ${titleVisible ? "title-sweep" : ""}`}
          style={{ display: "inline-block" }}
        >
          Recent Blogs
        </h2>
      </div>

      {/* ── Top row: Large + Two smalls ── */}
      <div className="rb-top-row">

        {/* Large featured card */}
        <a href={featured.link} className="rb-card rb-card--large text-decoration-none text-dark">
          <div className="rb-card__img-wrap">
            <img src={featured.image} alt={featured.title} className="rb-card__img" />
          </div>
          <div className="rb-card__body">
            <span className="rb-date">{featured.date}</span>
            <h3 className="rb-title rb-title--lg">
              {featured.title}
              <span className="rb-arrow">↗</span>
            </h3>
            <p className="rb-desc">{featured.description}</p>
            <span className="rb-tag">{featured.tags[0]}</span>
          </div>
        </a>

        {/* Right stack */}
        <div className="rb-side-stack">

          {/* Small top */}
          <a href={sideTop.link} className="rb-card rb-card--side text-decoration-none text-dark">
            <div className="rb-card__img-wrap rb-card__img-wrap--side">
              <img src={sideTop.image} alt={sideTop.title} className="rb-card__img" />
            </div>
            <div className="rb-card__body rb-card__body--side">
              <span className="rb-date">{sideTop.date}</span>
              <h3 className="rb-title rb-title--sm">
                {sideTop.title}
                <span className="rb-arrow">↗</span>
              </h3>
              <p className="rb-desc rb-desc--sm">{sideTop.description}</p>
              <span className="rb-tag">{sideTop.tags[0]}</span>
            </div>
          </a>

          <div className="rb-divider" />

          {/* Small bottom */}
          <a href={sideBot.link} className="rb-card rb-card--side text-decoration-none text-dark">
            <div className="rb-card__img-wrap rb-card__img-wrap--side">
              <img src={sideBot.image} alt={sideBot.title} className="rb-card__img" />
            </div>
            <div className="rb-card__body rb-card__body--side">
              <span className="rb-date">{sideBot.date}</span>
              <h3 className="rb-title rb-title--sm">
                {sideBot.title}
                <span className="rb-arrow">↗</span>
              </h3>
              <p className="rb-desc rb-desc--sm">{sideBot.description}</p>
              <span className="rb-tag">{sideBot.tags[0]}</span>
            </div>
          </a>

        </div>
      </div>

      {/* ── Bottom row: wide card ── */}
      <div className="rb-wide-row">
        <a href={wide.link} className="rb-card rb-card--wide text-decoration-none text-dark">
          <div className="rb-card__img-wrap rb-card__img-wrap--wide">
            <img src={wide.image} alt={wide.title} className="rb-card__img" />
          </div>
          <div className="rb-card__body rb-card__body--wide">
            <span className="rb-date">{wide.date}</span>
            <h3 className="rb-title rb-title--md">
              {wide.title}
              <span className="rb-arrow">↗</span>
            </h3>
            <p className="rb-desc">{wide.description}</p>
            <span className="rb-tag">{wide.tags[0]}</span>
          </div>
        </a>
      </div>

    </section>
  );
};

export default RecentBlogs;
