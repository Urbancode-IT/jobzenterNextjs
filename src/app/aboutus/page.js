import React from "react";
import HeroSection from "@/components/aboutus/HeroAbout";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import MissionVision from "@/components/aboutus/MissionVision";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";

export const metadata = {
	title: "About Us | Jobzenter - Our Mission and Vision",
	description: "Learn more about Jobzenter, our mission to provide quality IT training, and our vision to empower the next generation of tech professionals.",
	alternates: {
		canonical: "https://jobzenter.in/aboutus",
	},
};

export default function AboutUsPage() {
	return (
		<>
			<HeroSection />
			<WhoWeAre />
			<MissionVision />
			<WhyChooseUs />
		</>
	);
}
