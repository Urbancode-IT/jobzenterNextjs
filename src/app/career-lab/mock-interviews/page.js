import Career from "@/components/career-labs/Mockinterviews/Career";
import Script from "next/script";

// ----------- SEO Metadata -----------
export const metadata = {
  title: "Mock Interviews – Practice Technical & HR Rounds | Jobzenter",
  description:
    "Prepare for real job interviews with Jobzenter's Mock Interview sessions. Practice HR, Technical, and Coding interviews with industry experts.",
  keywords: [
    "mock interviews",
    "technical mock interview",
    "hr mock interview",
    "coding interview practice",
    "job interview preparation",
    "interview coaching",
    "jobzenter mock interview",
  ],
  alternates: {
    canonical: "https://jobzenter.in/career-lab/mock-interviews",
  },
  openGraph: {
    title: "Mock Interviews – Ace Your Technical & HR Interviews | Jobzenter",
    description:
      "Get real interview experience through Jobzenter's Mock Interview sessions. Improve confidence and boost placement chances.",
    url: "https://jobzenter.in/career-lab/mock-interviews",
    siteName: "Jobzenter",
    type: "website",
    images: [
      {
        url: "https://jobzenter.in/mock-interview-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mock Interview Coaching - Jobzenter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobzenter Mock Interviews – Real Interview Practice",
    description:
      "Prepare for your next job interview with expert-led mock sessions.",
    images: ["https://jobzenter.in/mock-interview-og.jpg"],
  },
};

// ------------ Page Component ------------
export default function Bootcamps() {
  return (
    <>
      {/* JSON-LD Schema: Mock Interview Service */}
      <Script
        id="mock-interview-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Jobzenter Mock Interview Program",
            url: "https://jobzenter.in/career-lab/mock-interviews",
            description:
              "Mock Interview training including HR rounds, technical interviews, coding tests, and soft skill assessment.",
            provider: {
              "@type": "Organization",
              name: "Jobzenter",
              url: "https://jobzenter.in",
              logo: "https://jobzenter.in/logo.png",
            },
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "INR",
              description: "Free mock interview sessions for Jobzenter students",
            },
          }),
        }}
      />

      <Career />
    </>
  );
}
