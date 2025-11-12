'use client';
import React, { useState, useEffect } from "react";
import "./TopRatedCourse.css";
import EnquiryFormModal from "./enquiryForm/EnquiryFormModal";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const TopRatedCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const courses = [
    {
      id: 1,
      title: "React Native Fullstack",
      category: "Development",
      description:
        "React Native Fullstack development combines React Native for mobile apps with Node.js, Express, and databases like MongoDB or PostgreSQL on the backend.",
      img: "/courses/reactNative.webp",
    },
    {
      id: 2,
      title: "Software Testing",
      category: "Testing",
      description:
        "Software Testing is the process of evaluating software to identify defects and ensure it meets the required quality standards.",
      img: "/courses/softwareTesting.webp",
    },
    {
      id: 3,
      title: "JAVA Fullstack Development",
      category: "Development",
      description:
        "Java Full Stack Development is the process of developing both front-end and back-end web applications using Java technologies.",
      img: "/courses/javaFullstack.webp",
    },
    {
      id: 4,
      title: "MERN Stack Development",
      category: "Development",
      description:
        "MERN Stack Development combines MongoDB, Express, React, and Node.js to build powerful full-stack web applications.",
      img: "/courses/mern.webp",
    },
    {
      id: 5,
      title: "AWS",
      category: "Development",
      description:
        "AWS is a secure cloud platform offering computing power, database storage, and content delivery services on demand.",
      img: "/courses/aws.webp",
    },
    {
      id: 6,
      title: "Business Intelligence",
      category: "Development",
      description:
        "Business Intelligence (BI) transforms raw data into meaningful insights for strategic decisions and performance measurement.",
      img: "/courses/business.webp",
    },
    {
      id: 7,
      title: "Cisco Certified Network Associate",
      category: "Development",
      description:
        "The Cisco Certified Network Associate (CCNA) Certification validates essential networking skills for configuring and troubleshooting networks.",
      img: "/courses/ccna.webp",
    },
    {
      id: 8,
      title: "Medical Billing",
      category: "Healthcare",
      description:
        "Medical Billing involves processing and managing healthcare claims to ensure accurate reimbursement for medical services provided.",
      img: "/courses/medicalBilling.webp",
    },
    {
      id: 9,
      title: "Software Testing",
      category: "Testing",
      description:
        "Software Testing is the process of evaluating software to identify defects and ensure it meets the required quality standards.", 
      img: "/courses/softwareTesting.webp",
    }
  ];

  // Handle responsive cards per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // 1 card on mobile
      } else if (window.innerWidth < 992) {
        setCardsPerPage(2); // 2 cards on tablet
      } else {
        setCardsPerPage(3); // 3 cards on desktop
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(courses.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const visibleCourses = courses.slice(startIndex, startIndex + cardsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  // Reset current page when cardsPerPage changes
  useEffect(() => {
    setCurrentPage(0);
  }, [cardsPerPage]);

  return (
    <section className="top-rated-section d-flex justify-content-center">
      <div className="top-rated-container position-relative">
        <div className="top-rated-header">
          <h2 className="top-rated-title">Top Rated Courses</h2>
          <p className="top-rated-subtitle">
            Explore the most trusted and highly reviewed courses loved by learners.
          </p>
        </div>

        <div className="top-rated-cards d-flex justify-content-center">
          {visibleCourses.map((course) => (
            <div 
              className={`col-${12 / cardsPerPage} col-md-${12 / cardsPerPage}`} 
              key={course.id}
            >
              <div className="card course-card h-100 shadow-sm border-0 p-3">
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
                    <button 
                      className="btn btn-dark w-100" 
                      onClick={() => setSelectedCourse(course)}
                    >
                      Download Brochure
                    </button>
                    {selectedCourse && (
                      <EnquiryFormModal
                        isOpen={!!selectedCourse}
                        onClose={() => setSelectedCourse(null)}
                        courseName={selectedCourse.title}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="top-rated-controls d-flex align-items-center justify-content-center">
          <button
            onClick={handlePrevious}
            disabled={isFirstPage}
            aria-label="previous"
            className="top-rated-control-btn"
          >
            <IoChevronBack/>
          </button>

          <div className="top-rated-dots d-flex align-items-center ">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                className={`top-rated-dot ${index === currentPage ? "active" : ""}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isLastPage}
            aria-label="next"
            className="top-rated-control-btn"
          >
            <IoChevronForward/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopRatedCourses;