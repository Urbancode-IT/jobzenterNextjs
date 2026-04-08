"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./StudyAbroadHero.css";

const StudyAbroadHero = () => {
  return (
    <section className="study-abroad-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 study-abroad-hero-left">
            <h1 className="study-abroad-hero-title">
              Start Your{" "}
              <span className="study-abroad-hero-highlight">
                <span className="highlight-text">Global</span>
              </span>
              <br />
              Education Journey Today
            </h1>
            <p className="study-abroad-hero-subtext">
              Unlock a world of opportunities. We help you get admitted to top
              universities in the USA, UK, Canada, and beyond with 100%
              scholarship assistance.
            </p>
            <div className="study-abroad-trusted">
              <div className="study-abroad-avatars">
                <img src="/feed1.png" alt="" className="study-abroad-avatar" />
                <img src="/feed2.png" alt="" className="study-abroad-avatar" />
                <img src="/feed3.png" alt="" className="study-abroad-avatar" />
              </div>
              <span className="study-abroad-plus2k">+2k</span>
              <span className="study-abroad-trusted-text">
                Trusted by 2,000+ students worldwide
              </span>
            </div>
          </div>
          <div className="col-lg-6 study-abroad-hero-right">
            <div className="study-abroad-hero-img-wrap">
              <img
                src="/Study-Abroad/Container.png"
                alt="Students studying together"
                className="study-abroad-hero-img"
              />
              <div className="study-abroad-floating-card study-abroad-card-visa">
                <div className="study-abroad-card-visa-inner">
                  <i className="bi bi-check-circle-fill study-abroad-card-icon study-abroad-card-icon-green" aria-hidden />
                  <span>Visa Approved</span>
                </div>
                <span className="study-abroad-card-visa-line" aria-hidden />
              </div>
              <div className="study-abroad-floating-card study-abroad-card-rate">
                <i className="bi bi-mortarboard-fill study-abroad-card-icon study-abroad-card-icon-yellow" aria-hidden />
                <div className="study-abroad-card-rate-text">
                  <span className="study-abroad-card-rate-label">University Acceptance</span>
                  <span className="study-abroad-card-rate-value">98% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadHero;