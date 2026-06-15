"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "./coursePage.css";
import courses from "./coursesData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CoursesPage = () => {
  const searchParams = useSearchParams();
  const queryCategory = searchParams?.get("category");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSweepActive, setIsSweepActive] = useState(false);

  const categories = ["All", "Development", "Testing", "Healthcare", "CCNA", "Cloud"];

  const categoryLabels = {
    CCNA: "CCNA & Networking",
  };

  useEffect(() => {
    if (queryCategory && categories.includes(queryCategory)) {
      setSelectedCategory(queryCategory);
    } else {
      setSelectedCategory("All");
    }
  }, [queryCategory]);

  const filteredCourses = courses.filter((course) => {
    if (selectedCategory === "All") return true;
    return course.category === selectedCategory;
  });

  return (
    <div>

      {/* Hero Section */}
      <section className="courses-hero" aria-label="Explore courses">
        <div className="courses-hero-media" aria-hidden>
          <Image
            src="/courses/Hero.webp"
            alt="Students learning together at Jobzenter"
            fill
            priority
            sizes="100vw"
            className="courses-hero-image"
          />
          <div className="courses-hero-overlay" />
          <div className="courses-hero-glow" aria-hidden />
        </div>

        <div className="container courses-hero-content">
          <motion.div
            className="courses-hero-panel"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="courses-hero-badge">Industry-Ready Programmes</span>
            <h1 className="courses-hero-title">
              Explore <span className="courses-hero-accent">Courses</span>
            </h1>
            <p className="courses-hero-subtitle">
              Build job-ready skills with expert-led training, live projects, and
              dedicated placement support across development, testing, cloud, and more.
            </p>

            <div className="courses-hero-stats" role="list">
              <div className="courses-hero-stat" role="listitem">
                <strong>25+</strong>
                <span>Specialised courses</span>
              </div>
              <div className="courses-hero-stat-divider" aria-hidden />
              <div className="courses-hero-stat" role="listitem">
                <strong>100%</strong>
                <span>Placement support</span>
              </div>
              <div className="courses-hero-stat-divider" aria-hidden />
              <div className="courses-hero-stat" role="listitem">
                <strong>Expert</strong>
                <span>Industry mentors</span>
              </div>
            </div>

            <div className="courses-hero-actions">
              <button
                type="button"
                className="courses-hero-btn courses-hero-btn-primary"
                onClick={() => {
                  document.getElementById("course-list")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse Programmes
                <i className="bi bi-arrow-down-short" aria-hidden />
              </button>
              <Link href="/reach-us" className="courses-hero-btn courses-hero-btn-outline">
                Get Free Counselling
              </Link>
            </div>

            <div className="courses-hero-chips">
              {categories.filter((cat) => cat !== "All").map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`courses-hero-chip ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    document.getElementById("course-list")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {categoryLabels[cat] ?? cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Programs Section (Replaces Why Choose Us) */}
      <section className="programs-section">
        <div className="container">
          <div className="text-center mb-5 programs-intro">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => setIsSweepActive(true)}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`programs-header ${isSweepActive ? "title-sweep" : ""}`}
            >
              Our Core Specializations
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
                category: "Development",
                delay: 0.2
              },
              {
                tag: "Quality Assurance",
                title: "Software Testing",
                desc: "Java, Selenium, Playwright, and TypeScript—plus manual QA—for confident releases in Agile teams.",
                icon: "bi bi-shield-check",
                category: "Testing",
                delay: 0.3
              },
              {
                tag: "Infrastructure",
                title: "CCNA Networking",
                desc: "Design, configure, and troubleshoot modern enterprise networks with routing and security expertise.",
                icon: "bi bi-diagram-3",
                category: "CCNA",
                delay: 0.4
              },
              {
                tag: "Automation",
                title: "Cloud",
                desc: "Scale cloud architectures and automate delivery pipelines using AWS, Docker, and CI/CD tools.",
                icon: "bi bi-cloud-arrow-up",
                category: "Cloud",
                delay: 0.5
              }
            ].map((program, index) => (
              <div className="col-lg-3 col-md-6" key={program.title}>
                <Link
                  href={`/courses?category=${program.category}#course-list`}
                  className="program-feature-card-link"
                  onClick={() => {
                    setSelectedCategory(program.category);
                    document.getElementById("course-list")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
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
                </Link>
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
            {categoryLabels[cat] ?? cat}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div id="course-list" className="container pb-5 mb-5">
        <div className="row g-5 mt-md-3 mt-1">
          {filteredCourses.map((course) => (
            <div className="col-md-4" key={course.id}>
              <Link href={`/courses/${course.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card course-card h-100 shadow-sm border-0 p-3" style={{ cursor: "pointer" }}>
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
