"use client";
import React from "react";
import PlacementStudent from "@/components/placement/PlacementStudent";
import InterviewOffers from "@/components/placement/InterviewOffers";
import WhatWeOffer from "@/components/placement/WhatWe";
import WhoIsThisFor from "@/components/placement/WhoIsThisFor";
import HeroPlacement from "@/components/placement/HeroPlacement";
import Questions from "@/components/courses/Questions";
import ResumeRegister from "@/components/resumeBuild/components/ResumeRegister";

const placementFaqData = [
  {
    question: "What is Placement Services?",
    answer: "Our Placement Services connect skilled candidates with top companies. We bridge the gap between job seekers and employers by providing end-to-end support — from resume building to interview preparation and final placement."
  },
  {
    question: "Who is eligible for placement support?",
    answer: "Any student or professional who has completed our training programs is eligible. We also support freshers and career switchers who are looking to enter the IT industry with the right skills and guidance."
  },
  {
    question: "What companies do you work with?",
    answer: "We have tie-ups with 100+ companies ranging from startups to MNCs. Our network includes companies in software development, testing, networking, cloud computing, and more across India."
  },
  {
    question: "How long does the placement process take?",
    answer: "The placement process typically takes 4–8 weeks after course completion. This includes resume preparation, mock interviews, and job referrals. The timeline may vary based on your skills and market demand."
  },
  {
    question: "Is placement guaranteed?",
    answer: "We provide 100% placement assistance — meaning we actively support you until you land a job. While we cannot guarantee a specific salary or company, we ensure you get maximum interview opportunities."
  },
  {
    question: "How do I register for placement services?",
    answer: "Simply fill out the registration form on this page or contact our team directly. Once registered, our placement coordinator will reach out to guide you through the next steps."
  },
];

const placementRegisterSubtext =
  "Register for placement preparation support — fill out the form and our team will contact you with next steps, guidance, and program details.";

export default function PlacementPreparationPage() {
  return (
    <>
      <HeroPlacement />
      <PlacementStudent />
      <InterviewOffers />
      <WhatWeOffer />
      <WhoIsThisFor />
      <ResumeRegister
        sectionId="placement-register"
        emailVia="Placement preparation page Registration"
        title="Register Using The Form"
        subtext={placementRegisterSubtext}
      />
      <Questions data={placementFaqData} />
    </>
  );
}
