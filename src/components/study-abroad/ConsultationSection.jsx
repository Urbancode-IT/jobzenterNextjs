"use client";

import React, { useState, useRef } from "react";
import { sendEmail } from '../../lib/emailjsClient';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ConsultationSection.css";

const ConsultationSection = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredCountry: "",
    educationLevel: "",
    preferredCourse: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

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
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Sending..." });

    const fullMessage = [
      `Study Abroad - Free Consultation`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Preferred Country: ${formData.preferredCountry || "-"}`,
      `Education Level: ${formData.educationLevel || "-"}`,
      `Preferred Course: ${formData.preferredCourse || "-"}`,
      ``,
      `Message / Query:`,
      formData.message || "-",
    ].join("\n");

    const templateParams = {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      course: '',
      pincode: '',
      message: fullMessage || '',
      mode: '',
      country: formData.preferredCountry || '',
      education: formData.educationLevel || '',
      via: 'Consultation Section Registration',
    };

    sendEmail(templateParams)
      .then(
        () => {
          setStatus({
            type: "success",
            message:
              "Thank you! Our study abroad experts will contact you within 24 hours.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            preferredCountry: "",
            educationLevel: "",
            preferredCourse: "",
            message: "",
          });
        },
        () => {
          setStatus({
            type: "error",
            message:
              "Could not send. Check your connection or try again. If this continues, email us directly.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  const bullets = [
    "Profile Evaluation",
    "University Shortlisting",
    "Scholarship Assessment",
  ];

  return (
    <section className="study-abroad-consultation">
      <div className="container">
        <div className="study-abroad-consultation-card">
          <div className="study-abroad-consultation-left">
            <h2 className="study-abroad-consultation-title">
              Get Your Free Consultation Today
            </h2>
            <p className="study-abroad-consultation-desc">
              Fill the form and our study abroad experts will contact you within
              24 hours to discuss your profile and options.
            </p>
            <ul className="study-abroad-consultation-bullets">
              {bullets.map((item) => (
                <li key={item}>
                  <span className="study-abroad-bullet-check">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="study-abroad-consultation-form-wrap">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="study-abroad-form-fields">
                <div className="study-abroad-form-group study-abroad-form-group-full">
                  <label className="study-abroad-form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="study-abroad-form-input"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <small className="study-abroad-form-error">{errors.name}</small>
                  )}
                </div>
                <div className="study-abroad-form-row">
                  <div className="study-abroad-form-group">
                    <label className="study-abroad-form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="study-abroad-form-input"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <small className="study-abroad-form-error">{errors.email}</small>
                    )}
                  </div>
                  <div className="study-abroad-form-group">
                    <label className="study-abroad-form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="study-abroad-form-input"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <small className="study-abroad-form-error">{errors.phone}</small>
                    )}
                  </div>
                </div>
                <div className="study-abroad-form-row">
                  <div className="study-abroad-form-group">
                    <label className="study-abroad-form-label">Preferred Country</label>
                    <select
                      name="preferredCountry"
                      value={formData.preferredCountry}
                      onChange={handleChange}
                      className="study-abroad-form-input study-abroad-form-select"
                    >
                      <option value="">Select Country</option>
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
                    <label className="study-abroad-form-label">Education Level</label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      className="study-abroad-form-input study-abroad-form-select"
                    >
                      <option value="">Select Level</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="PhD">PhD</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>
                </div>
                <div className="study-abroad-form-group study-abroad-form-group-full">
                  <label className="study-abroad-form-label">Preferred Course</label>
                  <input
                    type="text"
                    name="preferredCourse"
                    value={formData.preferredCourse}
                    onChange={handleChange}
                    className="study-abroad-form-input"
                    placeholder="e.g. Computer Science, MBA"
                  />
                </div>
                <div className="study-abroad-form-group study-abroad-form-group-full">
                  <label className="study-abroad-form-label">Message / Query</label>
                  <textarea
                    name="user_query"
                    value={formData.message}
                    onChange={handleChange}
                    className="study-abroad-form-input study-abroad-form-textarea"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>
              {status.message && (
                <p className={`study-abroad-form-status study-abroad-form-status-${status.type}`}>
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                className="study-abroad-consultation-btn"
                disabled={loading}
              >
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
