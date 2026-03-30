'use client';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faClipboardCheck,
  faVideo,
  faFileLines,
  faBrain,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./InterviewKey.module.css"; // 👈 CSS module import

const takeaways = [
  {
    icon: faComments,
    title: "Master the Art of Self-Introduction & develop strong communication skills.",
    text: "Craft a confident and compelling introduction that makes the right first impression. Learn how to express thoughts clearly, speak professionally, and maintain positive body language.",
  },
  {
    icon: faClipboardCheck,
    title: "Complete Interview Readiness",
    text: "Understand commonly asked HR questions and structure effective, impactful responses. Strengthen domain fundamentals and practice role-specific technical questions with expert guidance.",
  },
  {
    icon: faVideo,
    title: "Real-Time Mock Interviews",
    text: "Master virtual interview tools, camera presence, tech setup, and remote communication skills. Experience actual HR and technical interview simulations with detailed feedback for improvement.",
  },
  {
    icon: faFileLines,
    title: "Resume & LinkedIn Optimization",
    text: "Build a clean, professional resume and online profile that highlights your strengths and attracts recruiters.",
  },
  {
    icon: faBrain,
    title: "Aptitude & Problem-Solving Skills",
    text: "Sharpen analytical thinking, logical reasoning, and quantitative aptitude required for many job tests.",
  },
  {
    icon: faUserTie,
    title: "Professional Etiquette & Grooming",
    text: "Learn interview manners, dress codes, communication etiquette, and the do’s & don’ts. Learn how to send thank-you emails, follow up professionally, and maintain communication etiquette post your interview to follow up with the HR.",
  },
];

const KeyTakeaways = () => {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    /* ── Heading sweep observer ── */
    if (headingRef.current) {
      const titleObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      }, { threshold: 0.3 });
      titleObserver.observe(headingRef.current);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, { threshold: 0.2 });

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <h2
        ref={headingRef}
        className={`${styles.title} ${titleVisible ? styles.titleSweep : ''}`}
      >
        Key Takeaways from Jobzenter’s Interview Preparation Program
      </h2>
      <p className={styles.description}>
        From first impressions to follow-ups—build the skills, polish, and
        practice you need to perform confidently in HR, technical, and virtual
        interviews.
      </p>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {takeaways.map((item, index) => (
            <div className="col" key={index}>
              <div
                className={`${styles.card} ${index % 2 === 0 ? styles.cardLeft : styles.cardRight}`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
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
