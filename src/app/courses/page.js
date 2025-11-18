import CoursesPage from "@/components/courses/CoursesPage";
import Script from "next/script";

// ---------------- SEO Metadata ----------------
export const metadata = {
  title: "Jobzenter Courses – Best IT Training Programs With Placement",
  description:
    "Explore all Jobzenter IT courses including Full Stack Development, React JS, Java, Python, Testing, Data Science, UI/UX, and more. 100% placement support.",
  keywords: [
    "Jobzenter courses",
    "IT courses",
    "software training",
    "full stack development",
    "react js course",
    "python course",
    "java training",
    "data science course",
    "software testing course",
  ],
  openGraph: {
    title: "Jobzenter – Top IT Courses & Career Training",
    description:
      "Browse the best IT courses with hands-on projects and placement support. Online & Offline batches available.",
    url: "https://jobzenter.in/courses",
    siteName: "Jobzenter",
    type: "website",
    images: [
      {
        url: "https://jobzenter.in/og-courses.jpg",
        width: 1200,
        height: 630,
        alt: "Jobzenter Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobzenter – Best IT Courses",
    description:
      "Explore industry-ready IT training and placement programs.",
    images: ["https://jobzenter.in/og-courses.jpg"],
  },
};

// ---------------- Page Component ----------------
export default function Courses() {
  return (
    <>
      {/* JSON-LD Structured Data for Course List */}
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Jobzenter Courses",
            description:
              "List of all software training courses offered by Jobzenter.",
            itemListElement: [
              {
                "@type": "Course",
                name: "Full Stack Development",
                provider: {
                  "@type": "Organization",
                  name: "Jobzenter",
                  sameAs: "https://jobzenter.in",
                },
              },
              {
                "@type": "Course",
                name: "React JS Development",
                provider: {
                  "@type": "Organization",
                  name: "Jobzenter",
                  sameAs: "https://jobzenter.in",
                },
              },
              {
                "@type": "Course",
                name: "Python Programming",
                provider: {
                  "@type": "Organization",
                  name: "Jobzenter",
                  sameAs: "https://jobzenter.in",
                },
              },
            ],
          }),
        }}
      />

      <CoursesPage />
    </>
  );
}
