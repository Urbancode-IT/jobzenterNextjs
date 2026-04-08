import React from "react";
import StudyAbroadHero from "@/components/study-abroad/StudyAbroadHero";
import DestinationsSection from "@/components/study-abroad/DestinationsSection";
import ServicesSection from "@/components/study-abroad/ServicesSection";
import ConsultationSection from "@/components/study-abroad/ConsultationSection";
import TestimonialsSection from "@/components/study-abroad/TestimonialsSection";
import VideoIntro from "@/components/study-abroad/VideoIntro";

export const metadata = {
  title: "Study Abroad | Jobzenter – Study in USA, UK, Canada & More",
  description:
    "Start your global education journey. We help you get admitted to top universities in the USA, UK, Canada, Australia & beyond with 100% scholarship assistance and 98% visa success.",
  keywords: [
    "study abroad",
    "study in USA",
    "study in UK",
    "study in Canada",
    "scholarship assistance",
    "visa success",
    "study abroad consultancy",
  ],
  openGraph: {
    title: "Study Abroad – Jobzenter",
    description:
      "Unlock a world of opportunities. Get admitted to top universities with scholarship assistance.",
    url: "https://jobzenter.in/study-abroad",
    siteName: "Jobzenter",
    type: "website",
  },
};

export default function StudyAbroadPage() {
  return (
    <>
      <VideoIntro />
      <StudyAbroadHero />
      <DestinationsSection />
      <ServicesSection />
      <ConsultationSection />
      <TestimonialsSection />
    </>
  );
}