'use client';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileLines,
  faKey,
  faChartLine,
  faUserTie,
  faBookOpen,
  faComments,
  faUsers,
  faVideo,
  faBrain,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ResumeKey.module.css";

import { motion } from 'framer-motion';

const takeaways = [
  {
    icon: faComments,
    title: "Master Self-Introduction & Communication",
    text: "Craft a confident and compelling introduction that makes the right first impression. Learn how to express thoughts clearly and maintain positive body language.",
  },
  {
    icon: faFileLines,
    title: "Complete Interview Readiness",
    text: "Understand commonly asked HR questions and structure effective responses. Strengthen domain fundamentals and practice role-specific technical questions.",
  }, 
  {
    icon: faVideo,
    title: "Real-Time Mock Interviews",
    text: "Master virtual interview tools, camera presence, and remote communication. Experience actual simulations with detailed feedback for improvement.",
  },
  {
    icon: faChartLine,
    title: "Resume & LinkedIn Optimization",
    text: "Build a clean, professional resume and online profile that highlights your strengths and attracts recruiters organically.",
  },
  {
    icon: faBrain,
    title: "Aptitude & Problem-Solving Skills",
    text: "Sharpen analytical thinking, logical reasoning, and quantitative aptitude required for competitive job tests.",
  },
  {
    icon: faSuitcase,
    title: "Professional Etiquette & Grooming",
    text: "Learn interview manners, dress codes, and communication etiquette. Master follow-up strategies post-interview with HR.",
  },
];

const ResumeKey = () => {
  const headingRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    if (headingRef.current) {
      const titleObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      }, { threshold: 0.3 });
      titleObserver.observe(headingRef.current);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.section}>
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${styles.title} ${titleVisible ? styles.titleSweep : ''}`}
      >
        Key Takeaways from Interview Preparation
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className={styles.description}
      >
        Our program is designed to transform your interview performance by focusing on both technical mastery and professional soft skills.
      </motion.p>

      <div className="container">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="row row-cols-1 row-cols-md-2 g-4"
        >
          {takeaways.map((item, index) => (
            <div className="col" key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 10px 40px rgba(244, 234, 23, 0.2)",
                    borderColor: "rgba(244, 234, 23, 0.5)" 
                }}
                className={styles.card}
              >
                <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={styles.iconBox}
                >
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                </motion.div>
                <div className={styles.content}>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <div className={styles.cardText}>{item.text}</div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeKey;