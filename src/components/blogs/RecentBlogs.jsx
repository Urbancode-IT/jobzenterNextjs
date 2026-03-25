// src/components/RecentBlogs.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { recentBlogs } from "./blogsData";
import { FiArrowUpRight } from "react-icons/fi";
import "./recentBlogs.css";

const useAnimateOnScroll = (delay = 0) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
};

const animStyle = (visible, delay = 0, direction = "up") => ({
  opacity: visible ? 1 : 0,
  transform: visible
    ? "translate(0, 0)"
    : direction === "left"
    ? "translateX(-40px)"
    : direction === "right"
    ? "translateX(40px)"
    : "translateY(40px)",
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

const RecentBlogs = () => {
  const mainBlog = useAnimateOnScroll(0);
  const smallBlog1 = useAnimateOnScroll(150);
  const smallBlog2 = useAnimateOnScroll(300);
  const bottomBlog = useAnimateOnScroll(100);

  return (
    <section className="container py-5">
      <h4 className="fw-bold mb-4">Recent Blogs</h4>

      <div className="row g-5">

        {/* Left Main Highlight Blog */}
        <div className="col-lg-6">
          {recentBlogs.slice(0, 1).map((blog) => (
            <div
              key={blog.id}
              ref={mainBlog.ref}
              className="d-flex flex-column"
              style={animStyle(mainBlog.visible, 0, "left")}
            >
              <div className="mb-3 blog-img-wrap">
                <img
                  src={blog.image}
                  className="img-fluid rounded w-100 blog-main-img"
                  style={{ objectFit: "cover", height: "380px" }}
                  alt={blog.title}
                />
              </div>

              <p className="text-secondary border-bottom pb-2 mb-2" style={{ fontSize: "14px" }}>{blog.date}</p>

              <h3 className="fw-bold d-flex align-items-center gap-2 blog-title mb-3" style={{ fontSize: "28px" }}>
                <a href={blog.link} className="text-dark text-decoration-none">
                  {blog.title} <FiArrowUpRight />
                </a>
              </h3>

              <p className="text-secondary mb-4">{blog.description}</p>
              <div>
                <span className="badge bg-dark px-3 py-2" style={{ borderRadius: "6px" }}>{blog.tags.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side small blogs */}
        <div className="col-lg-6">
          <div className="d-flex flex-column gap-4">
            {recentBlogs.slice(1, 3).map((blog, i) => {
              const anim = i === 0 ? smallBlog1 : smallBlog2;
              return (
                <div
                  key={blog.id}
                  ref={anim.ref}
                  className="blog-card-horizontal d-md-flex d-sm-block gap-3 align-items-stretch"
                  style={animStyle(anim.visible, 0, "right")}
                >
                  <div className="blog-card-img-wrap blog-img-wrap" style={{ flex: "0 0 50%", maxWidth: "50%" }}>
                    <img
                      src={blog.image}
                      className="rounded w-100 h-100 blog-small-img"
                      style={{ objectFit: "cover", minHeight: "180px" }}
                      alt={blog.title}
                    />
                  </div>
                  <div className="blog-card-content-wrap py-2 d-flex flex-column justify-content-between">
                    <div>
                      <p className="text-secondary mb-2 border-bottom pb-1" style={{ fontSize: "13px" }}>{blog.date}</p>
                      <h3 className="fw-bold blog-title mb-2" style={{ fontSize: "20px", lineHeight: "1.3" }}>
                        <a href={blog.link} className="text-dark text-decoration-none">{blog.title}</a>
                      </h3>
                      <p className="text-secondary small mb-3">{blog.description}</p>
                    </div>
                    <div>
                      <span className="badge bg-dark small px-3 py-2" style={{ borderRadius: "6px" }}>{blog.tags.join(", ")}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom full width blog */}
        {recentBlogs.length > 3 && (
          <div className="col-12">
            <div
              className="row"
              ref={bottomBlog.ref}
              style={animStyle(bottomBlog.visible, 0, "up")}
            >
              <div className="col-md-6 mb-3 mb-md-0 blog-img-wrap">
                <img
                  src={recentBlogs[3].image}
                  className="img-fluid rounded blog-bottom-img"
                  style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
                  alt={recentBlogs[3].title}
                />
              </div>
              <div className="col-md-6">
                <div>
                  <p className="text-secondary border-bottom">{recentBlogs[3].date}</p>
                  <h3 className="fw-semibold d-flex align-items-center gap-3">
                    <a href={recentBlogs[3].link}>{recentBlogs[3].title} <FiArrowUpRight /></a>
                  </h3>
                  <p className="text-secondary">{recentBlogs[3].description}</p>
                  <span className="badge bg-dark">{recentBlogs[3].tags.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RecentBlogs;

