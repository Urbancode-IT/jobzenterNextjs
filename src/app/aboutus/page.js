import React from "react";
import HeroSection from "@/components/aboutus/HeroAbout";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import MissionVision from "@/components/aboutus/MissionVision";
import FutureSection from "@/components/FutureSection";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";
import Questions from "@/components/courses/Questions";

const aboutFaqData = [{
            question: "How does cloud computing support scalable infrastructure ?",
            answer: " Cloud computing enables dynamic resource allocation based on demand. It eliminates the need for heavy upfront infrastructure investment. Businesses can scale resources efficiently and cost-effectively. It also ensures high availability and disaster recovery. This makes cloud platforms highly adaptable for modern applications."
        },
        {
            question: "How does AWS ensure security for applications and data ?",
            answer: " AWS provides multiple layers of security including encryption and access control mechanisms. Identity and Access Management (IAM) ensures controlled user permissions. Continuous monitoring helps detect and prevent threats. AWS complies with global security standards and best practices. This makes it a trusted platform for secure application deployment."
        },
        {
            question: "Why is database design critical for data integrity ?",
            answer: " Database design is essential for maintaining structured, consistent, and reliable data storage. It minimizes redundancy and ensures proper data normalization. Efficient schema design improves query performance and scalability. Security measures also protect sensitive data. This ensures accurate and dependable data management."
        },
        {
            question: "How does frontend architecture impact application performance ?",
            answer: " Frontend architecture significantly determines the efficiency, responsiveness, and usability of a web application. A well-structured frontend ensures optimal rendering and smooth user interaction. It improves performance by reducing load time and enhancing responsiveness. Modern frameworks also contribute to scalability and maintainability. This directly influences user experience and engagement."
        },
        {
            question: "How does backend development ensure system reliability ?",
            answer: " Backend development manages server-side logic, data processing, and application workflows. It ensures reliability through proper error handling and efficient request management. Scalable backend systems can handle multiple users simultaneously. Integration with databases and services is also streamlined. This guarantees stable and consistent application performance."
        }
    ];

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs showWhyChoose={false} />
      <FutureSection />
      <Questions data={aboutFaqData} />
    </>
  );
}