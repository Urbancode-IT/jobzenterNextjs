'use client';
import ResumeHero from "./components/ResumeHero";
import ResumeRegister from "./components/ResumeRegister";
import ResumeImportance from "./components/ResumeImportance";
import ResumeKey from "./components/ResumeKey";
import Questions from "@/components/courses/Questions";

const resumeFaqData = [
  {
    question: "What is Resume Building?",
    answer: "Resume building is the process of creating a professional document that showcases your skills, experience, and achievements to potential employers. A well-crafted resume increases your chances of landing interviews and securing your dream job."
  },
  {
    question: "Who is this Resume Building course for?",
    answer: "This course is for fresh graduates, job seekers, and working professionals who want to create a standout resume. Whether you're applying for your first job or switching careers, this course will help you craft a powerful CV."
  },
  {
    question: "What will I learn in this course?",
    answer: "You will learn resume structure mastery, ATS optimization techniques, tailored content creation, professional formatting, keyword strategies, and how to write a compelling career summary that gets noticed by recruiters."
  },
  {
    question: "What is ATS and why does it matter?",
    answer: "ATS stands for Applicant Tracking System — software used by companies to filter resumes before a human reads them. Our course teaches you how to optimize your resume to pass ATS screening and reach the hiring manager's desk."
  },
  {
    question: "Will I get feedback on my resume?",
    answer: "Yes! Our experts provide detailed, personalized feedback and revision support to ensure your resume is polished, professional, and ready to submit to top companies."
  },
  {
    question: "How long does it take to complete?",
    answer: "The course is flexible and self-paced. Most students complete it within a few days. You'll have lifetime access to all materials so you can revisit and update your resume anytime."
  },
];

function Resume() {
  return (
    <>
      <ResumeHero />
      <ResumeRegister />
      <ResumeImportance />
      <ResumeKey />
      <Questions data={resumeFaqData} />
    </>
  );
}

export default Resume;
