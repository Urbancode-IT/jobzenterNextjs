'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./TopRatedCourse.css";
import { IoArrowForward, IoChevronBack, IoChevronForward, IoPeople } from "react-icons/io5";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiMysql, SiSpringboot, SiCisco, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TopRatedCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 6,
      title: "Automation Testing",
      enrollment: "3.2k+",
      description: "Build Selenium and framework skills for reliable regression suites and faster releases.",
      img: "/courses/Automation.webp",
      slug: "automation-testing",
      icons: [
        <span key="j" className="tech-icon-pill"><FaJava style={{ color: '#5382a1' }} aria-hidden /></span>,
        <span key="s" className="tech-icon-pill"><SiSpringboot style={{ color: '#6DB33F' }} aria-hidden /></span>,
      ]
    },
    {
      id: 1,
      title: "MERN Stack",
      enrollment: "2k+",
      description: "MERN Stack is a powerful full-stack JavaScript technology for building modern web applications.",
      img: "/courses/mern.webp",
      slug: "mern-stack-development",
      icons: [
        <span key="m" className="tech-icon-pill"><SiMongodb style={{ color: '#47A248' }} aria-hidden /></span>,
        <span key="e" className="tech-icon-pill"><SiExpress style={{ color: '#1a1a1a' }} aria-hidden /></span>,
        <span key="r" className="tech-icon-pill"><SiReact style={{ color: '#61DAFB' }} aria-hidden /></span>,
        <span key="n" className="tech-icon-pill"><SiNodedotjs style={{ color: '#339933' }} aria-hidden /></span>,
      ]
    },
    {
      id: 2,
      title: "AWS Cloud",
      enrollment: "3.5k+",
      description: "AWS is a cloud platform that provides scalable computing, storage, and services to build and deploy applications.",
      img: "/courses/aws.webp",
      slug: "aws",
      logoSrc: "/courses/aws-logo.png",
    },
    {
      id: 3,
      title: "Fullstack Development",
      enrollment: "4.2k+",
      description: "Full Stack Development covers both frontend and backend to build complete, scalable web applications.",
      img: "/courses/javaFullstack.webp",
      slug: "java-fullstack-development",
      icons: [
        <span key="j" className="tech-icon-pill"><FaJava style={{ color: '#5382a1' }} aria-hidden /></span>,
        <span key="s" className="tech-icon-pill"><SiSpringboot style={{ color: '#6DB33F' }} aria-hidden /></span>,
        <span key="my" className="tech-icon-pill"><SiMysql style={{ color: '#4479A1' }} aria-hidden /></span>,
      ]
    },
    {
      id: 4,
      title: "Python Development",
      enrollment: "2.8k+",
      description: "Learn Python for data science, web development, and automation with hands-on projects.",
      img: "/courses/python.jpg",
      slug: "python-fullstack-development",
      icons: [
        <span key="p" className="tech-icon-pill"><SiPython style={{ color: '#3776AB' }} aria-hidden /></span>,
      ]
    },
    {
      id: 5,
      title: "Cisco Networking",
      enrollment: "1.5k+",
      description: "Master networking essentials and prepare for CCNA certification with Cisco technologies.",
      img: "/courses/ccna.webp",
      slug: "ccna",
      icons: [
        <span key="c" className="tech-icon-pill"><SiCisco style={{ color: '#1BA0D7' }} aria-hidden /></span>,
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (width < 768) {
        setCardsPerPage(1);
      } else if (width < 1200) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(courses.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const visibleCourses = courses.slice(startIndex, startIndex + cardsPerPage);
  const courseColClass =
    cardsPerPage === 1 ? "col-lg-12" : cardsPerPage === 2 ? "col-lg-6" : "col-lg-4";

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(totalPages - 1);
    }
  };

  return (
    <section className="trending-section">
      <div className="container">
        <div className="trending-header text-center">
          <h2
            ref={titleRef}
            className={`trending-title ${titleVisible ? "title-sweep" : ""}`}
          >
            Trending Courses
          </h2>
          <p className="trending-subtitle">
            Explore the most trusted and highly reviewed courses loved by learners.
          </p>
        </div>

        <div className="row g-4 justify-content-center mt-4">
          {visibleCourses.map((course) => (
            <div key={course.id} className={`${courseColClass} col-md-6 d-flex justify-content-center`}>
              <Link href={`/courses/${course.slug}`} className="course-card-link w-100">
                <div
                  className="modern-course-card"
                  style={{
                    backgroundImage: `url(${course.img})`,
                    "--course-bg": `url(${course.img})`,
                  }}
                >
                  <div className="modern-course-overlay"></div>
                  <div className="glass-detail-box">
                    <div className="glass-header">
                      <span className="enrollment-badge">
                        <IoPeople className="enrollment-icon" aria-hidden="true" /> {course.enrollment}
                      </span>
                    </div>
                    <div className="glass-body">
                      <div className="tech-icons">
                        {course.logoSrc ? (
                          <span className="tech-icon-pill tech-icon-pill--logo">
                            <img
                              src={course.logoSrc}
                              alt={`${course.title} logo`}
                              className="tech-logo-img"
                            />
                          </span>
                        ) : (
                          course.icons
                        )}
                      </div>
                      <h4 className="course-title">{course.title}</h4>
                      <p className="course-description">{course.description}</p>
                    </div>
                    <div className="glass-footer">
                      <div className="card-arrow-btn">
                        <IoArrowForward />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="trending-controls-row mt-5">
          <button className="nav-circle-btn prev" onClick={handlePrevious} aria-label="Previous Page">
            <IoChevronBack />
          </button>

          <div className="indicator-group px-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`indicator-line ${index === currentPage ? "active" : ""}`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>

          <button className="nav-circle-btn next" onClick={handleNext} aria-label="Next Page">
            <IoChevronForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopRatedCourses;