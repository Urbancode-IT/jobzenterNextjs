import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/jobzenter",
      icon: FaLinkedinIn,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/jobzenter",
      icon: FaFacebookF,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/jobzenter_official?igsh=dWVwdGs1bWM4ZnBp",
      icon: FaInstagram,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@jobzenter",
      icon: FaYoutube,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919000000000",
      icon: FaWhatsapp,
    },
  ];

  const courses = [
    { label: "AWS", href: "/courses/aws" },
    { label: "Software Testing", href: "/courses/software-testing" },
    { label: "Fullstack Development", href: "/courses/fullstack-development" },
    { label: "Business Intelligence", href: "/courses/business-intelligence" },
    { label: "CCNA", href: "/courses/ccna" },
    { label: "Medical Billing", href: "/courses/medical-billing" },
  ];

  const quickLinks = [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Courses We Offer", href: "/courses" },
  ];

  const servicesLinks = [
    { label: "Bootcamps", href: "/services/bootcamps" },
    { label: "Resume Building", href: "/services/resume-building" },
    { label: "Interview Preparation", href: "/services/interview-preparation" },
  ];

  const contactDetails = [
    {
      icon: Mail,
      label: "support@jobzenter.com",
      href: "mailto:support@jobzenter.com",
    },
    {
      icon: Phone,
      label: "+91 90000 00000",
      href: "tel:+919000000000",
    },
    {
      icon: MapPin,
      label: "Chennai, Tamil Nadu",
      href: "/reach-us",
    },
  ];

  return (
    <footer className="footer">
      <div className="container-fluid footer-container">
        <div className="footer-surface">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="/logo.webp"
                alt="Jobzenter Logo"
                className="footer-logo"
              />
              <p className="footer-social-title">Social Media</p>
              <div className="footer-social">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social-pill"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Courses</h4>
              <ul className="footer-list">
                {courses.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Services Links</h4>
              <ul className="footer-list">
                {servicesLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact With Us</h4>
              <ul className="footer-contact-list">
                {contactDetails.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Icon size={18} className="footer-contact-icon" />
                    {href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? (
                      <a href={href} className="footer-contact-link">
                        {label}
                      </a>
                    ) : (
                      <Link href={href} className="footer-contact-link">
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copy">Copyright © 2025 Jobzenter. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;