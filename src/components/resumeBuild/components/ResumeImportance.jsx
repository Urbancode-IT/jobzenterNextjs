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
                            Highlight your impact with numbers and results. Instead of just listing duties, show what you accomplished — like "Improved page load speed by 40%" or "Managed a team of 5." Recruiters respond to measurable outcomes that prove your value beyond the job description.
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
                            Your projects speak louder than certificates. Feature work you've built from scratch — whether it's a web app, a hardware design, or an automation tool. Include the tech stack used, the problem it solves, and any live links or GitHub repos to let recruiters explore your work firsthand.
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
                            Ready to build your <span className={styles.bannerAccent}>dream resume?</span>
                        </h2>
                        <p className={styles.bannerSubtitle}>
                            Join students across India who landed their dream job with Jobzenter's proven resume-building framework.
                        </p>
                        
                        <div className={styles.bannerFooterWrapper}>
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.startFreeBtn}
                                onClick={scrollToResumeRegister}
                            >
                                Enroll Now <ArrowRight size={20} />
                            </motion.button>
                            <span className={styles.bannerFooterLabel}>Free to start . No credit card needed</span>
                        </div>
                    </div>

                    {/* Right Showcase - ATS-style model resume templates */}
                    <div className={styles.bannerShowcase}>
                        <div className={styles.resumeDeck}>
                            {[
                                { name: "Ananya R", role: "Frontend Developer", theme: "classic" },
                                { name: "Rohan K", role: "Data Analyst", theme: "minimal" },
                                { name: "Sofia M", role: "Cloud Engineer", theme: "accent" },
                            ].map((item, idx) => {
                                const cardThemeClass = styles[`resumeCard${item.theme[0].toUpperCase()}${item.theme.slice(1)}`];

                                return (
                                    <div
                                        key={idx}
                                        className={`${styles.resumeCard} ${styles.resumeDeckCard} ${styles[`resumeDeckCard${idx + 1}`]} ${cardThemeClass}`}
                                        aria-label={`${item.name} ATS resume template`}
                                    >
                                        <div className={styles.resumeSheet}>
                                            {item.theme === "classic" && (
                                                <>
                                                    <div className={styles.resumeHeaderBand}></div>
                                                    <div className={styles.resumeTop}>
                                                        <div className={styles.resumeIdentity}>
                                                            <span className={styles.resumeAvatar}></span>
                                                            <div>
                                                                <p className={styles.resumeName}>{item.name}</p>
                                                                <p className={styles.resumeRole}>{item.role}</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.resumeBadge}>ATS</div>
                                                    </div>
                                                    <div className={styles.resumeContactRow}>
                                                        <span></span><span></span><span></span>
                                                    </div>
                                                    <div className={styles.resumeBody}>
                                                        <div className={styles.resumeCol}>
                                                            <div className={styles.resumeSection}>
                                                                <div className={styles.resumeHeading}></div>
                                                                <div className={styles.resumeLine}></div>
                                                                <div className={styles.resumeLineShort}></div>
                                                            </div>
                                                            <div className={styles.resumeSection}>
                                                                <div className={styles.resumeHeading}></div>
                                                                <div className={styles.resumeLine}></div>
                                                                <div className={styles.resumeLineTiny}></div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.resumeDivider}></div>
                                                        <div className={styles.resumeCol}>
                                                            <div className={styles.resumeSection}>
                                                                <div className={styles.resumeHeading}></div>
                                                                <div className={styles.resumeLine}></div>
                                                                <div className={styles.resumeLine}></div>
                                                            </div>
                                                            <div className={styles.resumeSkills}>
                                                                <span>React</span>
                                                                <span>Node</span>
                                                                <span>AWS</span>
                                                                <span>SQL</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {item.theme === "minimal" && (
                                                <>
                                                    <div className={styles.resumeMinimalTop}>
                                                        <div>
                                                            <p className={styles.resumeName}>{item.name}</p>
                                                            <p className={styles.resumeRole}>{item.role}</p>
                                                        </div>
                                                        <div className={styles.resumeBadge}>CV</div>
                                                    </div>
                                                    <div className={styles.minimalAccent}></div>
                                                    <div className={styles.resumeMinimalLayout}>
                                                        <div className={styles.minimalSidebar}>
                                                            <span className={styles.dotShape}></span>
                                                            <span className={styles.squareShape}></span>
                                                            <span className={styles.dotShape}></span>
                                                        </div>
                                                        <div className={styles.minimalMain}>
                                                            <div className={styles.resumeSection}>
                                                                <div className={styles.resumeHeading}></div>
                                                                <div className={styles.resumeLine}></div>
                                                                <div className={styles.resumeLineTiny}></div>
                                                            </div>
                                                            <div className={styles.resumeSection}>
                                                                <div className={styles.resumeHeading}></div>
                                                                <div className={styles.resumeLine}></div>
                                                                <div className={styles.resumeLine}></div>
                                                            </div>
                                                            <div className={styles.resumeSkills}>
                                                                <span>Python</span>
                                                                <span>Tableau</span>
                                                                <span>SQL</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {item.theme === "accent" && (
                                                <>
                                                    <div className={styles.accentTop}>
                                                        <div className={styles.accentBlob}></div>
                                                        <div className={styles.accentTriangle}></div>
                                                    </div>
                                                    <div className={styles.resumeTop}>
                                                        <div>
                                                            <p className={styles.resumeName}>{item.name}</p>
                                                            <p className={styles.resumeRole}>{item.role}</p>
                                                        </div>
                                                        <div className={styles.resumeBadge}>ATS</div>
                                                    </div>
                                                    <div className={styles.resumeSection}>
                                                        <div className={styles.resumeHeading}></div>
                                                        <div className={styles.resumeLine}></div>
                                                        <div className={styles.resumeLineShort}></div>
                                                    </div>
                                                    <div className={styles.resumeGridBlocks}>
                                                        <div className={styles.blockCard}>
                                                            <div className={styles.resumeLineTiny}></div>
                                                            <div className={styles.resumeLineTiny}></div>
                                                        </div>
                                                        <div className={styles.blockCard}>
                                                            <div className={styles.resumeLineTiny}></div>
                                                            <div className={styles.resumeLineTiny}></div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.resumeSkills}>
                                                        <span>Docker</span>
                                                        <span>K8s</span>
                                                        <span>CI/CD</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeImportance;
