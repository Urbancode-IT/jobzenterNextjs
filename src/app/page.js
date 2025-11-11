//src/app/page.js
import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/Carousal";
import FaqSection from "@/components/FaqSection";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import StudentReviews from "@/components/StudentReviews";
import TopRatedCourses from "@/components/TopRatedCourse";
import { Car } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <HeroSection />
    <Carousel />
    <GetStarted />
    <AboutSection />
    <TopRatedCourses />
    <FaqSection />
    <StudentReviews />
    </>
  );
}
