'use client';

import { usePathname } from 'next/navigation';
import Questions from '@/components/courses/Questions';

export default function ConditionalQuestions() {
    const pathname = usePathname();

    // Don't show on Home page or individual course pages (they have their own specific FAQs)
    const isCourseDetailPage = pathname.startsWith('/courses/') && pathname.split('/').length > 2;

    if (pathname === '/' || isCourseDetailPage) {
        return null;
    }

    return <Questions />;
}
