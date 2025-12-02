'use client';

import { useState } from 'react';

export default function CourseAccordion({ courseContentData }) {
    const [openSections, setOpenSections] = useState(
        courseContentData
            .filter(section => section.defaultOpen)
            .map(section => section.id)
    );

    const toggleSection = (sectionId) => {
        setOpenSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    return (
        <div className="accordion" id="courseAccordion">
            {courseContentData.map((section) => (
                <div
                    className="accordion-item mb-2 mb-md-3 custom-accordion-item px-2 px-md-3"
                    key={section.id}
                >
                    <h2 className="accordion-header" id={`heading${section.id}`}>
                        <button
                            className={`accordion-button bg-transparent box-shadow-none p-2 p-md-3 ${!openSections.includes(section.id) ? "collapsed" : ""
                                }`}
                            type="button"
                            onClick={() => toggleSection(section.id)}
                            aria-expanded={openSections.includes(section.id)}
                            aria-controls={`collapse${section.id}`}
                        >
                            <i
                                className={`${section.icon} m-0 me-2 me-md-3 gray-bg p-2 rounded-circle flex-shrink-0 fs-6`}
                            ></i>
                            <span className="text-start fs-6 fs-md-inherit">{section.title}</span>
                        </button>
                    </h2>

                    <div
                        id={`collapse${section.id}`}
                        className={`accordion-collapse collapse ${openSections.includes(section.id) ? "show" : ""
                            }`}
                        aria-labelledby={`heading${section.id}`}
                    >
                        <div className="accordion-body px-3 px-md-4">
                            <ul className="mb-0 ps-3">
                                {section.items.map((item, i) => (
                                    <li key={i} className="mb-1 lh-base">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
