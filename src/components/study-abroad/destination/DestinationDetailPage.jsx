"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getOtherDestinations, getShortName } from "@/data/studyAbroadDestinations";
import StudyAbroadEnquiryModal from "../StudyAbroadEnquiryModal";
import "./DestinationDetailPage.css";

const PATHWAY_ITEMS = [
  { icon: "bi-person-check", label: "Personalised Guidance", color: "#fdf001" },
  { icon: "bi-book", label: "English Coaching", color: "#5b9bd5" },
  { icon: "bi-building", label: "University Shortlist", color: "#e85d5d" },
  { icon: "bi-patch-check", label: "Visa Assurance", color: "#ca8a04" },
];

export default function DestinationDetailPage({ destination }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [faqPage, setFaqPage] = useState(0);

  const others = getOtherDestinations(destination.slug);
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
              alt={`Study in ${destination.shortName}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="dest-hero-banner-img"
              style={{ objectPosition: destination.heroImagePosition ?? "center center" }}
            />
            <div className="dest-hero-banner-overlay" aria-hidden />
            <div className="dest-hero-banner-content">
              <div className="dest-hero-copy">
                <h1>
                  Study in <span className="dest-accent">{destination.shortName}</span>
                </h1>
                <p>{destination.heroSubtitle}</p>
              </div>
              <button type="button" className="dest-hero-cta" onClick={openEnquiry}>
                <i className="bi bi-calendar2-check" aria-hidden />
                Book a demo
              </button>
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
                Begin Your Journey in <span className="dest-accent">{destination.shortName}</span>
              </h2>
              {destination.journeyParagraphs.map((para) => (
                <p key={para.slice(0, 40)} className="dest-body-text">
                  {para}
                </p>
              ))}
            </div>
            <div className="col-lg-5">
              <button
                type="button"
                className="dest-fund-card"
                onClick={openEnquiry}
              >
                <span className="dest-fund-icon" aria-hidden>
                  <i className="bi bi-award" />
                </span>
                <div>
                  <strong>Fund Your Education</strong>
                  <p>
                    Get up to 100% scholarships, education loans, and financial
                    planning support for {destination.name}.
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
                Key Advantages of <span className="dest-accent">{destination.shortName}</span>
              </h2>
              <ol className="dest-advantages-list">
                {destination.advantages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6">
              <div className="dest-pathway-card">
                <h3>
                  Your Pathway to Success in {destination.shortName}
                </h3>
                <div className="dest-pathway-grid">
                  {PATHWAY_ITEMS.map((item) => (
                    <div key={item.label} className="dest-pathway-item">
                      <span
                        className="dest-pathway-icon"
                        style={{ background: item.color }}
                      >
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
              <h3 className="dest-subheading">Popular Academic Disciplines</h3>
              <p className="dest-body-text">{destination.disciplines}</p>
            </div>
            <div className="col-md-6">
              <h3 className="dest-subheading">
                Undergraduate &amp; Postgraduate Opportunities
              </h3>
              <p className="dest-body-text">{destination.ugPg}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dest-faq-section">
        <div className="container dest-faq-container">
          <h2 className="dest-faq-title">Got Questions? We have Answers</h2>
          <p className="dest-faq-subtitle">
            Find quick answers to common queries about studying in {destination.name}
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
          <h2 className="dest-more-title">Discover More Global Opportunities</h2>
          <div className="row g-4 justify-content-center">
            {others.map((country) => (
              <div key={country.slug} className="col-6 col-md-4 col-lg-3">
                <Link href={`/study-abroad/${country.slug}`} className="dest-more-card">
                  <div className="dest-more-img-wrap">
                    <Image
                      src={country.image}
                      alt={`Study in ${country.name}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="dest-more-img"
                    />
                  </div>
                  <div className="dest-more-card-body">
                    <h4>Study in {getShortName(country.slug, country.name)}</h4>
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
