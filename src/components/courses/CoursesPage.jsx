"use client";

import { useState } from "react";
import "./coursePage.css";
import courses from "./coursesData";
import Link from "next/link";
import { motion } from "framer-motion";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "Testing", "Healthcare", "CCNA", "Cloud"];

  const filteredCourses = courses.filter((course) => {
    if (selectedCategory === "All") return true;
    return course.category === selectedCategory;
  });

  return (
    <div>

      {/* Hero Section */}
      <div
        className="text-center text-white py-5 position-relative mb-5"
        style={{
          height: "400px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "50px",
          overflow: "hidden"
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/courses/Hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2)",
            zIndex: 0
          }}
        ></div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", zIndex: 1 }}
        ></div>
        <div className="position-relative" style={{ zIndex: 2 }}>
          <h1
            className="display-4 fw-bold text-white"
            style={{ textShadow: "2px 2px 15px rgba(0,0,0,0.9)", fontSize: "3.8rem", marginBottom: "8px" }}
          >
            Explore Courses
          </h1>
          <p className="lead text-white px-3" style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9)", fontSize: "1.4rem", fontWeight: "600" }}>Exploring paths to learn, grow, and achieve more.</p>
        </div>
      </div>

      {/* Core Programs Section (Replaces Why Choose Us) */}
      <section className="programs-section">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="programs-header"
            >
              Our Core <span className="programs-title-accent">Specializations</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="programs-subtitle"
            >
              Industry-aligned training programs designed to transform you into a high-performance tech professional with hands-on expertise.
            </motion.p>
          </div>

          <div className="row g-4">
            {[
              {
                tag: "End-to-End",
                title: "Full Stack Development",
                desc: "Master versatile development across .NET, MERN, MEAN, React Native, Java, and Python ecosystems.",
                icon: "bi bi-layers",
                delay: 0.2
              },
              {
                tag: "Quality Assurance",
                title: "Software Testing",
                desc: "Build reliable software with Selenium, Playwright, and API Testing for modern Agile environments.",
                icon: "bi bi-shield-check",
                delay: 0.3
              },
              {
                tag: "Infrastructure",
                title: "CCNA Networking",
                desc: "Design, configure, and troubleshoot modern enterprise networks with routing and security expertise.",
                icon: "bi bi-diagram-3",
                delay: 0.4
              },
              {
                tag: "Automation",
                title: "AWS DevOps",
                desc: "Scale cloud architectures and automate delivery pipelines using AWS, Docker, and CI/CD tools.",
                icon: "bi bi-cloud-arrow-up",
                delay: 0.5
              }
            ].map((program, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: program.delay }}
                  viewport={{ once: true }}
                  className="program-feature-card"
                >
                  <div className="program-tag">{program.tag}</div>
                  <div className="program-icon-box">
                    <i className={program.icon}></i>
                  </div>
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-desc">{program.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="text-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn m-md-3 btn-cat py-md-2 px-md-4 ${
              selectedCategory === cat ? "btn-active" : "btn-outline-dark"
            }`}
            onClick={() => setSelectedCategory(cat)}
            style={{ borderRadius: "20px", padding: "8px 25px" }}
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