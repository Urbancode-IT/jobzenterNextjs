// src/components/RecentBlogs.jsx
import React from "react";
import { recentBlogs  } from "./blogsData";
import { FiArrowUpRight } from "react-icons/fi";
import "./recentBlogs.css";

const RecentBlogs = () => {
  return (
    <section className="container py-5">
      <h4 className="fw-bold mb-4">Recent Blogs</h4>

      <div className="row g-5">

        {/* Left Main Highlight Blog */}
        <div className="col-lg-6">
          {recentBlogs.slice(0, 1).map((blog) => (
            <div key={blog.title}>
              <img
                src={blog.image}
                className="img-fluid rounded mb-3"
                style={{ objectFit: "cover", maxHeight:"450px", width: "100%" }}
                alt={blog.title}
              />

              <p className="text-secondary border-bottom">{blog.date}</p>

              <h3 className="fw-semibold d-flex align-items-center gap-2 blog-title" ><a href={blog.link} >
                {blog.title} <FiArrowUpRight /></a>
              </h3>

              <p className="text-secondary">{blog.description}</p>
              <span className="badge bg-dark">{blog.tags}</span>
            </div>
          ))}
        </div>

        {/* Right side small recentBlogs */}
        <div className="col-lg-6">
          <div className="row flex-column gap-4">

          {recentBlogs.slice(1, 3).map((blog) => (
            <div key={blog.title} className="col-md-12 d-md-flex  d-sm-block gap-3">
              <img
                src={blog.image}
                className="rounded w-sm-100 w-md-50"
                style={{ objectFit: "cover",maxHeight:"300px", width: "100%" }}
                alt={blog.title}
              />
              <div>
                <p className="text-secondary mb-1  border-bottom">{blog.date}</p>
                <h3 className="fw-semibold blog-title"><a href={blog.link} className="blog-title">{blog.title}</a></h3>
                <p className="text-secondary small">{blog.description}</p>
                <span className="badge bg-dark small">{blog.tags}</span>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom full width blog */}
        <div className="col-12 ">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={recentBlogs[3].image}
            className="img-fluid rounded"
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            alt={recentBlogs[3].title}
          />
          </div>
          <div className="col-md-6">
          <div>
            <p className="text-secondary  border-bottom">{recentBlogs[3].date}</p>
            <h3 className="fw-semibold d-flex align-items-center gap-3">
              <a href={recentBlogs[3].link}>{recentBlogs[3].title} <FiArrowUpRight /></a>
            </h3>
            <p className="text-secondary">{recentBlogs[3].description}</p>
            <span className="badge bg-dark">{recentBlogs[3].tags}</span>
          </div>
          </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RecentBlogs;
