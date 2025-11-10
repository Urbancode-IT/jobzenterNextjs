'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faKey,
  faLayerGroup,
  faHandshake,
  faPeopleGroup,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./InterviewKey.module.css"; // 👈 CSS module import

const takeaways = [
  {
    icon: faCoffee,
    title: "Interview Technique Mastery",
    text: "Master essential interview strategies to confidently present your skills and experience, leaving a lasting impression on recruiters.",
  },
  {
    icon: faKey,
    title: "Effective Communication Skills",
    text: "Learn how to communicate your thoughts clearly and professionally, ensuring you're understood and appreciated in every interview.",
  },
  {
    icon: faLayerGroup,
    title: "Confidence Building for Interviews",
    text: "Develop self-assurance through mock interviews and expert feedback, helping you stay calm and perform well under pressure.",
  },
  {
    icon: faHandshake,
    title: "Resume and Portfolio Enhancement",
    text: "Get expert guidance on refining your resume and building a compelling portfolio to make you stand out among applicants.",
  },
  {
    icon: faPeopleGroup,
    title: "Real-World Scenario Practice",
    text: "Engage in real-world mock interview sessions that simulate industry-specific challenges, preparing you for what to expect.",
  },
  {
    icon: faChartSimple,
    title: "Personalized Feedback and Improvement",
    text: "Receive constructive feedback on your interview skills, allowing you to improve continuously and perform at your best.",
  },
];

const KeyTakeaways = () => {
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

export default KeyTakeaways;
