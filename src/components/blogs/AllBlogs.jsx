'use client';
import React, { useState, useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import { recentBlogs } from "./blogsData";
import "./recentBlogs.css";

const categories = ["All", "Development", "Testing", "AWS DevOps", "Design"];

const AllBlogs = ({ searchQuery = "", setSearchQuery }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

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

  // Filter logic
  const filteredBlogs = recentBlogs.filter((blog) => {
    // 1. Search Query Filter
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q || (
      blog.title.toLowerCase().includes(q) ||
      blog.description.toLowerCase().includes(q) ||
      blog.tags.some((t) => t.toLowerCase().includes(q)) ||
      blog.date.toLowerCase().includes(q)
    );

    // 2. Category Filter (partial match allows "Development" to match "Full Stack Development")
    const matchesCategory = activeCategory === "All" || 
      blog.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()));

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="container pt-5 pb-5" style={{ marginBottom: "40px" }}>

      {/* Section Heading */}
      <div className="w-100 text-center mb-4 d-flex flex-column align-items-center">
        <div style={{ display: "inline-block" }}>
          <h2
            ref={titleRef}
            className={`all-blogs-heading mb-3 ${titleVisible ? "title-sweep" : ""}`}
          >
            Top Picks
          </h2>
        </div>
        
        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? "#1a1a1a" : "#fff",
                color: activeCategory === cat ? "#fff" : "#444",
                border: `1px solid ${activeCategory === cat ? "#1a1a1a" : "#e5e7eb"}`,
                borderRadius: "6px",
                padding: "6px 16px",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search Result Message */}
      {searchQuery && (
        <div className="mb-4 text-center">
          <p className="text-secondary" style={{ fontSize: "14px" }}>
            {filteredBlogs.length > 0
              ? `Found ${filteredBlogs.length} blog${filteredBlogs.length > 1 ? "s" : ""} for "${searchQuery}"`
              : `No blogs found for "${searchQuery}"`}
          </p>
        </div>
      )}

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="row g-4 mt-2">
          {filteredBlogs.map((blog, i) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <BlogCard {...blog} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <div style={{ fontSize: "50px", marginBottom: "16px" }}>🔍</div>
          <h4 className="fw-semibold text-secondary">No results found</h4>
          <p className="text-secondary" style={{ fontSize: "14px" }}>
            Try another category or search term...
          </p>
          <button
            className="btn btn-dark mt-3 px-4 py-2"
            style={{ borderRadius: "8px", fontWeight: "500" }}
            onClick={() => {
              if (setSearchQuery) setSearchQuery("");
              setActiveCategory("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default AllBlogs;
