'use client';

import { usePathname } from 'next/navigation';
import Questions from '@/components/courses/Questions';


export default function ConditionalQuestions() {
    const pathname = usePathname();

    // Don't show on Home, study-abroad, or individual course pages (they have their own or don't need FAQ)
    const isCourseDetailPage = pathname.startsWith('/courses/') && pathname.split('/').length > 2;
    const isStudyAbroadPage = pathname.startsWith('/study-abroad');
    const isReachUsPage = pathname.startsWith('/reach-us');

   if (pathname === '/' || isCourseDetailPage || isStudyAbroadPage || pathname === '/aboutus' || isReachUsPage) {
        return null;
    }

    return <Questions />;
}
