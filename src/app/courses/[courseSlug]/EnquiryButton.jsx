'use client';

import { useState } from 'react';
import EnquiryFormModal from '@/components/enquiryForm/EnquiryFormModal';
import BrochureFormModal from '@/components/enquiryForm/BrochureFormModal';

export default function EnquiryButton({
    courseName,
    isLockCta = false,
    label,
    variant = "default",
    className = "",
}) {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);

    const resolvedLabel = label || (isLockCta ? "Full syllabus locked — Get Brochure" : "Get Brochure");

    return (
        <>
            {isLockCta ? (
                /* Get Brochure button → opens BrochureFormModal */
                <button
                    className={`btn rounded-pill px-3 py-2 lock-cta fw-bold btn-golden ${className}`}
                    onClick={() => setIsBrochureOpen(true)}
                    title="Request full syllabus"
                >
                    <i className="bi bi-lock-fill me-2"></i>
                    {resolvedLabel}
                </button>
            ) : (
                /* Enroll / regular button → opens EnquiryFormModal (unchanged) */
                <button
                    className={
                        variant === "secondary"
                            ? `btn rounded-pill ${className}`.trim()
                            : `btn btn-dark w-100 dark-shine-btn rounded-4 mt-2 ${className}`.trim()
                    }
                    onClick={() => setIsEnquiryOpen(true)}
                >
                    {resolvedLabel}
                </button>
            )}

            {/* Enquire Today Modal — for Enroll / regular buttons */}
            <EnquiryFormModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                courseName={courseName}
            />

            {/* Get Brochure Modal — only for isLockCta buttons */}
            <BrochureFormModal
                isOpen={isBrochureOpen}
                onClose={() => setIsBrochureOpen(false)}
                courseName={courseName}
            />
        </>
    );
}

