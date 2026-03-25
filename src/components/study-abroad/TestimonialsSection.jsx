"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Sarah Jenkins",
    university: "University of Toronto, Canada",
    text: "Thanks to the team, I got admission to a top university in Canada with a scholarship! The visa process was seamless and stress-free.",
    img: "/feed1.png",
  },
  {
    name: "Michael Chen",
    university: "TU Munich, Germany",
    text: "The counselors were extremely helpful in shortlisting universities that matched my profile. I'm now pursuing my Masters in Germany.",
    img: "/feed2.png",
  },
  {
    name: "Priya Sharma",
    university: "University of Melbourne, Australia",
    text: "From IELTS coaching to accommodation assistance, they handled everything. Highly recommend their services to anyone planning to study abroad.",
    img: "/feed3.png",
  },
];

const AnimatedTestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`study-abroad-testimonial-card ${isVisible ? "card-entrance" : "card-hidden"}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <img
        src={testimonial.img}
        alt={testimonial.name}
        className="study-abroad-testimonial-avatar"
      />
      <div className="study-abroad-testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="study-abroad-testimonial-star" />
        ))}
      </div>
      <p className="study-abroad-testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
      <h4 className="study-abroad-testimonial-name">{testimonial.name}</h4>
      <p className="study-abroad-testimonial-university">{testimonial.university}</p>
    </div>
  );
};

const TestimonialsSection = () => {
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="study-abroad-testimonials py-5">
      <div className="container text-center">
        <h2
          ref={titleRef}
          className={`study-abroad-testimonials-title ${isSweepActive ? "title-sweep" : ""}`}
        >
          Student Success Stories
        </h2>
        <p className="study-abroad-testimonials-subtitle">
          Hear from our students who are now living their dreams abroad.
        </p>
        <div className="study-abroad-testimonials-grid">
          {testimonials.map((t, index) => (
            <AnimatedTestimonialCard key={t.name} testimonial={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
