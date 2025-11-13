"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .sendForm(
        "service_0wkmlio",
        "template_x4qt8gf",
        formRef.current,
        "Hc5Ps23TXZCn7mO0B"
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setGlobalError("Something went wrong. Try again later.");
        }
      );
  };

  return (
    <div className="contact-page">
      {/* ===== REACH US HEADER ===== */}
      <section className="reach-header">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-4 fw-bold mt-5">Reach Us</h1>
          <p>We’re here to answer your questions and guide you every step of the way.</p>
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
                <span>+91 9057770577</span>
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

            <div className="social-icons">
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

              <button type="submit" className="btn-send">
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReachUs;
