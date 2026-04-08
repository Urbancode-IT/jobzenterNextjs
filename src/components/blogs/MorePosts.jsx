"use client";
import React from "react";
import Image from "next/image";
import { recentBlogs } from "./blogsData";

const MorePostsCard = ({ image, date, title, description, tags, link, author = "Admin" }) => {
  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div 
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          transition: "opacity 0.2s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.85";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        {/* Image Container */}
        <div style={{ position: "relative", width: "100%", height: "220px", borderRadius: "14px", overflow: "hidden" }}>
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
        
        {/* Card Content Row */}
        <div className="d-flex flex-column gap-2 mt-1">
          {/* Top Meta: Author and Date */}
          <div style={{ fontSize: "12px", color: "#111", fontWeight: "700" }}>
            {author} &bull; {date}
          </div>
          
          {/* Title row with Arrow */}
          <div className="d-flex justify-content-between align-items-start gap-3 mt-1">
            <h3 className="fw-bold m-0" style={{ fontSize: "1.3rem", lineHeight: "1.3", color: "#111" }}>
              {title}
            </h3>
            <span style={{ fontSize: "1.1rem", color: "#333", marginTop: "2px" }}>↗</span>
          </div>

          {/* Description */}
          <p style={{ 
            fontSize: "14.5px", 
            color: "#6b7280", 
            lineHeight: "1.6", 
            margin: "4px 0 0 0",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}>
            {description}
          </p>

          {/* Tags */}
          <div className="mt-3">
            {tags && tags.length > 0 && (
              <span style={{
                display: "inline-block",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "11px",
                fontWeight: "600",
                padding: "5px 14px",
                borderRadius: "30px", /* Fully rounded pill */
                letterSpacing: "0.2px"
              }}>
                {tags[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

const MorePosts = ({ currentPostId }) => {
  // Pick all other recent posts excluding the current one
  const posts = recentBlogs.filter(b => b.id !== currentPostId);
  
  return (
    <div className="container py-5 mt-4 border-top" style={{ maxWidth: "1200px" }}>
      <h2 className="fw-bold mb-4" style={{ fontSize: "1.45rem", color: "#4b5563" }}>
        More Posts
      </h2>
      <style>{`.more-posts-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div 
        className="more-posts-scroll d-flex py-3"
        style={{ 
          overflowX: "auto", 
          flexWrap: "nowrap", 
          gap: "2.5rem",
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
        }}
      >
        {posts.map((post) => (
          <div key={post.id} style={{ width: "350px", minWidth: "350px", flexShrink: 0 }}>
            <MorePostsCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MorePosts;
