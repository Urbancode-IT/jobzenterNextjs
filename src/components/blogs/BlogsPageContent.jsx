"use client";
import React, { useState } from "react";
import RecentBlogs from "./RecentBlogs";
import AllBlogs from "./AllBlogs";
import "./recentBlogs.css";

const BlogsPageContent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* ── Hero Section ── */}
      <div
        style={{
          height: "320px",
          background: "#000",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            backgroundImage: "url('/blogs/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2)",
          }}
        />
        {/* Dark Overlay */}
        <div
          style={{
            background: "rgba(0,0,0,0.45)",
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
          }}
        />

        {/* Our Blogs pill */}
        <div
          className="z-1"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#ffffff",
            borderRadius: "30px",
            padding: "5px 18px",
            fontSize: "13px",
            fontWeight: "500",
            letterSpacing: "0.5px",
            marginBottom: "14px",
            display: "inline-block",
          }}
        >
          Our Blogs
        </div>

        {/* Main Heading */}
        <h1
          className="fw-bold z-1 text-white"
          style={{
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
            lineHeight: "1.2",
            marginBottom: "10px",
          }}
        >
          Insights and Inspiration,
          <br />
          Explore Our Blogs
        </h1>

        {/* Subtitle */}
        <p
          className="z-1"
          style={{
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(13px, 2vw, 15px)",
            maxWidth: "520px",
            lineHeight: "1.6",
          }}
        >
          Our blogs are written from vast research and skilled writers so we can
          provide you the best articles to read.
        </p>
      </div>

      {/* ── Centered Search Bar (between Hero & Recent Blogs) ── */}
      <div
        style={{
          background: "#f9f9f7",
          padding: "36px 20px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="blog-search-wrapper">
          {/* Search icon */}
          <span className="blog-search-icon">
            <svg
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="#888" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>

          <input
            id="blog-search-input"
            type="text"
            className="blog-search-input"
            placeholder="Search for blogs....."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery ? (
            <button
              className="blog-search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          ) : null}
        </div>

        {/* Live result count */}
        {searchQuery && (
          <p
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "#888",
            }}
          >
            {searchQuery ? `Searching for "${searchQuery}"...` : ""}
          </p>
        )}
      </div>

      {/* ── Recent Blogs -> Hide when searching so results appear immediately ── */}
      {!searchQuery && <RecentBlogs />}

      {/* ── All Blogs (receives searchQuery) ── */}
      <AllBlogs searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </>
  );
};

export default BlogsPageContent;
