"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const courses = [
    "AWS",
    "Software Testing",
    "Fullstack Development",
    "Business Intelligence",
    "CCNA",
    "Medical Billing",
  ];

  const quickLinks = [
    "Terms and Conditions",
    "Privacy Policy",
    "Disclaimer",
    "Courses We Offer",
  ];

  const servicesLinks = [
    "Resume Building",
    "Interview Preparation",
    "Job Portal Access",
    "Career Counseling",
    "Bootcamps",
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="container-fluid footer-container">
        <div className="row footer-top g-4">
          <div className="col-lg-2 col-md-4 footer-column">
            <h3 className="footer-title">Courses</h3>
            <ul className="list-unstyled footer-list">
              {courses.map((course, index) => (
                <li key={index} className="footer-list-item">
                  <ChevronRight className="footer-list-icon" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="list-unstyled footer-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-list-item">
                  <ChevronRight className="footer-list-icon" />
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 footer-column">
            <h3 className="footer-title">Services Links</h3>
            <ul className="list-unstyled footer-list">
              {servicesLinks.map((service, index) => (
                <li key={index} className="footer-list-item">
                  <ChevronRight className="footer-list-icon" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6 footer-subscribe-wrapper">
            <div className="footer-subscribe">
              <h3 className="footer-subscribe-title">Subscribe</h3>
              <form onSubmit={handleSubscribe} className="footer-subscribe-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="footer-subscribe-input"
                  required
                />
                <button type="submit" className="footer-subscribe-button">
                  <ArrowRight className="footer-subscribe-icon" />
                </button>
              </form>
              <h4 className="footer-subscribe-heading">
                Stay in the loop with our newsletter!
              </h4>
              <p className="footer-subscribe-text">
                Subscribe to our newsletter and unlock a world of exclusive
                benefits. Be the first to know about our latest products, special
                promotions, and exciting updates. Join our community of like-minded
                individuals.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <p className="footer-copy mb-3 mb-lg-0">© 2026 All Rights Reserved</p>

          <div className="footer-social d-flex align-items-center">
            <Link href="#" className="footer-social-link" aria-label="Facebook">
              <img src="/facebook.png" alt="Facebook" />
            </Link>
            <Link href="#" className="footer-social-link" aria-label="Twitter">
              <img src="/twitter.png" alt="Twitter" />
            </Link>
            <Link href="#" className="footer-social-link" aria-label="Instagram">
              <img src="/instagram.png" alt="Instagram" />
            </Link>
            <Link href="#" className="footer-social-link" aria-label="YouTube">
              <img src="/youtube.png" alt="YouTube" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
