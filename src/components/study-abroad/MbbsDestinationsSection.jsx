"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { mbbsDestinations } from "@/data/mbbsDestinations";
import StudyAbroadEnquiryModal from "./StudyAbroadEnquiryModal";
import "./MbbsDestinationsSection.css";

const MbbsDestinationsSection = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSweepActive, setIsSweepActive] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSweepActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const openEnquiry = (country) => {
    setActiveCountry(country);
    setIsEnquiryOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute left-6 top-10 hidden grid-cols-4 gap-2 sm:grid">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#FFD100]/60" />
        ))}
      </div>
      <div className="pointer-events-none absolute right-6 top-10 hidden items-end sm:flex">
        <svg width="110" height="56" viewBox="0 0 110 56" fill="none" className="text-[#FFD100]">
          <path
            d="M2 52C20 54 38 50 50 36C62 22 70 10 106 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 6"
          />
        </svg>
        <span className="-ml-2 -mt-1 text-3xl text-[#FFD100]">✈</span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2
            ref={titleRef}
            className={`mbbs-dest-title ${isSweepActive ? "title-sweep" : ""}`}
          >
            Top MBBS Destinations Abroad
          </h2>
          <p className="mx-auto text-sm leading-relaxed text-neutral-600 sm:text-base">
            Choose from the most preferred countries for MBBS with affordable
            tuition fees, globally recognized universities, and excellent
            career opportunities.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mbbsDestinations.map((country) => (
            <div
              key={country.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white">
                  <span
                    className={`fi fi-${country.flag} fis`}
                    style={{ width: "1.5rem", height: "1.5rem", borderRadius: "9999px" }}
                    aria-label={`${country.name} flag`}
                  />
                </span>
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
                <h3 className="mbbs-card-title">{country.name}</h3>
                <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFD100]/15 px-3 py-1 text-xs font-bold text-[#7a5d00]">
                  🎓 {country.duration}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {country.tuitionFrom} · {country.tag}
                </p>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => openEnquiry(country)}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#F9F58B] text-sm font-bold text-[#111111] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD100] hover:shadow-lg active:translate-y-0 active:scale-95"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StudyAbroadEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        selectedCountry={activeCountry?.name ?? ""}
      />
    </section>
  );
};

export default MbbsDestinationsSection;
