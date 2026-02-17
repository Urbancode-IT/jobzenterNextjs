import InterviewPage from "@/components/interview/Interview";
import Script from "next/script";

// ---------- SEO Metadata ----------
export const metadata = {
  title: "Interview Preparation – HR, Technical & Coding Prep | Jobzenter",
  description:
    "Complete interview preparation including HR questions, technical interview guidance, coding questions, behavioral rounds, mock practice, and placement readiness.",
  keywords: [
    "interview preparation",
    "technical interview questions",
    "hr interview questions",
    "coding interview preparation",
    "job interview tips",
    "IT interview preparation",
    "jobzenter interview prep",
  ],
  alternates: {
    canonical: "https://jobzenter.in/career-lab/interview-preparation",
  },
  openGraph: {
    title: "Interview Preparation Guide – HR + Technical + Coding | Jobzenter",
    description:
      "Prepare for job interviews with curated HR questions, coding exercises, technical round strategies, and real interview advice.",
    url: "https://jobzenter.in/career-lab/interview-preparation",
    siteName: "Jobzenter",
    type: "website",
    images: [
      {
        url: "https://jobzenter.in/interview-og.jpg",
        width: 1200,
        height: 630,
        alt: "Job Interview Preparation – Jobzenter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Interview Preparation – Jobzenter",
    description: "HR + Technical + Coding interview preparation guide.",
    images: ["https://jobzenter.in/interview-og.jpg"],
  },
};

// ---------- Page Component ----------
export default function InterviewStudy() {
  return (
    <>
      {/* JSON-LD Schema for Interview Preparation Page */}
      <Script
        id="interview-prep-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Interview Preparation – Jobzenter",
            url: "https://jobzenter.in/career-lab/interview-preparation",
            description:
              "A complete guide for cracking job interviews including HR, technical, and coding rounds.",
            publisher: {
              "@type": "Organization",
              name: "Jobzenter",
              url: "https://jobzenter.in",
              logo: "https://jobzenter.in/logo.png",
            },
          }),
        }}
      />

      <InterviewPage />
    </>
  );
}
