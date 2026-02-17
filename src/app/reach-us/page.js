import ReachUs from "@/components/reach-us/ReachUs";
import Script from "next/script";

// ----------- SEO Metadata -----------
export const metadata = {
  title: "Contact Jobzenter – Reach Us for Courses, Support & Admissions",
  description:
    "Get in touch with Jobzenter for course details, admissions, placement support, mock interviews, and training assistance. We're here to help you build your career.",
  keywords: [
    "contact jobzenter",
    "jobzenter contact",
    "reach jobzenter",
    "jobzenter address",
    "jobzenter phone number",
    "training institute contact",
    "it training support",
  ],
  alternates: {
    canonical: "https://jobzenter.in/reach-us",
  },
  openGraph: {
    title: "Reach Us – Contact Jobzenter",
    description:
      "Have questions about IT courses, training, career support, or placements? Contact Jobzenter today.",
    url: "https://jobzenter.in/reach-us",
    siteName: "Jobzenter",
    type: "website",
    images: [
      {
        url: "https://jobzenter.in/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jobzenter Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jobzenter – We're Here to Help",
    description: "Reach out for training details, support, or admissions.",
    images: ["https://jobzenter.in/contact-og.jpg"],
  },
};

// ----------- Page Component -----------
export default function Page() {
  return (
    <>
      {/* JSON-LD Schema for Contact Page */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Reach Us – Jobzenter",
            url: "https://jobzenter.in/reach-us",
            description:
              "Contact Jobzenter for course inquiries, support, admissions, and placement assistance.",
            publisher: {
              "@type": "Organization",
              name: "Jobzenter",
              url: "https://jobzenter.in",
              logo: "https://jobzenter.in/logo.png",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi", "Tamil"],
            },
          }),
        }}
      />

      <ReachUs />
    </>
  );
}
