'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ResumeImportance.module.css';
import { Check, Users, Linkedin, LayoutGrid, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const scrollToResumeRegister = () => {
    document
        .getElementById("resume-register")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ResumeImportance = () => {
    const headingRef = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
        if (!headingRef.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTitleVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(headingRef.current);
        return () => observer.disconnect();
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2 
                        ref={headingRef}
                        className={`${styles.sectionTitle} ${titleVisible ? styles.titleSweep : ''}`}
                    >
                        Importance of Resume Building
                    </h2>
                    <p className={styles.sectionDesc}>
                        Why Resume Building Matters: A professional resume is your first impression. Our Resume Building program helps you craft a high-impact profile that highlights your skills, experience, and achievements to land your dream job.
                    </p>
                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.getStartedBtn}
                        onClick={scrollToResumeRegister}
                    >
                        Get Started  <ArrowRight size={20} />
                    </motion.button>
                </motion.div>

                {/* Stats Bar */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.statsBar}
                >
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>Placement success rate</div>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>2x</div>
                        <div className={styles.statLabel}>More interview callbacks</div>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>5k+</div>
                        <div className={styles.statLabel}>Resumes built & refined</div>
                    </div>
                </motion.div>

                {/* Grid Section */}
                <div className={styles.topGrid}>
                    {/* Card 01 - Skill Optimization */}
                    <motion.div 
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className={styles.card01}
                    >
                        <div className={styles.cardNumber}>01 — SKILL OPTIMIZATION</div>
                        <h3 className={styles.cardTitle}>Identify & Showcase In-Demand Skills</h3>
                        <p className={styles.cardDesc}>
                            We tailor your skills section to match specific job descriptions, ensuring recruiters see exactly what they're looking for at first glance.
                        </p>
                        <div className={styles.tagCloud}>
                            <span className={styles.tag}>Java</span>
                            <span className={styles.tag}>Web Dev</span>
                            <span className={styles.tag}>Cloud</span>
                            <span className={styles.tag}>Data Science</span>
                            <span className={styles.tag}>DevOps</span>
                        </div>
                        <div className={styles.metrics}>
                            <div className={styles.metricItem}>
                                <div className={styles.metricHeader}>
                                    <span>ATS Match Score</span>
                                    <span>92%</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '92%' }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className={styles.progressFill}
                                    ></motion.div>
                                </div>
                            </div>
                            <div className={styles.metricItem}>
                                <div className={styles.metricHeader}>
                                    <span>Keyword Density</span>
                                    <span>85%</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        transition={{ duration: 1, delay: 0.7 }}
                                        className={styles.progressFill}
                                    ></motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 02 - Experience */}
                    <motion.div 
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className={styles.smallCard}
                    >
                        <div className={styles.cardNumber}>02 — EXPERIENCE</div>
                        <div className={styles.iconCircle}>
                            <CheckCircle2 className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>Quantify Your Achievements</h3>
                        <p className={styles.cardDesc}>
                            Learn to write results-driven bullet points that show recruiters the tangible value you bring.
                        </p>
                    </motion.div>

                    {/* Card 03 - Projects */}
                    <motion.div 
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className={styles.smallCard}
                    >
                        <div className={styles.cardNumber}>03 — PROJECTS</div>
                        <div className={styles.iconCircle}>
                            <LayoutGrid className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>Real-World Project Showcase</h3>
                        <p className={styles.cardDesc}>
                            Present your portfolio and hands-on work to demonstrate problem-solving capabilities.
                        </p>
                    </motion.div>
                </div>

                <div className={styles.bottomGrid}>
                    {/* Card 04 - Audit & Review (Dark) */}
                    <motion.div 
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className={styles.darkCard}
                    >
                        <div className={styles.cardNumberDark}>04 — AUDIT & REVIEW</div>
                        <h3 className={styles.cardTitleWhite}>Expert Resume Feedback</h3>
                        <ul className={styles.checkList}>
                            <li><Check size={18} className={styles.checkIcon} /> Line-by-line content review</li>
                            <li><Check size={18} className={styles.checkIcon} /> ATS compatibility check</li>
                            <li><Check size={18} className={styles.checkIcon} /> Formatting & design audit</li>
                            <li><Check size={18} className={styles.checkIcon} /> Industry-specific suggestions</li>
                        </ul>
                    </motion.div>

                    {/* Card 05 - LinkedIn Profile */}
                    <motion.div 
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className={styles.smallCard}
                    >
                        <div className={styles.cardNumber}>05 — LINKEDIN PROFILE</div>
                        <div className={styles.iconCircle}>
                            <Linkedin className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>LinkedIn Optimization</h3>
                        <p className={styles.cardDesc}>
                            Sync your resume story with a powerful LinkedIn presence that attracts recruiters organically.
                        </p>
                    </motion.div>

                    {/* Card 06 - Coaching (Greenish) */}
                    <motion.div 
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className={styles.greenCard}
                    >
                        <div className={styles.cardNumber}>06 — COACHING</div>
                        <div className={styles.iconCircle}>
                            <Users className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>1-on-1 Career Coaching</h3>
                        <p className={styles.cardDesc}>
                            Personalized sessions with industry experts to sharpen your career narrative and interview story.
                        </p>
                    </motion.div>
                </div>

                {/* Footer Banner */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.footerBanner}
                >
                    <div className={styles.bannerContent}>
                        <h2 className={styles.bannerTitle}>
                            Ready to build your <br />
                            <span className={styles.bannerOutlineText}>dream resume?</span>
                        </h2>
                        <p className={styles.bannerSubtitle}>Join 5,000+ students who landed their dream job with Jobzenter</p>
                    </div>
                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#111827' }}
                        className={styles.startFreeBtn}
                        onClick={scrollToResumeRegister}
                    >
                        Enroll Now <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeImportance;
