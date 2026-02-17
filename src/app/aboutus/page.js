import React from "react";
import HeroSection from "@/components/aboutus/HeroAbout";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import MissionVision from "@/components/aboutus/MissionVision";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";

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
