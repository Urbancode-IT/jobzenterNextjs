"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPost = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      {/* Breadcrumb */}
      <p className="text-muted" style={{ fontSize: "14px" }}>
        <span className="text-warning fw-semibold"><a href="/">Home</a></span> / <a href="/blogs">Blogs</a> / Java Full Stack Development
      </p>

      {/* Title */}
      <h2 className="fw-bold mb-3">
        Java Full Stack Development: Your Gateway to a Future-Proof Career
      </h2>

      {/* Meta Info */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="badge bg-light text-dark px-3 py-2">Development</span>
        <span className="text-muted" style={{ fontSize: "14px" }}>
          a min ago
        </span>
      </div>

      {/* Hero Image */}
      <div className="mb-4" style={{ width: "100%", height: "400px", position: "relative" }}>
        <Image
          src="/blogs/full stack.png"
          alt="Java Full Stack Development"
          fill
          className="rounded"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <div className="text-muted" style={{ lineHeight: "1.8", fontSize: "16px" }}>

        <p>
          In today’s fast-paced digital world, businesses need applications that are powerful, secure, and user-friendly. That is where Java Full Stack Developers shine. From designing beautiful frontends to building scalable backends and managing databases, this skillset is one of the most in-demand in the global IT market.
        </p>

        <p>
          Whether you are a fresher seeking your first IT job or an experienced professional looking to upgrade your skills, mastering Java Full Stack Development in 2025 opens the door to endless opportunities with strong salary and placement potential.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">Why Java Full Stack Development Matters</h5>

        <p>
          Java is not just another programming language. It is a proven technology trusted by global companies such as Google, Amazon, TCS, Infosys, and Flipkart. When combined with frameworks like Spring Boot, Angular or React, and databases such as MySQL or MongoDB, you have a complete development environment for building enterprise-grade applications.
        </p>

        <p>
          A Java Full Stack Developer handles both frontend and backend responsibilities, making you a highly valuable asset to any company.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">Making Your Business Better with Full Stack Development</h5>

        <p>
          Companies benefit greatly from full stack developers because they understand the entire development process end to end. This reduces miscommunication, speeds up development cycles, and minimizes errors.
        </p>

        <p>
          Java full stack developers also help organizations scale applications as the business grows. Their ability to manage both the user interface and the backend systems ensures smooth and powerful software performance.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">The Impact on Your Career</h5>

        <p>
          As a full stack developer, you will have the ability to build complete applications. This increases your value in the job market and often leads to higher salaries and leadership opportunities.
        </p>

        <p>
          Whether you want to work for a startup, a large tech company, or as a freelancer, full stack development provides flexibility and long-term career growth.
        </p>

        <h5 className="fw-semibold mt-4 mb-3">The Dreamy Factors of Full Stack Development</h5>

        <p>
          Full stack development is exciting because it combines creativity, logic, and engineering. You get to design, build, and deploy applications from scratch, which brings ownership and satisfaction.
        </p>

        <p>
          Ready to become a Java Full Stack Developer? Enroll in our Full Stack Development Course and learn how to build complete web applications from the ground up. Start your journey toward a high-growth tech career today.
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

        {/* Footer Tag */}
        <div className="mt-5">
          <span className="badge bg-light text-dark px-4 py-2">Development</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
