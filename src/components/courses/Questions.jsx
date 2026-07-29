"use client";
import React, { useState, useEffect, useRef } from 'react';
import './Questions.css';

const Questions = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [visibleItems, setVisibleItems] = useState([]);
    const [imgVisible, setImgVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);

    const itemRefs  = useRef([]);
    const imgRef    = useRef(null);
    const titleRef  = useRef(null);

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


    const displayData = data || defaultFaqData;

    /* ── Accordion items scroll observer ── */
    useEffect(() => {
        const observers = [];
        itemRefs.current.forEach((ref, index) => {
            if (!ref) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleItems((prev) => [...prev, index]);
                        }, index * 150);
                        observer.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            observer.observe(ref);
            observers.push(observer);
        });
        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

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

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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

                    {/* Circle wrapper */}
                    <div className={`img-circle-wrapper ${imgVisible ? 'circles-visible' : ''}`}>
                        {/* Pulse glow ring */}
                        <div className="pulse-ring" />

                        {/* Rotating ring */}
                        <div className="rotating-ring" />

                        {/* Dashed border spin */}
                        <div className="dashed-ring" />

                        {/* Image */}
                        <img
                            ref={imgRef}
                            src="/faq_illustration..png"
                            alt="FAQ Illustration"
                            className={imgVisible ? 'img-visible' : 'img-hidden'}
                        />
                    </div>

                </div>
                <div className="questions-accordion-section">
                    {displayData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`accordion-item 
                                ${activeIndex === index ? 'active' : ''} 
                                ${visibleItems.includes(index) ? 'box-visible' : 'box-hidden'}`}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Questions;