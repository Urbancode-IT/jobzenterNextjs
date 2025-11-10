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

import styles from "./KeyTakeaways.module.css"; // 👈 CSS module import

const takeaways = [
  {
    icon: faCoffee,
    title: "Core Java Mastery",
    text: "Mastering Java’s core concepts will help you build a strong foundation for developing efficient, scalable applications.",
  },
  {
    icon: faKey,
    title: "Key usage of OOP",
    text: "Understanding OOP principles is crucial for writing clean, reusable code that simplifies development and maintenance.",
  },
  {
    icon: faLayerGroup,
    title: "Framework Proficiency",
    text: "Learning popular Java frameworks like Spring and Hibernate will enable you to build dynamic, high-performance web applications.",
  },
  {
    icon: faHandshake,
    title: "Career Certification Support",
    text: "Certifications will boost your credibility, positioning you as a skilled Java developer in the job market.",
  },
  {
    icon: faPeopleGroup,
    title: "Real-World Project Experience",
    text: "Hands-on projects will give you practical experience and prepare you to tackle complex coding challenges confidently.",
  },
  {
    icon: faChartSimple,
    title: "Performance Evaluation and Feedback",
    text: "Using feedback and evaluation, you’ll improve your coding skills, making your applications more efficient and reliable.",
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
