'use client';

import { useState } from 'react';
import EnquiryFormModal from '@/components/enquiryForm/EnquiryFormModal';

export default function EnquiryButton({ courseName, isLockCta = false }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isLockCta ? (
                <button
                    className="btn rounded-pill px-3 py-2 lock-cta fw-bold btn-golden"
                    onClick={() => setIsOpen(true)}
                    title="Request full syllabus"
                >
                    <i className="bi bi-lock-fill me-2"></i>
                    Full syllabus locked — Get Brochure
                </button>
            ) : (
                <button
                    className="btn btn-dark w-100 dark-shine-btn rounded-4 mt-2"
                    onClick={() => setIsOpen(true)}
                >
                    Get Brochure
                </button>
            )}

            <EnquiryFormModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                courseName={courseName}
            />
        </>
    );
}
