"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./HeroSection.css";
import EnquiryFormModal from "./enquiryForm/EnquiryFormModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="hero-centered-wrapper position-relative text-center">
      <div className="hero-gradient-overlay" />
      <div className="container position-relative z-3">
        {/* Top Badge */}
        <div className="d-flex justify-content-center">
          <motion.div 
            className="hero-top-badge mt-2 mt-md-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Made by Industry Experts, for Future Professionals
          </motion.div>
        </div>

        {/* Headings */}
        <motion.h1 
          className="hero-centered-title mt-4 mb-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Learn In-Demand Skills. <br />
          <span className="hero-title-highlight">
            <span className="hero-get-placed-highlight">
              <motion.span 
                className="hero-highlight-bg"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />
              <motion.span 
                className="hero-highlight-pop-text"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 1, ease: "backOut" }}
              >
                Get Placed
              </motion.span>
            </span> Faster.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="hero-centered-subtitle mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Master in-demand software skills with practical training, real projects, and placement support.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="d-flex justify-content-center gap-3 mt-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={() => setIsModalOpen(true)} className="btn hero-btn-dark">
            Enroll now
          </button>
          <Link href="/courses" className="btn hero-btn-outline">
            Explore courses
          </Link>
        </motion.div>

        {/* Floating Graphics & Image */}
        <motion.div 
          className="hero-graphics-container mt-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          
          {/* Main Character Image Wrap */}
          <div className="hero-character-wrap">
            <div className="hero-orange-bg"></div>
            <Image
              src="/hero-boy.jpg"
              alt="Student"
              width={400}
              height={450}
              className="hero-main-student-image"
              priority
            />
          </div>

          {/* Left Floating Card & Arrow */}
          <div className="hero-float-group left-group">
            <div className="float-card glass-dark-card position-relative">
              {/* Sparkle Burst */}
              <svg width="40" height="40" viewBox="0 0 40 40" style={{ position: "absolute", top: "-20px", right: "-10px", zIndex: -1 }}>
                <line x1="5" y1="25" x2="15" y2="15" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="12" x2="25" y2="0" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="25" y1="25" x2="35" y2="18" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className="mb-1">100%</h3>
              <p className="mb-0">Career-Focused Training</p>
            </div>
            {/* Arrow SVG pointing to left card */}
            <svg className="curved-arrow left-arrow d-none d-lg-block" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 55 5 Q 35 20 5 20" stroke="#888" strokeWidth="1.2"/>
              <path d="M 15 15 L 5 20 L 15 25" stroke="#888" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Right Floating Card & Arrow */}
          <div className="hero-float-group right-group">
            {/* Arrow SVG pointing to right card */}
            <svg className="curved-arrow right-arrow d-none d-lg-block" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 5 45 Q 35 25 75 25" stroke="#888" strokeWidth="1.2"/>
              <path d="M 65 20 L 75 25 L 65 30" stroke="#888" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="float-card glass-gold-card">
              <h3 className="mb-1">500+</h3>
              <p className="mb-2 text-muted">Students Trained</p>
              <div className="d-flex align-items-center gap-2 placement-row">
                 <span className="placement-text fw-medium">Placed in Top IT Companies</span>
                 <div className="profiles-stack d-flex">
                    <span className="profile-dot c-1"></span>
                    <span className="profile-dot c-2"></span>
                    <span className="profile-dot c-3"></span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;