'use client';

import { usePathname } from 'next/navigation';
import Questions from '@/components/courses/Questions';

export default function ConditionalQuestions() {
    const pathname = usePathname();

    const isCourseDetailPage = pathname.startsWith('/courses/') && pathname.split('/').length > 2;
    const isStudyAbroadPage = pathname.startsWith('/study-abroad');
    const isResumePage = pathname.startsWith('/career-lab/resume-building');
    const isPlacementPage = pathname.startsWith('/placement') || pathname.startsWith('/career-lab/placement-preparation');

    if (pathname === '/' || isCourseDetailPage || isStudyAbroadPage || isResumePage || isPlacementPage) {
        return null;
    }

    return <Questions />;
}