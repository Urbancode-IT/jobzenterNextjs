"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getOtherMbbsDestinations } from "@/data/mbbsDestinations";
import StudyAbroadEnquiryModal from "../StudyAbroadEnquiryModal";
import "../destination/DestinationDetailPage.css";
import "./MbbsDestinationDetailPage.css";

const PATHWAY_ITEMS = [
  { icon: "bi-clipboard-check", label: "NEET Eligibility Check", color: "#fdf001" },
  { icon: "bi-building", label: "University Selection", color: "#5b9bd5" },
  { icon: "bi-file-earmark-text", label: "Document & SOP Support", color: "#e85d5d" },
  { icon: "bi-patch-check", label: "Visa Assurance", color: "#ca8a04" },
];

export default function MbbsDestinationDetailPage({ destination }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [faqPage, setFaqPage] = useState(0);

  const others = getOtherMbbsDestinations(destination.slug);
  const faqsPerPage = 5;
  const faqPages = Math.ceil(destination.faqs.length / faqsPerPage);
  const visibleFaqs = destination.faqs.slice(
    faqPage * faqsPerPage,
    faqPage * faqsPerPage + faqsPerPage
  );

  const openEnquiry = () => setIsEnquiryOpen(true);

  return (
    <main className="destination-detail-page">
      {/* Hero banner */}
      <section className="dest-hero-wrap">
        <div className="container">
          <div className="dest-hero-banner">
            <Image
              src={destination.image}
              alt={`MBBS in ${destination.name}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="dest-hero-banner-img"
            />
            <div className="dest-hero-banner-overlay" aria-hidden />
            <div className="dest-hero-banner-content">
              <div className="dest-hero-copy">
                <h1>
                  MBBS in <span className="dest-accent">{destination.name}</span>
                </h1>
                <p>{destination.heroSubtitle}</p>
                <div className="mbbs-hero-tags">
                  <span className="mbbs-hero-tag">🎓 {destination.duration}</span>
                  <span className="mbbs-hero-tag">{destination.tag}</span>
                  <span className="mbbs-hero-tag">{destination.tuitionFrom}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Begin journey + fund card */}
      <section className="dest-journey-section">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <h2 className="dest-section-title">
                Begin Your MBBS Journey in <span className="dest-accent">{destination.name}</span>
              </h2>
              {destination.journeyParagraphs.map((para) => (
                <p key={para.slice(0, 40)} className="dest-body-text">
                  {para}
                </p>
              ))}
            </div>
            <div className="col-lg-5">
              <button type="button" className="dest-fund-card" onClick={openEnquiry}>
                <span className="dest-fund-icon" aria-hidden>
                  <i className="bi bi-award" />
                </span>
                <div>
                  <strong>Fund Your MBBS</strong>
                  <p>
                    Get education loan guidance and fee planning support for MBBS in{" "}
                    {destination.name}.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages + pathway */}
      <section className="dest-advantages-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <h2 className="dest-section-title">
                Key Advantages of <span className="dest-accent">{destination.name}</span>
              </h2>
              <ol className="dest-advantages-list">
                {destination.advantages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6">
              <div className="dest-pathway-card">
                <h3>Your Pathway to Becoming a Doctor</h3>
                <div className="dest-pathway-grid">
                  {PATHWAY_ITEMS.map((item) => (
                    <div key={item.label} className="dest-pathway-item">
                      <span className="dest-pathway-icon" style={{ background: item.color }}>
                        <i className={`bi ${item.icon}`} aria-hidden />
                      </span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <button type="button" className="dest-callback-btn" onClick={openEnquiry}>
                  Request Callback
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4 dest-disciplines-row">
            <div className="col-md-6">
              <h3 className="dest-subheading">Top Universities</h3>
              <div className="mbbs-chip-list">
                {destination.topUniversities.map((uni) => (
                  <span key={uni} className="mbbs-chip">
                    {uni}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="dest-subheading">Eligibility &amp; Admission Process</h3>
              <p className="dest-body-text">{destination.eligibility}</p>
              <p className="dest-body-text">{destination.admissionProcess}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MBBS snapshot: fees, living cost, hostel, career */}
      <section className="mbbs-snapshot-section">
        <div className="container">
          <h2 className="dest-section-title text-center">
            MBBS in <span className="dest-accent">{destination.name}</span> at a Glance
          </h2>
          <div className="mbbs-fact-grid">
            <div className="mbbs-fact-card">
              <span className="mbbs-fact-icon">
                <i className="bi bi-cash-coin" />
              </span>
              <h4>Tuition Fees</h4>
              <p>{destination.tuitionFees}</p>
            </div>
            <div className="mbbs-fact-card">
              <span className="mbbs-fact-icon">
                <i className="bi bi-house-door" />
              </span>
              <h4>Living Cost</h4>
              <p>{destination.livingCost}</p>
            </div>
            <div className="mbbs-fact-card">
              <span className="mbbs-fact-icon">
                <i className="bi bi-building" />
              </span>
              <h4>Hostel Facilities</h4>
              <p>{destination.hostelFacilities}</p>
            </div>
            <div className="mbbs-fact-card">
              <span className="mbbs-fact-icon">
                <i className="bi bi-briefcase" />
              </span>
              <h4>Career Opportunities</h4>
              <p>{destination.careerOpportunities}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dest-faq-section">
        <div className="container dest-faq-container">
          <h2 className="dest-faq-title">Got Questions? We have Answers</h2>
          <p className="dest-faq-subtitle">
            Find quick answers to common queries about MBBS in {destination.name}
          </p>
          <div className="dest-faq-list">
            {visibleFaqs.map((faq, idx) => {
              const globalIdx = faqPage * faqsPerPage + idx;
              const isOpen = openFaq === globalIdx;
              return (
                <div
                  key={faq.q}
                  className={`dest-faq-item ${isOpen ? "dest-faq-item--open" : ""}`}
                >
                  <button
                    type="button"
                    className="dest-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : globalIdx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="dest-faq-toggle" aria-hidden>
                      <i className={`bi ${isOpen ? "bi-dash" : "bi-plus"}`} />
                    </span>
                  </button>
                  {isOpen && <div className="dest-faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
          {faqPages > 1 && (
            <div className="dest-faq-pagination">
              <button
                type="button"
                className="dest-faq-nav"
                disabled={faqPage === 0}
                onClick={() => {
                  setFaqPage((p) => Math.max(0, p - 1));
                  setOpenFaq(null);
                }}
                aria-label="Previous FAQs"
              >
                <i className="bi bi-chevron-left" />
              </button>
              <div className="dest-faq-dots">
                {Array.from({ length: faqPages }).map((_, i) => (
                  <span
                    key={i}
                    className={i === faqPage ? "dest-faq-dot active" : "dest-faq-dot"}
                  />
                ))}
              </div>
              <button
                type="button"
                className="dest-faq-nav dest-faq-nav--next"
                disabled={faqPage >= faqPages - 1}
                onClick={() => {
                  setFaqPage((p) => Math.min(faqPages - 1, p + 1));
                  setOpenFaq(null);
                }}
                aria-label="Next FAQs"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* More destinations */}
      <section className="dest-more-section">
        <div className="container">
          <h2 className="dest-more-title">Explore More MBBS Destinations</h2>
          <div className="row g-4 justify-content-center">
            {others.map((country) => (
              <div key={country.slug} className="col-6 col-md-4 col-lg-3">
                <Link href={`/study-abroad/mbbs/${country.slug}`} className="dest-more-card">
                  <div className="dest-more-img-wrap">
                    <Image
                      src={country.image}
                      alt={`MBBS in ${country.name}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="dest-more-img"
                    />
                  </div>
                  <div className="dest-more-card-body">
                    <h4>MBBS in {country.name}</h4>
                    <span className="dest-more-explore">
                      Explore <i className="bi bi-chevron-right" aria-hidden />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudyAbroadEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        selectedCountry={destination.name}
      />
    </main>
  );
}
