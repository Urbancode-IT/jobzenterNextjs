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
        <div className="accordion curriculum-accordion" id="courseAccordion">
            {courseContentData.map((section, idx) => (
                (() => {
                    const isOpen = openSections.includes(section.id);
                    const sectionItems = Array.isArray(section.items)
                        ? section.items
                        : Array.isArray(section.content)
                            ? section.content
                            : Array.isArray(section.points)
                                ? section.points
                                : [];

                    return (
                <div
                    className={`accordion-item mb-2 mb-md-3 custom-accordion-item curriculum-item ${isOpen ? "is-open" : ""
                        }`}
                    key={section.id}
                >
                    <h2 className="accordion-header" id={`heading${section.id}`}>
                        <button
                            className={`accordion-button bg-transparent box-shadow-none p-3 curriculum-btn ${!isOpen ? "collapsed" : ""
                                }`}
                            type="button"
                            onClick={() => toggleSection(section.id)}
                            aria-expanded={isOpen}
                            aria-controls={`collapse${section.id}`}
                        >
                            <span
                                className={`curriculum-index flex-shrink-0 ${isOpen ? "active" : ""}`}
                                aria-hidden="true"
                            >
                                {idx + 1}
                            </span>
                            <span className="text-start curriculum-title">{section.title}</span>
                            <span className="curriculum-toggle" aria-hidden="true">
                                {isOpen ? "−" : "+"}
                            </span>
                        </button>
                    </h2>

                    {isOpen && (
                        <div id={`collapse${section.id}`} className="accordion-collapse" aria-labelledby={`heading${section.id}`}>
                        <div className="accordion-body px-4 pb-4 pt-0 curriculum-body">
                            <ul className="mb-0 curriculum-list">
                                {sectionItems.length > 0 ? sectionItems.map((item, i) => (
                                    <li key={i} className="mb-2 lh-base curriculum-li">{item}</li>
                                )) : (
                                    <li className="mb-2 lh-base curriculum-li">Detailed topics will be shared soon.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    )}
                </div>
                    );
                })()
            ))}
        </div>
    );
}
