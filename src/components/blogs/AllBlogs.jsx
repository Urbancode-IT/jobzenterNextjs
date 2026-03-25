// src/components/AllBlogs.jsx
'use client';
import BlogCard from "./BlogCard";
import { recentBlogs } from "./blogsData";
import "./recentBlogs.css";

const AllBlogs = () => {
  return (
    <section className="container py-5">
      <h4 className="fw-bold mb-4">All Blogs</h4>

      <div className="row g-4">
        {recentBlogs.map((blog, i) => (
          <div className="col-md-4" key={i}>
            <BlogCard {...blog} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
