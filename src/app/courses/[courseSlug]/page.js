import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import courses from '@/components/courses/coursesData';
import EnquiryButton from './EnquiryButton';
import CourseAccordion from './CourseAccordion';
import Questions from '@/components/courses/Questions';
import './styles.css';

// Force dynamic rendering if needed, or use generateStaticParams for SSG
export async function generateStaticParams() {
    return courses.map((course) => ({
        courseSlug: course.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { courseSlug } = await params;
    const course = courses.find((c) => c.slug === courseSlug);

    if (!course) {
        return {
            title: 'Course Not Found',
        };
    }

    return {
        title: `${course.title} | Jobzenter`,
        description: course.description,
    };
}

export default async function CourseInternalPage({ params }) {
    const { courseSlug } = await params;
    const course = courses.find((c) => c.slug === courseSlug);

    if (!course) {
        notFound();
    }

    const heroTitle = course.aboutData?.topic || course.title;
    const heroLead = course.aboutData?.content1 || course.description;
    const ratingText = course.rating ? `${course.rating}/5` : null;
    const studentsText = course.students ? `${course.students}+ students` : null;

    return (
        <div className="single-coursepage bg-gray px-3 px-md-4 px-lg-5 py-3 py-md-4 mt-1 mt-md-2">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: course.title,
                        description: course.description,
                        provider: {
                            "@type": "Organization",
                            name: "Jobzenter",
                            url: "https://jobzenter.in",
                        },
                    }),
                }}
            />

            <div className="container py-2 py-md-3 py-lg-4">
                {/* Hero */}
                <div className="course-hero">
                    <div className="course-hero-inner">
                        <div className="row g-4 g-lg-5 align-items-center">
                            <div className="col-12 col-lg-7">
                                <div className="course-eyebrow">
                                    <span className="stars" aria-hidden="true">★★★★★</span>
                                    <span className="text-muted">
                                        {ratingText ? `${ratingText}` : "Top rated"}{studentsText ? ` • ${studentsText}` : ""}
                                    </span>
                                </div>

                                <h1 className="course-title">
                                    Fast track your career growth{" "}
                                    <span className="course-title-strong">{heroTitle}</span>
                                </h1>

                                <p className="course-lead mb-0">
                                    {heroLead}
                                </p>

                                <div className="course-cta-row">
                                    <EnquiryButton
                                        courseName={course.title}
                                        label="Enroll now"
                                        variant="secondary"
                                        className="course-primary-cta"
                                    />
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="col-12 col-lg-5">
                                <div className="card shadow-md px-3 px-md-4 py-3 py-md-4 rounded-4 rounded-lg-5 border-0 sticky-lg-top">
                                    <Image
                                        src={course.img}
                                        alt={course.title}
                                        width={500}
                                        height={300}
                                        className="card-img-top rounded-4 my-2 my-md-3 img-fluid w-100"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column justify-content-around p-0">
                                        <ul className="small px-2 px-md-3 text-secondary mb-3">
                                            <li className="mb-2 mb-md-3 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span>Hours of Instructor-Led Training</span>
                                            </li>
                                            <li className="mb-2 mb-md-3 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span>Hands-on Projects across Web, Data & AI</span>
                                            </li>
                                            <li className="mb-2 mb-md-3 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span>Includes Beginner → Expert Level Topics</span>
                                            </li>
                                            <li className="mb-2 mb-md-3 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span>Mentor Support, Assignments & Code Reviews</span>
                                            </li>
                                            <li className="mb-2 mb-md-3 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span>Job Assistance & Portfolio Guidance</span>
                                            </li>
                                            <li className="mb-2 mb-md-0 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span>Jobzenter Certificate of Completion</span>
                                            </li>
                                        </ul>

                                        <EnquiryButton courseName={course.title} />
                                    </div>
                                </div>
                            </div>
                            {/* End of Right Section */}
                        </div>
                    </div>
                </div>

                {/* What You'll Learn */}
                {course.whatYouLearnData && (
                    <div className="section-spacing">
                        <AnimatedHeading 
                            text="What You'll Learn" 
                            className="fw-semibold mb-3 mb-md-4 text-center text-lg-start" 
                            highlightCount={0}
                        />
                        <div className="row g-3 g-md-4">
                            {course.whatYouLearnData.map((t, i) => (
                                <div className="col-12 col-sm-6 col-lg-4" key={i}>
                                    <div className="card h-100 card-wyl rounded-3 border-1 shadow-sm shadow-md-lg p-0 mh-135">
                                        <div className="card-body d-flex align-items-center py-3 px-3">
                                            <i className={`${t.icon} me-3 gray-bg rounded-3 p-2 flex-shrink-0`}></i>
                                            <div className="flex-grow-1">
                                                <h6 className="fs-16 mb-1">{t.title}</h6>
                                                <p className="fs-7 text-secondary mb-0 lh-sm">{t.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* End of What You'll Learn */}

                {/* Course Content */}
                {course.courseContentData && (
                    <div className="section-spacing">
                        <AnimatedHeading 
                            text="Course Content" 
                            className="fw-semibold mb-3 mb-md-4 text-center text-lg-start" 
                            highlightCount={0}
                        />
                        <CourseAccordion courseContentData={course.courseContentData} />
                        {/* Locked full syllabus CTA */}
                        {course.locked === true && (
                            <div className="text-center mt-3">
                                <EnquiryButton courseName={course.title} isLockCta={true} />
                            </div>
                        )}
                    </div>
                )}
                {/* End of Course Content */}

                {/* FAQ Section */}
                {course.faqData && (
                    <Questions data={course.faqData} />
                )}
                {/* End of FAQ Section */}

                {/* Bottom Navigation */}
                <div className="section-spacing">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            {courses.findIndex(c => c.slug === courseSlug) > 0 && (
                                <Link
                                    href={`/courses/${courses[courses.findIndex(c => c.slug === courseSlug) - 1].slug}`}
                                    className="course-nav-link"
                                >
                                    ← Previous Course
                                </Link>
                            )}
                        </div>
                        <div>
                            {courses.findIndex(c => c.slug === courseSlug) < courses.length - 1 && (
                                <Link
                                    href={`/courses/${courses[courses.findIndex(c => c.slug === courseSlug) + 1].slug}`}
                                    className="course-nav-link"
                                >
                                    Next Course →
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
