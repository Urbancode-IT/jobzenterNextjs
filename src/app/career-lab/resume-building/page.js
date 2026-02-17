import Resume from "@/components/resumeBuild/Resume";
import Script from "next/script";

// ---------------- SEO Metadata ----------------
export const metadata = {
  title: "Free Resume Builder – Create a Professional Resume | Jobzenter",
  description:
    "Create a professional resume instantly with Jobzenter's free resume builder. Choose templates, download PDF, and get job-ready in minutes.",
  keywords: [
    "resume builder",
    "free resume maker",
    "resume templates",
    "create resume online",
    "jobzenter resume",
    "download resume pdf",
  ],
  openGraph: {
    title: "Free Resume Builder – Jobzenter Resume Maker",
    description:
      "Build your resume in minutes with professional templates. Fully customizable and free to download.",
    url: "https://jobzenter.in/interview-study",
    siteName: "Jobzenter",
    type: "website",
    images: [
      {
        url: "https://jobzenter.in/resume-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jobzenter Resume Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Resume Builder – Jobzenter",
    description:
      "Create job-ready resumes with modern templates.",
    images: ["https://jobzenter.in/resume-og.jpg"],
  },
};

// ---------------- Page Component ----------------
export default function InterviewStudy() {
  return (
    <>
      {/* JSON-LD Schema for Resume Builder Tool */}
      <Script
        id="resume-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Jobzenter Resume Builder",
            url: "https://jobzenter.in/interview-study",
            applicationCategory: "Resume Builder Tool",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "INR",
            },
            description:
              "A free online resume builder to create modern, professional resumes with downloadable templates.",
            provider: {
              "@type": "Organization",
              name: "Jobzenter",
              url: "https://jobzenter.in",
              logo: "https://jobzenter.in/logo.png",
            },
          }),
        }}
      />

      <Resume />
    </>
  );
}
