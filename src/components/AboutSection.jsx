"use client";
import React from "react";
import "./AboutSection.css";
import Link from "next/link";

const courses = [
  { title: "Full Stack Development", desc: "In the evolving landscape of modern software engineering, full stack developers are the backbone of scalable, high-performance applications. Our Full Stack Development program is designed to transform learners into versatile developers with expertise across frontend, backend, databases, and deployment ecosystems." },
  { title: "Software Testing", desc: "In today’s fast-paced digital ecosystem, delivering high-quality, bug-free applications is no longer optional—it’s a necessity. Our Automation Testing program is designed to equip professionals with industry-relevant skills in Selenium, Playwright, TypeScript, and API Testing, enabling scalable, efficient, and reliable software validation." },
  { title: "CCNA Networking", desc: "In today’s hyper-connected digital world, networking forms the backbone of all IT infrastructures. Our CCNA (Cisco Certified Network Associate) Networking program is designed to equip learners with in-demand skills required to design, configure, manage, and troubleshoot modern enterprise networks." },
  { title: "AWS & Devops", desc: "In the era of cloud-native applications, organizations demand faster, reliable, and scalable software delivery. Our AWS DevOps Training program is designed to equip learners with cutting-edge skills in cloud infrastructure, continuous integration, continuous deployment (CI/CD), and automation using Amazon Web Services." },
];

const AboutSection = () => {
  const [titleVisible, setTitleVisible] = React.useState(false);
  const titleRef = React.useRef(null);

  React.useEffect(() => {
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

  const cardImages = [
    "/courses/mean.jpg",
    "/courses/softwareTesting.webp",
    "/courses/ccna.webp",
    "/courses/aws.webp",
  ];

  const codeByCardIndex = [
    ["pp", "eslintConfig", "pp", "eslintConfig", "app"],
    ["Every great", "pp", "eslintConfig", "app", "pp"],
    ["app", "pp", "eslintConfig", "app", "pp"],
    ["pp", "eslintConfig", "app", "pp", "eslintConfig"],
  ];

  return (
    <section className="about-section about-cards py-5">
      <div className="container">
        <div className="about-demand-panel">
          <div className="about-demand-header text-center">
            <h2
              ref={titleRef}
              className={`about-demand-title ${titleVisible ? "title-sweep" : ""}`}
            >
              Demanding Courses
            </h2>
            <p className="about-demand-subtitle">
              Explore the most demanded and highly reviewed courses loved by
              learners.
            </p>
          </div>

          <div className="about-cards-stage" aria-label="Jobzenter learning tracks">
            {courses.map((course, i) => (
              <Link
                key={course.title}
                href="/courses"
                className={`about-card about-card-${i + 1}`}
                aria-label={`${course.title} course`}
              >
                <div className="about-card-inner">
                  <div className="about-card-text">
                    <div className="about-card-title">{course.title}</div>
                    <p className="about-card-desc">{course.desc}</p>
                  </div>

                  <div className="about-card-media" aria-hidden="true">
                    <img
                      src={cardImages[i]}
                      alt=""
                      className="about-card-img"
                      loading="lazy"
                    />
                    <div className={`about-code-overlay about-code-overlay-${i + 1}`}>
                      {codeByCardIndex[i].map((line, idx) => (
                        <span key={`${line}-${idx}`} className="about-code-line">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
