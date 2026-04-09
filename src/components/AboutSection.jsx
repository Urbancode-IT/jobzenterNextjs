"use client";
import React from "react";
import "./AboutSection.css";
import Link from "next/link";

const courses = [
  {
    title: "Full Stack Development",
    desc: "In the evolving landscape of modern software engineering, full stack developers are the backbone of scalable, high-performance applications. Our Full Stack Development program is designed to transform learners into versatile developers with expertise across frontend, backend, databases, and deployment ecosystems.",
  },
  {
    title: "Software Testing",
    desc: "In today's fast-paced digital ecosystem, delivering high-quality, bug-free applications is no longer optional-it's a necessity. Our Automation Testing program is designed to equip professionals with industry-relevant skills in Selenium, Playwright, TypeScript, and API Testing, enabling scalable, efficient, and reliable software validation.",
  },
  {
    title: "CCNA Networking",
    desc: "In today's hyper-connected digital world, networking forms the backbone of all IT infrastructures. Our CCNA (Cisco Certified Network Associate) Networking program is designed to equip learners with in-demand skills required to design, configure, manage, and troubleshoot modern enterprise networks.",
  },
  {
    title: "AWS & Devops",
    desc: "In the era of cloud-native applications, organizations demand faster, reliable, and scalable software delivery. Our AWS DevOps Training program is designed to equip learners with cutting-edge skills in cloud infrastructure, continuous integration, continuous deployment (CI/CD), and automation using Amazon Web Services.",
  },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isTitleVisible, setIsTitleVisible] = React.useState(false);
  const titleRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const cardImages = [
    "/courses/mean.jpg",
    "/courses/softwareTesting.webp",
    "/courses/ccna.webp",
    "/courses/aws.webp",
  ];

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="about-demand-header mb-3">
          <h2
            ref={titleRef}
            className={`about-demand-title ${isTitleVisible ? "title-sweep" : ""}`}
          >
            Demand courses
          </h2>
          <p className="about-demand-subtitle">
            Explore the most trusted and highly reviewed courses loved by learners.
          </p>
        </div>

        <div className="row gx-lg-5 gy-4 align-items-start">
          <div className="col-lg-7">
            <div className="about-course-list">
              {courses.map((course, i) => (
                <Link
                  key={course.title}
                  href="/courses"
                  className={`about-course-item ${activeIndex === i ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  style={{ textDecoration: "none" }}
                >
                  <div className="course-item-content">
                    <h3 className="course-item-title">{course.title}</h3>
                    <p className="course-item-desc">
                      {course.desc.length > 110 ? (
                        <>
                          {course.desc.substring(0, 110)}...
                          <span className="read-more-link ml-1">Read more</span>
                        </>
                      ) : (
                        course.desc
                      )}
                    </p>
                  </div>
                  <div className="course-item-arrow">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-image-sticky">
              <div className="about-image-container animate-fade-in" key={activeIndex}>
                <img
                  src={cardImages[activeIndex]}
                  alt={courses[activeIndex].title}
                  className="about-dynamic-img"
                />
                <div className="about-image-cutout"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
