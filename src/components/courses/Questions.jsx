import React, { useState } from 'react';
import './Questions.css';

const Questions = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const defaultFaqData = [
        {
            question: "What is AWS",
            answer: "Amazon Web Services (AWS) is a comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS) and packaged software-as-a-service (SaaS) offerings."
        },
        {
            question: "What is cloud computing",
            answer: "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS)."
        },
        {
            question: "What is Amazon EC2",
            answer: "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) Cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster."
        },
        {
            question: "What is Amazon S3",
            answer: "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance."
        },
        {
            question: "Is AWS secure",
            answer: "Yes, AWS is designed to be one of the most flexible and secure cloud computing environments available today. It provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world."
        }
    ];

    const displayData = data || defaultFaqData;

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="questions-outer-wrapper">
            <h2 className="faq-title">Frequently asked questions</h2>
            <div className="questions-container">
                <div className="questions-image-section">
                    <img src="/faq_illustration..png" alt="FAQ Illustration" />
                </div>
                <div className="questions-accordion-section">
                    {displayData.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
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
