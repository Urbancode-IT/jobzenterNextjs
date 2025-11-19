"use client";
import React from "react";
import PlacementStudent from "@/components/placement/PlacementStudent";
import InterviewTrainingCell from "@/components/placement/InterviewTrainingCell";
import InterviewOffers from "@/components/placement/InterviewOffers";
import WhatWeOffer from "@/components/placement/WhatWe";
import WhoIsThisFor from "@/components/placement/WhoIsThisFor";
import HeroPlacement from "@/components/placement/HeroPlacement";

export default function PlacementPreparationPage() {
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
