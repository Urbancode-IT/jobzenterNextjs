"use client";

import React from "react";
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

const TestimonialsSection = () => {
  return (
    <section className="study-abroad-testimonials">
      <div className="container">
        <h2 className="study-abroad-testimonials-title">
          Student Success Stories
        </h2>
        <p className="study-abroad-testimonials-subtitle">
          Hear from our students who are now living their dreams abroad.
        </p>
        <div className="study-abroad-testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="study-abroad-testimonial-card">
              <img
                src={t.img}
                alt={t.name}
                className="study-abroad-testimonial-avatar"
              />
              <div className="study-abroad-testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="study-abroad-testimonial-star" />
                ))}
              </div>
              <p className="study-abroad-testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <h4 className="study-abroad-testimonial-name">{t.name}</h4>
              <p className="study-abroad-testimonial-university">{t.university}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
