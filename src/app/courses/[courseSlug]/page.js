import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import courses from '@/components/courses/coursesData';
import EnquiryButton from './EnquiryButton';
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

    return (
        <div className="single-coursepage bg-gray px-3 px-md-4 px-lg-5 py-4 py-md-5 mt-3 mt-md-5">
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

            <div className="container py-3 py-md-4 py-lg-5">
                {/* Navigation at Top */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <Link href="/courses" className="btn btn-outline-dark btn-sm">
                        ← Back to Courses
                    </Link>
                </div>

                {/* Top Section */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-7">
                        <div className="d-flex flex-column justify-content-around h-100">
                            {/* breadcrumb */}
                            <p className="text-secondary opacity-75 small mb-2 mb-md-3">
                                <Link
                                    className="text-decoration-none text-dark fw-medium"
                                    href="/courses"
                                >
                                    Courses
                                </Link>
                                <span className="mx-1 mx-md-2 text-muted">›</span>
                                <span className="text-dark">
                                    {course.title}
                                </span>
                            </p>
                            <h1 className="fw-bold mb-3 mb-md-4 text-center text-lg-start">
                                {course.aboutData?.topic || course.title}
                            </h1>
                            <div>
                                <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 mb-3 text-muted small">
                                    <span>⭐ {course.rating}/5</span>
                                    <span>👩‍🎓 {course.students}+ students</span>
                                </div>
                                <p className="text-secondary fs-md-9 lh-base">
                                    {course.aboutData?.content1 || course.description}
                                </p>

                                <a
                                    href={`https://wa.me/919057770577?text=${encodeURIComponent(
                                        `Hi there, I would like to enroll in this course ${course.title} from Jobzenter. Please share more details.`
                                    )}`}
                                    style={{ textDecoration: "none" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="btn btn-dark rounded-pill mt-3 px-4 py-2 enroll-btn w-sm-100 w-md-auto">
                                        Enroll Today
                                    </button>
                                </a>
                            </div>
                            <div className="mt-4 mt-md-5">
                                <h2 className="fw-semibold mb-3 text-center text-lg-start">About This Course</h2>
                                <p className="text-secondary fs-md-9 lh-base">
                                    {course.aboutData?.content2 || course.description}
                                </p>
                            </div>
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
                                <ul className="small px-2 px-md-3 text-secondary">
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
                                    <li className="mb-2 mb-md-3 d-flex align-items-start">
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

                {/* What You'll Learn */}
                {course.whatYouLearnData && (
                    <div className="section-spacing">
                        <h2 className="fw-semibold mb-3 mb-md-4 text-center text-lg-start">What You'll Learn</h2>
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
                        <h2 className="fw-semibold mb-3 mb-md-4 text-center text-lg-start">Course Content</h2>
                        <div className="accordion" id="courseAccordion">
                            {course.courseContentData.map((section) => (
                                <div
                                    className="accordion-item mb-2 mb-md-3 custom-accordion-item px-2 px-md-3 "
                                    key={section.id}
                                >
                                    <h2 className="accordion-header" id={`heading${section.id}`}>
                                        <button
                                            className={`accordion-button bg-transparent box-shadow-none p-2 p-md-3 ${!section.defaultOpen ? "collapsed" : ""
                                                }`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${section.id}`}
                                            aria-expanded={section.defaultOpen ? "true" : "false"}
                                            aria-controls={`collapse${section.id}`}
                                        >
                                            <i
                                                className={`${section.icon} m-0 me-2 me-md-3 gray-bg p-2 rounded-circle flex-shrink-0 fs-6`}
                                            ></i>
                                            <span className="text-start fs-6 fs-md-inherit">{section.title}</span>
                                        </button>
                                    </h2>

                                    <div
                                        id={`collapse${section.id}`}
                                        className={`accordion-collapse collapse ${section.defaultOpen ? "show" : ""
                                            }`}
                                        aria-labelledby={`heading${section.id}`}
                                        data-bs-parent="#courseAccordion"
                                    >
                                        <div className="accordion-body px-3 px-md-4">
                                            <ul className="mb-0 ps-3">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="mb-1 lh-base">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Locked full syllabus CTA */}
                        {course.locked === true && (
                            <div className="text-center mt-3">
                                <EnquiryButton courseName={course.title} isLockCta={true} />
                            </div>
                        )}
                    </div>
                )}
                {/* End of Course Content */}

                {/* Bottom Navigation */}
                <div className="section-spacing">
                    <div className="row g-3">
                        <div className="col-6">
                            {courses.findIndex(c => c.slug === courseSlug) > 0 && (
                                <Link
                                    href={`/courses/${courses[courses.findIndex(c => c.slug === courseSlug) - 1].slug}`}
                                    className="btn btn-outline-dark w-100"
                                >
                                    ← Previous Course
                                </Link>
                            )}
                        </div>
                        <div className="col-6">
                            {courses.findIndex(c => c.slug === courseSlug) < courses.length - 1 && (
                                <Link
                                    href={`/courses/${courses[courses.findIndex(c => c.slug === courseSlug) + 1].slug}`}
                                    className="btn btn-dark w-100"
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
