'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './ResumeImportance.module.css';

const scrollToResumeRegister = () => {
    document
        .getElementById('resume-register')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const ResumeReadyBanner = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`${styles.footerBanner} ${styles.footerBannerTop}`}
    >
        <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>
                Ready to build your <span className={styles.bannerAccent}>dream resume?</span>
            </h2>
            <p className={styles.bannerSubtitle}>
                {"Join students across India who landed their dream job with Jobzenter's proven resume-building framework."}
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
                <span className={styles.bannerFooterLabel}>Free to start your dream resume</span>
            </div>
        </div>

        <div className={styles.bannerShowcase}>
            <div className={styles.resumeDeck}>
                {[
                    { name: 'Ananya R', role: 'Frontend Developer', theme: 'classic' },
                    { name: 'Rohan K', role: 'Data Analyst', theme: 'minimal' },
                    { name: 'Sofia M', role: 'Cloud Engineer', theme: 'accent' },
                ].map((item, idx) => {
                    const cardThemeClass = styles[`resumeCard${item.theme[0].toUpperCase()}${item.theme.slice(1)}`];

                    return (
                        <div
                            key={idx}
                            className={`${styles.resumeCard} ${styles.resumeDeckCard} ${styles[`resumeDeckCard${idx + 1}`]} ${cardThemeClass}`}
                            aria-label={`${item.name} ATS resume template`}
                        >
                            <div className={styles.resumeSheet}>
                                {item.theme === 'classic' && (
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

                                {item.theme === 'minimal' && (
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

                                {item.theme === 'accent' && (
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
);

export default ResumeReadyBanner;
