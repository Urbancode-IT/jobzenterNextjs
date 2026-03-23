'use client';

import { usePathname } from 'next/navigation';
import Questions from '@/components/courses/Questions';


export default function ConditionalQuestions() {
    const pathname = usePathname();

    const isCourseDetailPage = pathname.startsWith('/courses/') && pathname.split('/').length > 2;
    const isStudyAbroadPage = pathname.startsWith('/study-abroad');

    if (pathname === '/' || isCourseDetailPage || isStudyAbroadPage) {
        return null;
    }

    return <Questions />;
}