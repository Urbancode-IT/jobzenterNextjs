'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFileLines,       // Resume icon
  faKey,             // Key icon (unchanged)
  faChartLine,       // ATS Optimization
  faUserTie,         // Resume Guidance
  faBookOpen,        // Career Summary
  faComments, 
} from "@fortawesome/free-solid-svg-icons";

import styles from "./ResumeKey.module.css"; // 👈 CSS module import

const takeaways = [
  {
    icon: faFileLines,
    title: "Resume Structure Mastery",
    text: "Learn how to organize and format your resume to create a professional and impactful document that catches the recruiter’s attention.",
  },
  {
    icon: faKey,
    title: "Tailored Content Creation",
    text: "Understanding OOP principles is crucial for writing clean, reusable code that simplifies development and maintenance.",
  }, 
  {
    icon: faChartLine,
    title: "ATS Optimization Techniquesy",
    text: "Master the techniques to optimize your resume for Applicant Tracking Systems (ATS) to ensure it passes initial screening and get noticed",
  },
  {
    icon: faUserTie,
    title: "Resume Guidance",
    text: "Get personalized advice for building resumes tailored to specific industries, ensuring your application stands out in competitive fields.",
  },
  {
    icon: faBookOpen,
    title: "Standout Career Summary",
    text: "Develop a powerful career summary that highlights your experience and makes a strong first impression on hiring managers.",
  },
  {
    icon: faComments,
    title: "Professional Feedback and Revisions",
    text: "Receive detailed feedback from experts and make revisions to ensure your resume is polished, professional, and ready to submit.",
  },
];

const ResumeKey = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Key Takeaways</h2>
      <p className={styles.description}>
        Here are the main topics that will be covered in the Java bootcamp
        training. You’ll learn everything from Java basics to advanced
        techniques, ensuring you're well-prepared to build real-world
        applications and advance your career.
      </p>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {takeaways.map((item, index) => (
            <div className="col" key={index}>
              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <div className={styles.cardText}>{item.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeKey;
