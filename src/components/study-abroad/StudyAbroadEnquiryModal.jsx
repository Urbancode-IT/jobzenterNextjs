"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./StudyAbroadEnquiryModal.css";

const StudyAbroadEnquiryModal = ({ isOpen, onClose, selectedCountry }) => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    educationLevel: "",
    email: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, country: selectedCountry || "" }));
    }
  }, [isOpen, selectedCountry]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Mobile number is required.";
    else if (formData.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Enter a valid 10-digit number.";
    if (!formData.country) newErrors.country = "Please select a country.";
    if (!formData.educationLevel) newErrors.educationLevel = "Please select education level.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Sending your enquiry..." });

    const fullMessage = [
      "Study Abroad Enquiry",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Country: ${formData.country || "-"}`,
      `Education Level: ${formData.educationLevel || "-"}`,
    ].join("\n");

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      message: fullMessage,
      subject: "Study Abroad Enquiry",
    };

    emailjs
      .send(
        "service_0wkmlio",
        "template_x4qt8gf",
        templateParams,
        "Hc5Ps23TXZCn7mO0B"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Enquiry submitted successfully! We'll contact you soon.",
          });
          setFormData({
            name: "",
            phone: "",
            country: "",
            educationLevel: "",
            email: "",
          });
          setTimeout(() => {
            setStatus({ type: "", message: "" });
            onClose();
          }, 1500);
        },
        () => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "Ireland",
    "New Zealand",
    "Singapore",
  ];

  const educationLevels = [
    "Undergraduate",
    "Postgraduate",
    "PhD",
    "Diploma",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="study-abroad-enquiry-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="study-abroad-enquiry-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="study-abroad-enquiry-close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>

            <div className="study-abroad-enquiry-header">
              <h2 className="study-abroad-enquiry-title">Study Abroad Enquiry</h2>
              <p className="study-abroad-enquiry-subtitle">
                Take the first step towards your global education.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="study-abroad-enquiry-form">
              <div className="study-abroad-enquiry-field">
                <i className="bi bi-person study-abroad-enquiry-icon" aria-hidden />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="study-abroad-enquiry-input"
                />
                {errors.name && (
                  <span className="study-abroad-enquiry-error">{errors.name}</span>
                )}
              </div>

              <div className="study-abroad-enquiry-field">
                <i className="bi bi-telephone study-abroad-enquiry-icon" aria-hidden />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="study-abroad-enquiry-input"
                />
                {errors.phone && (
                  <span className="study-abroad-enquiry-error">{errors.phone}</span>
                )}
              </div>

              <div className="study-abroad-enquiry-field">
                <i className="bi bi-globe study-abroad-enquiry-icon" aria-hidden />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="study-abroad-enquiry-input study-abroad-enquiry-select"
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <i className="bi bi-chevron-down study-abroad-enquiry-chevron" aria-hidden />
                {errors.country && (
                  <span className="study-abroad-enquiry-error">{errors.country}</span>
                )}
              </div>

              <div className="study-abroad-enquiry-field">
                <i className="bi bi-mortarboard study-abroad-enquiry-icon" aria-hidden />
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className="study-abroad-enquiry-input study-abroad-enquiry-select"
                >
                  <option value="">Education Level</option>
                  {educationLevels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <i className="bi bi-chevron-down study-abroad-enquiry-chevron" aria-hidden />
                {errors.educationLevel && (
                  <span className="study-abroad-enquiry-error">{errors.educationLevel}</span>
                )}
              </div>

              <div className="study-abroad-enquiry-field">
                <i className="bi bi-envelope study-abroad-enquiry-icon" aria-hidden />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="study-abroad-enquiry-input"
                />
                {errors.email && (
                  <span className="study-abroad-enquiry-error">{errors.email}</span>
                )}
              </div>

              {status.message && (
                <div className={`study-abroad-enquiry-status study-abroad-enquiry-status-${status.type}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="study-abroad-enquiry-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StudyAbroadEnquiryModal;
