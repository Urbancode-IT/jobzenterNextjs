// src/components/blogs/BlogCard.jsx
"use client";

import Image from "next/image";

const BlogCard = ({ image, date, title, description, tags, link, author = "Admin" }) => {
  return (
    <a
      href={link}
      style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
    >
      <div
        className="d-flex flex-column h-100"
        style={{
          cursor: "pointer",
          borderRadius: "16px",
          border: "1px solid #eaeaea",
          background: "#fff",
          padding: "12px",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
          e.currentTarget.style.transform = "translateY(-4px)";
          const arrow = e.currentTarget.querySelector(".bc-arrow");
          if(arrow) arrow.style.color = "#111";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.02)";
          e.currentTarget.style.transform = "translateY(0px)";
          const arrow = e.currentTarget.querySelector(".bc-arrow");
          if(arrow) arrow.style.color = "#999";
        }}
      >
        {/* Image Container */}
        <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "10px", overflow: "hidden", marginBottom: "16px" }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Card Body */}
        <div className="d-flex flex-column flex-grow-1 px-1">
          {/* Top Meta: Author and Date */}
          <div style={{ fontSize: "11px", color: "#888", fontWeight: "600", marginBottom: "10px" }}>
            {author} &bull; {date}
          </div>

          {/* Title row with Arrow */}
          <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
            <h3
              className="fw-bold m-0"
              style={{ fontSize: "1.15rem", lineHeight: "1.35", color: "#111" }}
            >
              {title}
            </h3>
            <span 
              className="bc-arrow"
              style={{ 
                fontSize: "1rem", 
                color: "#999", 
                marginTop: "2px", 
                lineHeight: "1",
                transition: "color 0.2s ease" 
              }}
            >
              ↗
            </span>
          </div>

          {/* Description */}
          <p 
            style={{ 
              fontSize: "13.5px", 
              color: "#666", 
              lineHeight: "1.5", 
              marginBottom: "16px",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="mt-auto">
            {tags && tags.length > 0 && (
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#111",
                  color: "#fff",
                  fontSize: "10.5px",
                  fontWeight: "700",
                  padding: "4px 12px",
                  borderRadius: "5px",
                  letterSpacing: "0.2px"
                }}
              >
                {tags[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
