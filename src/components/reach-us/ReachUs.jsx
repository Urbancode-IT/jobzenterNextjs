"use client";

import { useState, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

const ReachUs = () => {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "Please enter first name";
    if (!form.lastName.trim()) newErrors.lastName = "Please enter last name";
    if (!form.email.trim()) newErrors.email = "Please enter email";
    if (!form.phone.trim()) newErrors.phone = "Please enter phone number";
    if (!form.subject.trim()) newErrors.subject = "Please enter subject";
    if (!form.message.trim()) newErrors.message = "Please enter message";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setGlobalError("Please fill all the details");
      return false;
    }

    setGlobalError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setGlobalError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          source: "reach-us",
        }),
      });
      let data;
      try {
        data = await res.json();
      } catch {
        setGlobalError(res.status === 500 ? "Server error. Check terminal for details and ensure database migration 002_contact_messages.sql is run in pgAdmin." : "Something went wrong. Try again later.");
        return;
      }
      if (!res.ok) {
        const msg = data.error || data.errors?.join(" ") || "Something went wrong. Try again later.";
        const hint = data.hint ? ` — ${data.hint}` : "";
        setGlobalError(msg + hint);
        return;
      }
      setSuccessMessage("Your message has been sent successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setGlobalError("Network error. Check that the app is running and try again.");
    }
  };

  return (
    <div className="contact-page">
      {/* ===== REACH US HEADER ===== */}
{/* ===== REACH US HEADER (NEW CLEAN HERO) ===== */}
{/* ===== CLEAN HERO (TWO COLUMN) ===== */}
<section className="reach-hero">
  <div className="hero-container">
    {/* LEFT SIDE CONTENT */}
    <div className="hero-left">
      <p className="hero-eyebrow">We’re here for you</p>
      <h1 className="hero-title">Let’s talk about your next step</h1>
      <p className="hero-sub">
        Whether you’re looking for your first role or your next big move, our team is ready
        to guide you, answer your questions, and connect you with the right opportunities.
      </p>
      <div className="hero-badges">
        <span className="hero-badge">
          <i className="bi bi-clock"></i> Response within 24 hours
        </span>
        <span className="hero-badge">
          <i className="bi bi-whatsapp"></i> Support over call & chat
        </span>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="hero-right">
      <img
        src="/reach-us/reachushero.jpeg"
        alt="Jobzenter team helping candidates in India"
      />
    </div>
  </div>
</section>



      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section">
        <div className="contact-container">

          {/* Left Side */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Say something to start a live chat!</p>

            <div className="big-info">
              <div className="info-item">
                <i className="bi bi-telephone-fill"></i>
                <span>+91 90577 70577</span>
              </div>

              <div className="info-item" style={{ marginTop: "30px" }}>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:admin@jobzenter.in">admin@jobzenter.in</a>
              </div>

              <div className="info-item" style={{ marginTop: "30px" }}>
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  9/29, 5th St, Kamakoti Nagar,<br />
                  Pallikaranai, Chennai, Tamil Nadu 600100
                </span>
              </div>
            </div>
            {/* Map embed */}
            <div className="map-wrap">
              <iframe
                title="Jobzenter Location"
                src="https://www.google.com/maps?q=9/29,+5th+St,+Kamakoti+Nagar,+Pallikaranai,+Chennai+Tamil+Nadu+600100&output=embed"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              {globalError && (
                <p style={{ color: "red", marginBottom: "20px" }}>{globalError}</p>
              )}

              {successMessage && (
                <p style={{ color: "green", marginBottom: "20px" }}>{successMessage}</p>
              )}

              <div className="input-row">
                <div className="input-box">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <small style={{ color: "red" }}>{errors.firstName}</small>}
                </div>

                <div className="input-box">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <small style={{ color: "red" }}>{errors.lastName}</small>}
                </div>
              </div>

              <div className="input-row">
                <div className="input-box">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                </div>

                <div className="input-box">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
                </div>
              </div>

              <div className="input-box">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />
                {errors.subject && <small style={{ color: "red" }}>{errors.subject}</small>}
              </div>

              <div className="text-area" style={{ marginTop: "40px", marginBottom: "20px" }}>
                <label>Message</label>
                <textarea
                  rows="2"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                ></textarea>
                {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-send">
                  Send Message
                </button>
              </div>

              {/* social icons moved here to sit below the button on the right */}
              <div className="form-bottom-social">
                <i className="bi bi-twitter"></i>

                <a
                  href="https://www.facebook.com/p/Jobzenter-61565616456345/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://www.instagram.com/jobzenter_official/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReachUs;
