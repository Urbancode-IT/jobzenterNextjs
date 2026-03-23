'use client';

import { usePathname } from 'next/navigation';
import Questions from '@/components/courses/Questions';


export default function ConditionalQuestions() {
    const pathname = usePathname();

    // Don't show on Home, study-abroad, or individual course pages (they have their own or don't need FAQ)
    const isCourseDetailPage = pathname.startsWith('/courses/') && pathname.split('/').length > 2;
    const isStudyAbroadPage = pathname.startsWith('/study-abroad');

   if (pathname === '/' || isCourseDetailPage || isStudyAbroadPage || pathname === '/aboutus') {
        return null;
    }

    return <Questions />;
}
