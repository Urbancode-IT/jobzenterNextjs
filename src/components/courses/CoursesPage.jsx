"use client";

import { useState } from "react";
import "./coursePage.css"; // adjust path based on where you place the CSS
import courses from "./coursesData";
import Link from "next/link";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "Testing", "Healthcare"];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div>

      {/* Hero Section */}
      <div
        className="text-center text-white py-5 position-relative mb-5"
        style={{
          backgroundImage: "url('/courses/Hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "320px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="position-relative">
          <h1 className="display-4 fw-bold mt-5">Courses</h1>
          <p className="lead">Exploring paths to learn, grow, and achieve more.</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="text-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn m-md-3 btn-cat py-md-2 px-md-4 ${selectedCategory === cat ? "btn-dark" : "btn-outline-dark"
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="container pb-5 mb-5">
        <div className="row g-5 mt-md-3 mt-1">
          {filteredCourses.map((course) => (
            <div className="col-md-4" key={course.id}>
              <Link href={`/courses/${course.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card course-card h-100 shadow-sm border-0 p-3" style={{ cursor: 'pointer' }}>
                  <div className="circle"></div>
                  <img
                    src={course.img}
                    className="card-img-top course-image"
                    alt={course.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{course.title}</h5>
                    <p className="card-text text-muted">{course.description}</p>
                    <div className="mt-auto">
                      <div className="text-warning mb-2">{"★".repeat(5)}</div>
                      <div className="btn btn-dark w-100 view-details-btn">
                        View Details →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CoursesPage;
