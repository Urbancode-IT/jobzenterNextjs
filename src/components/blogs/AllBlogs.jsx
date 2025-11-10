// src/components/AllBlogs.jsx
'use client';
import BlogCard from "./BlogCard";
import { recentBlogs } from "./blogsData";

const AllBlogs = () => {
  return (
    <section className="container py-5">
      <h4 className="fw-bold mb-4">All Blogs</h4>

      <div className="row g-4">
        {recentBlogs.map((blog, i) => (
          <div className="col-md-4" key={i}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className="page-item active"><button className="page-link">1</button></li>
            <li className="page-item"><button className="page-link">2</button></li>
            <li className="page-item"><button className="page-link">3</button></li>
          </ul>
        </nav>
      </div> */}
    </section>
  );
};

export default AllBlogs;
