"use client";
import React, { useState, useEffect, useRef } from 'react';
import './Questions.css';

const Questions = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [page, setPage] = useState(0);
    const [imgVisible, setImgVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);

    const imgRef = useRef(null);
    const titleRef = useRef(null);

    const defaultFaqData = [
        {
            question: "What development courses does Jobzenter offer?",
            answer: "We offer React Native Fullstack, Java Fullstack, MERN Stack, MEAN Stack, and Python Fullstack development courses. Each course includes real-world projects, mentor support, and 100% placement assistance."
        },
        {
            question: "Which testing courses are available at Jobzenter?",
            answer: "We offer Selenium, Playwright, Java, and TypeScript for test automation. These courses cover all aspects of software quality assurance from beginner to advanced level."
        },
        {
            question: "What database courses can I learn at Jobzenter?",
            answer: "We provide courses in MySQL, MongoDB, PostgreSQL, Oracle SQL, and Business Intelligence. You will learn database design, querying, performance tuning, and real-world data management skills."
        },
        {
            question: "What networking and security courses does Jobzenter provide?",
            answer: "We offer CCNP, Ethical Hacking, and Cyber Security courses. These are aligned with Cisco certifications and industry standards like CEH and CompTIA Security+."
        },
        {
            question: "What healthcare IT courses are available at Jobzenter?",
            answer: "We offer Medical Billing, Medical Coding, Clinical Research, Hospital Management, and Pharmacy Management courses. These courses prepare you for high-demand healthcare administration and IT roles."
        },
    ];

    const PAGE_SIZE = 3;
    const displayData = data || defaultFaqData;
    const totalPages = Math.max(1, Math.ceil(displayData.length / PAGE_SIZE));
    const safePage = Math.min(page, totalPages - 1);
    const pageItems = displayData.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

    /* ── Image scroll observer ── */
    useEffect(() => {
        if (!imgRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImgVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    /* ── Title scroll observer ── */
    useEffect(() => {
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

    /* Reset page if FAQ data length changes */
    useEffect(() => {
        setPage(0);
        setActiveIndex(null);
    }, [displayData.length]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const goToPage = (nextPage) => {
        if (nextPage < 0 || nextPage >= totalPages) return;
        setPage(nextPage);
        setActiveIndex(null);
    };

    return (
        <section className="questions-outer-wrapper">
            <h2
                ref={titleRef}
                className={`faq-title ${titleVisible ? "title-sweep" : ""}`}
            >
                Frequently asked questions
            </h2>
            <div className="questions-container">
                <div className="questions-image-section">
                    <div className="img-circle-wrapper">
                        <img
                            ref={imgRef}
                            src="/faq_illustration..png"
                            alt="FAQ Illustration"
                            className={imgVisible ? 'img-visible' : 'img-hidden'}
                        />
                    </div>
                </div>

                <div className="questions-list-panel">
                    <div className="questions-accordion-section" key={safePage}>
                        {pageItems.map((item, localIndex) => {
                            const index = safePage * PAGE_SIZE + localIndex;
                            return (
                                <div
                                    key={index}
                                    className={`accordion-item ${activeIndex === index ? 'active' : ''} box-visible`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="accordion-header">
                                        <span className="accordion-question">{item.question}</span>
                                        <span className="accordion-icon">
                                            {activeIndex === index ? '−' : '+'}
                                        </span>
                                    </div>
                                    <div className="accordion-content">
                                        <p className="accordion-answer">{item.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {totalPages > 1 && (
                        <div className="faq-carousel-nav" aria-label="FAQ pagination">
                            <button
                                type="button"
                                className="faq-nav-btn"
                                onClick={() => goToPage(safePage - 1)}
                                disabled={safePage === 0}
                                aria-label="Previous FAQ page"
                            >
                                ←
                            </button>

                            <div className="faq-dots">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        className={`faq-dot ${i === safePage ? "active" : ""}`}
                                        onClick={() => goToPage(i)}
                                        aria-label={`Go to FAQ page ${i + 1}`}
                                        aria-current={i === safePage ? "true" : undefined}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                className="faq-nav-btn"
                                onClick={() => goToPage(safePage + 1)}
                                disabled={safePage === totalPages - 1}
                                aria-label="Next FAQ page"
                            >
                                →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Questions;
