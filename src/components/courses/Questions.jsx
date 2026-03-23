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
    question: "What is Jobzenter?",
    answer: "Jobzenter is a software training and placement company based in Chennai, focused on providing industry-aligned training and dedicated placement support."
  },
  {
    question: "Who can join Jobzenter?",
    answer: "Students, freshers, and working professionals who want to upskill and transition into the IT industry can join Jobzenter."
  },
  {
    question: "What makes Jobzenter different?",
    answer: "We focus on real-time projects, industry-aligned curriculum, expert mentorship, and dedicated placement support — ensuring every learner is job-ready."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes. We offer structured placement support including resume building, mock interviews, HR preparation, and direct referrals to our hiring network."
  },
  {
    question: "Are classes available online and offline?",
    answer: "Yes, we offer both online and offline classroom options to suit different learning preferences and schedules."
  }
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
                className={`faq-title ${titleVisible ? 'title-sweep' : ''}`}
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