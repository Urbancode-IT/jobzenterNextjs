'use client';

import { useState } from 'react';
import EnquiryFormModal from '@/components/enquiryForm/EnquiryFormModal';
import BrochureFormModal from '@/components/enquiryForm/BrochureFormModal';

export default function EnquiryButton({
    courseName,
    isLockCta = false,
    openBrochure = false,
    label,
    variant = "default",
    className = "",
}) {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);

    const resolvedLabel =
        label || (isLockCta ? "Full syllabus locked — Get Brochure" : "Get Brochure");

    // Brochure intent: explicit prop, lock CTA, or label containing "Get Brochure".
    // isLockCta only controls lock styling — not the only way to open the brochure modal.
    const opensBrochure =
        isLockCta ||
        openBrochure ||
        /get brochure/i.test(resolvedLabel);

    const defaultBtnClass =
        variant === "secondary"
            ? `btn rounded-pill ${className}`.trim()
            : `btn btn-dark w-100 dark-shine-btn rounded-4 mt-2 ${className}`.trim();

    return (
        <>
            {opensBrochure ? (
                <button
                    className={
                        isLockCta
                            ? `btn rounded-pill px-3 py-2 lock-cta fw-bold btn-golden ${className}`
                            : defaultBtnClass
                    }
                    onClick={() => setIsBrochureOpen(true)}
                    title={isLockCta ? "Request full syllabus" : "Get brochure"}
                >
                    {isLockCta ? <i className="bi bi-lock-fill me-2"></i> : null}
                    {resolvedLabel}
                </button>
            ) : (
                <button
                    className={defaultBtnClass}
                    onClick={() => setIsEnquiryOpen(true)}
                >
                    {resolvedLabel}
                </button>
            )}

            <EnquiryFormModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                courseName={courseName}
            />

            <BrochureFormModal
                isOpen={isBrochureOpen}
                onClose={() => setIsBrochureOpen(false)}
                courseName={courseName}
            />
        </>
    );
}
