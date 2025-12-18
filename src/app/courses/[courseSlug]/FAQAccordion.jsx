'use client';

import { useState } from 'react';

export default function FAQAccordion({ faqData }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion" id="faqAccordion">
            {faqData.map((faq, index) => (
                <div
                    className="accordion-item mb-2 mb-md-3 custom-accordion-item px-2 px-md-3"
                    key={index}
                >
                    <h2 className="accordion-header" id={`faqHeading${index}`}>
                        <button
                            className={`accordion-button bg-transparent box-shadow-none p-2 p-md-3 ${openIndex !== index ? "collapsed" : ""
                                }`}
                            type="button"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faqCollapse${index}`}
                            style={{ transition: 'all 0.3s ease' }}
                        >
                            <i className="bi bi-question-circle-fill text-warning me-3 fs-5"></i>
                            <span className="text-start fs-6 fs-md-inherit fw-medium">{faq.question}</span>
                        </button>
                    </h2>

                    <div
                        id={`faqCollapse${index}`}
                        className={`accordion-collapse collapse ${openIndex === index ? "show" : ""
                            }`}
                        aria-labelledby={`faqHeading${index}`}
                    >
                        <div className="accordion-body px-3 px-md-4 pt-0 pb-3 text-secondary">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
