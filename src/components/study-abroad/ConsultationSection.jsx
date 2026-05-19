"use client";

import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";
import "./ConsultationSection.css";

const ConsultationSection = () => {
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
  const formRef = useRef(null);
  const cardRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", preferredCountry: "",
    educationLevel: "", preferredCourse: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const stateKey = name === "user_query" ? "message" : name;
    setFormData((prev) => ({ ...prev, [stateKey]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Mail setup missing. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.",
      });
      return;
    }
    setLoading(true);
    setStatus({ type: "loading", message: "Sending..." });
    const fullMessage = [
      "Study Abroad - Free Consultation",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Preferred Country: ${formData.preferredCountry || "-"}`,
      `Education Level: ${formData.educationLevel || "-"}`,
      `Preferred Course: ${formData.preferredCourse || "-"}`,
      "", "Message / Query:", formData.message || "-",
    ].join("\n");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: formData.name,
          last_name: "",
          from_email: formData.email,
          phone: formData.phone,
          subject: "Study Abroad - Free Consultation",
          message: fullMessage,
          source: "consultation",
          country: formData.preferredCountry || "-",
          education_level: formData.educationLevel || "-",
          preferred_course: formData.preferredCourse || "-",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          {
            to_email: formData.email,
            to_name: formData.name,
            first_name: formData.name,
            last_name: "",
            from_email: formData.email,
            phone: formData.phone,
            subject: "Study Abroad - Free Consultation",
            message: fullMessage,
            source: "consultation",
            country: formData.preferredCountry || "-",
            education_level: formData.educationLevel || "-",
            preferred_course: formData.preferredCourse || "-",
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      }
      setStatus({ type: "success", message: "Thank you! Our study abroad experts will contact you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", preferredCountry: "", educationLevel: "", preferredCourse: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "Could not send. Check your connection or try again." });
    } finally {
      setLoading(false);
    }
  };

  const bullets = ["Profile Evaluation", "University Shortlisting", "Scholarship Assessment"];

  return (
    <section className="study-abroad-consultation">
      <div className="container">
        <div
          ref={cardRef}
          className="study-abroad-consultation-card"
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Left Side */}
          <div
            className="study-abroad-consultation-left"
            style={{
              opacity: cardVisible ? 1 : 0,
              transform: cardVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <h2 className="study-abroad-consultation-title">
              Get Your Free Consultation Today
            </h2>
            <p className="study-abroad-consultation-desc">
              Fill the form and our study abroad experts will contact you within
              24 hours to discuss your profile and options.
            </p>
            <ul className="study-abroad-consultation-bullets">
              {bullets.map((item, i) => (
                <li
                  key={item}
                  style={{
                    opacity: cardVisible ? 1 : 0,
                    transform: cardVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.5s ease ${0.6 + i * 0.15}s, transform 0.5s ease ${0.6 + i * 0.15}s`,
                  }}
                >
                  <span className="study-abroad-bullet-check">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Form */}
          <div
            className="study-abroad-consultation-form-wrap"
            style={{
              opacity: cardVisible ? 1 : 0,
              transform: cardVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="study-abroad-form-fields">

                <div className="study-abroad-form-group study-abroad-form-group-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="study-abroad-form-input"
                    placeholder="Full Name"
                    aria-label="Full Name"
                  />
                  {errors.name && <small className="study-abroad-form-error">{errors.name}</small>}
                </div>

                <div className="study-abroad-form-row">
                  <div className="study-abroad-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="study-abroad-form-input"
                      placeholder="Email Address"
                      aria-label="Email Address"
                    />
                    {errors.email && <small className="study-abroad-form-error">{errors.email}</small>}
                  </div>
                  <div className="study-abroad-form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="study-abroad-form-input"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                    />
                    {errors.phone && <small className="study-abroad-form-error">{errors.phone}</small>}
                  </div>
                </div>

                <div className="study-abroad-form-row">
                  <div className="study-abroad-form-group">
                    <select
                      name="preferredCountry"
                      value={formData.preferredCountry}
                      onChange={handleChange}
                      className={`study-abroad-form-input study-abroad-form-select${!formData.preferredCountry ? " is-placeholder" : ""}`}
                      aria-label="Preferred Country"
                    >
                      <option value="">Preferred Country</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ireland">Ireland</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Singapore">Singapore</option>
                    </select>
                  </div>
                  <div className="study-abroad-form-group">
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      className={`study-abroad-form-input study-abroad-form-select${!formData.educationLevel ? " is-placeholder" : ""}`}
                      aria-label="Education Level"
                    >
                      <option value="">Education Level</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="PhD">PhD</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>
                </div>

                <div className="study-abroad-form-group study-abroad-form-group-full">
                  <input
                    type="text"
                    name="preferredCourse"
                    value={formData.preferredCourse}
                    onChange={handleChange}
                    className="study-abroad-form-input"
                    placeholder="Preferred Course"
                    aria-label="Preferred Course"
                  />
                </div>

                <div className="study-abroad-form-group study-abroad-form-group-full">
                  <textarea
                    name="user_query"
                    value={formData.message}
                    onChange={handleChange}
                    className="study-abroad-form-input study-abroad-form-textarea"
                    rows={4}
                    placeholder="Message / Query"
                    aria-label="Message / Query"
                  />
                </div>

              </div>

              {status.message && (
                <p className={`study-abroad-form-status study-abroad-form-status-${status.type}`}>
                  {status.message}
                </p>
              )}

              <button type="submit" className="study-abroad-consultation-btn" disabled={loading}>
                {loading ? "Sending..." : "Get Free Consultation"}
              </button>
              <p className="study-abroad-form-privacy">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;