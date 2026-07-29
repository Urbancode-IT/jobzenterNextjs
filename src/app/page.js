import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/Carousal";
import Steps from "@/components/Steps";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import StudentReviews from "@/components/StudentReviews";
import TopRatedCourses from "@/components/TopRatedCourse";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";
import SuccessSection from "@/components/SuccessSection";
import InDemandTools from "@/components/InDemandTools";
import Script from "next/script";

// ---------------- SEO Metadata ----------------
export const metadata = {
  title: "Jobzenter - Best IT Courses, Placements, and Career Training",
  description:
    "Jobzenter provides industry-ready IT training, top-rated courses, student reviews, placement support, and hands-on learning. Start your tech career today.",
  keywords: [
    "Jobzenter",
    "IT Courses",
    "Software Training",
    "Best Training Institute",
    "Fullstack Course",
    "Web Development Course",
    "React Training",
  ],
  openGraph: {
    title: "Jobzenter - Best IT Courses & Placement Training",
    description:
      "Learn IT courses from experts. 100% placement support. Online + Offline classes available.",
    url: "https://jobzenter.in",
    siteName: "Jobzenter",
    type: "website",
    images: [
      {
        url: "https://jobzenter.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jobzenter - IT Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobzenter - Best IT Courses",
    description: "Industry-ready IT training with expert mentors.",
    images: ["https://jobzenter.in/og-image.jpg"],
  },
};

// ---------------- Page Component ----------------
export default function Home() {
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jobzenter",
            url: "https://jobzenter.in",
            logo: "https://jobzenter.in/logo.png",
            sameAs: [
              "https://facebook.com/jobzenter",
              "https://instagram.com/jobzenter",
              "https://linkedin.com/company/jobzenter",
            ],
          }),
        }}
      />
      <HeroSection />
      <Carousel />
      <AboutSection />
      <TopRatedCourses />
      {/* <Steps /> */}
      <WhyChooseUs showProvide={false} />
      <SuccessSection />
      <StudentReviews />
      <InDemandTools />
      <FaqSection />
    </>
  );
}
