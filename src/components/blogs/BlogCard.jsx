// src/components/BlogCard.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BlogCard = ({ image, date, title, description, tags, link, index = 0 }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <a
      href={link}
      className="blog-card-link"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        ref={cardRef}
        className="card border-0 h-100 d-flex flex-column"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          cursor: "pointer",
          borderRadius: "12px",
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible
            ? hovered ? "translateY(-6px)" : "translateY(0px)"
            : "translateY(40px)",
          transition: "opacity 0.6s ease, transform 0.4s ease, box-shadow 0.4s ease",
          boxShadow: hovered
            ? "0 0 15px rgba(249, 115, 22, 0.5), 0 0 35px rgba(249, 115, 22, 0.25), 0 10px 30px rgba(0,0,0,0.1)"
            : "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* Image - NO zoom, fixed */}
        <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="blog-card-image"
          />
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <p className="text-secondary mb-2 border-bottom pb-1" style={{ fontSize: "13px" }}>
              {date}
            </p>
            <h3
              className="fw-bold blog-title mb-2"
              style={{ fontSize: "20px", lineHeight: "1.3", color: "#000" }}
            >
              {title}
            </h3>
            <p className="text-secondary small mb-3">{description}</p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {tags &&
              tags.map((tag, i) => (
                <span
                  key={i}
                  className="badge small px-3 py-2"
                  style={{
                    borderRadius: "6px",
                    backgroundColor: hovered ? "#f97316" : "#212529",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
