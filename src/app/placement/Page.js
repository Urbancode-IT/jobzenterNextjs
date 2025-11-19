"use client";
import React from "react";
import HeroPlacement from "@/components/placement/HeroPlacement";
import PlacementStudent from "@/components/placement/PlacementStudent";
import InterviewTrainingCell from "@/components/placement/InterviewTrainingCell";
import InterviewOffers from "@/components/placement/InterviewOffers";
import WhatWeOffer from "@/components/placement/WhatWe";
import WhoIsThisFor from "@/components/placement/WhoIsThisFor";

export default function PlacementPage() {
	return (
		<>
			<HeroPlacement />
			<PlacementStudent />
			<InterviewTrainingCell />
			<InterviewOffers />
			<WhatWeOffer />
			<WhoIsThisFor />
		</>
	);
}
