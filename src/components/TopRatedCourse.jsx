'use client';
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./TopRatedCourse.css";
import { IoArrowForward, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiAmazonwebservices, SiMysql, SiSpringboot, SiCisco, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TopRatedCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);
  const router = useRouter();

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
      title: "Software Testing",
      enrollment: "3.2k+",
      description: "Learn manual and automated testing to ensure software quality and defect-free delivery.",
      img: "/courses/softwareTesting.webp",
      slug: "software-testing",
      icons: [<FaJava key="j" style={{color: '#007396'}} />, <SiSpringboot key="s" style={{color: '#6DB33F'}} />]
    },
    {
      id: 1,
      title: "MERN Stack",
      enrollment: "2k+",
      description: "MERN Stack is a powerful full-stack JavaScript technology for building modern web applications.",
      img: "/courses/mern.webp",
      slug: "mern-stack-development",
      icons: [<SiMongodb key="m" style={{color: '#47A248'}} />, <SiExpress key="e" style={{color: '#fff'}} />, <SiReact key="r" style={{color: '#61DAFB'}} />, <SiNodedotjs key="n" style={{color: '#339933'}} />]
    },
    {
      id: 2,
      title: "AWS Cloud",
      enrollment: "3.5k+",
      description: "AWS is a cloud platform that provides scalable computing, storage, and services to build and deploy applications.",
      img: "/courses/aws.webp",
      slug: "aws",
      icons: [<SiAmazonwebservices key="a" style={{color: '#FF9900'}} />]
    },
    {
      id: 3,
      title: "Fullstack Development",
      enrollment: "4.2k+",
      description: "Full Stack Development covers both frontend and backend to build complete, scalable web applications.",
      img: "/courses/javaFullstack.webp",
      slug: "java-fullstack-development",
      icons: [<FaJava key="j" style={{color: '#007396'}} />, <SiSpringboot key="s" style={{color: '#6DB33F'}} />, <SiMysql key="my" style={{color: '#4479A1'}} />]
    },
    {
      id: 4,
      title: "Python Development",
      enrollment: "2.8k+",
      description: "Learn Python for data science, web development, and automation with hands-on projects.",
      img: "/courses/python.jpg",
      slug: "python-fullstack-development",
      icons: [<SiPython key="p" style={{color: '#3776AB'}} />]
    },
    {
      id: 5,
      title: "Cisco Networking",
      enrollment: "1.5k+",
      description: "Master networking essentials and prepare for CCNA certification with Cisco technologies.",
      img: "/courses/ccna.webp",
      slug: "ccna",
      icons: [<SiCisco key="c" style={{color: '#1BA0D7'}} />]
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
            <div key={course.id} className={`col-lg-${12/cardsPerPage} col-md-6 d-flex justify-content-center`}>
              <Link href={`/courses/${course.slug}`} className="course-card-link w-100">
                <div className="modern-course-card" style={{ backgroundImage: `url(${course.img})` }}>
                  <div className="modern-course-overlay"></div>
                  <div className="glass-detail-box">
                    <div className="glass-header">
                      <span className="enrollment-badge">
                        <i className="bi bi-people-fill me-1"></i> {course.enrollment}
                      </span>
                    </div>
                    <div className="glass-body">
                      <div className="tech-icons">
                        {course.icons}
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