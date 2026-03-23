'use client';

import { usePathname } from 'next/navigation';
import Questions from '@/components/courses/Questions';


export default function ConditionalQuestions() {
    const pathname = usePathname();

    const isCourseDetailPage = pathname.startsWith('/courses/') && pathname.split('/').length > 2;
    const isStudyAbroadPage = pathname.startsWith('/study-abroad');
    const isAboutUsPage = pathname === '/aboutus';
    const isReachUsPage = pathname.startsWith('/reach-us');
    const isResumeBuildingPage = pathname === '/career-lab/resume-building';
    const isPlacementPreparationPage = pathname === '/career-lab/placement-preparation';
    const isPlacementPage = pathname === '/placement';

    if (
        pathname === '/' ||
        isCourseDetailPage ||
        isStudyAbroadPage ||
        isAboutUsPage ||
        isReachUsPage ||
        isResumeBuildingPage ||
        isPlacementPreparationPage ||
        isPlacementPage
    ) {
        return null;
    }

    return <Questions />;
}