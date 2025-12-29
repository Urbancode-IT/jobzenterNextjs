"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPost = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>

      {/* Breadcrumb */}
      <p className="text-muted" style={{ fontSize: "14px" }}>
        <span className="text-warning fw-semibold">
          <a href="/">Home</a>
        </span>{" "}
        / <a href="/blogs">Blogs</a> / Full Stack Development 2025
      </p>

      {/* Title */}
      <h2 className="fw-bold mb-3">
        Full Stack Development – Trends to Watch in 2025
      </h2>

      {/* Meta Info */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="badge bg-light text-dark px-3 py-2">
          Web Development
        </span>
        <span className="text-muted" style={{ fontSize: "14px" }}>
          1 min read
        </span>
      </div>

      {/* Single Hero Image */}
      <div
        className="mb-4"
        style={{ width: "100%", height: "400px", position: "relative" }}
      >
        <Image
          src="/blogs/fullstack.jpg"
          alt="Full Stack Development Trends 2025"
          fill
          className="rounded"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Blog Content */}
      <div className="text-muted" style={{ lineHeight: "1.8", fontSize: "16px" }}>

        <p>
          Full stack development continues to dominate the technology landscape
          in 2025 as businesses demand scalable, high-performance, and
          user-centric digital solutions. Developers are expected to work
          seamlessly across frontend and backend while understanding modern
          architectures and APIs.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">
          MEVN/MERN Stack – The Backbone of Modern Applications
        </h5>

        <p>
          The MEVN stack (MongoDB, Express.js, Vue.js, Node.js) and MERN stack
          (MongoDB, Express.js, React.js, Node.js) remain industry favorites.
          Their JavaScript-centric ecosystem enables faster development,
          seamless data flow, and high scalability.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">
          Microservices Architecture for Scalable Systems
        </h5>

        <p>
          Microservices architecture enables applications to be broken into
          independent services that can be developed and deployed separately.
          This approach improves fault isolation and aligns perfectly with
          cloud-native platforms.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">
          Progressive Web Apps for Enhanced User Experience
        </h5>

        <p>
          Progressive Web Apps (PWAs) deliver fast, app-like experiences directly
          through the browser. With offline access, push notifications, and
          better SEO, PWAs are a major trend in 2025.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">
          API Development & GraphQL – The Future of Data Handling
        </h5>

        <p>
          APIs form the backbone of modern applications. REST APIs remain widely
          used, while GraphQL is gaining popularity for its efficiency in data
          fetching and frontend-backend collaboration.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">Conclusion</h5>

        <p>
          Full stack development in 2025 is driven by modern stacks, scalable
          architectures, and performance-focused design. Mastering MERN/MEVN,
          microservices, PWAs, API development, and GraphQL will future-proof
          your career and unlock global opportunities.
        </p>
      </div>

      {/* Share Section */}
      <div className="mt-4 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3 mt-5">
          <span className="fw-semibold">Share this</span>
          <i className="bi bi-facebook fs-5"></i>
          <i className="bi bi-instagram fs-5"></i>
          <i className="bi bi-twitter fs-5"></i>
        </div>

        <div className="mt-5">
          <span className="badge bg-light text-dark px-4 py-2">
            Full Stack Development
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
