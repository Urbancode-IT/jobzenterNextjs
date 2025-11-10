'use client';
import "./InterviewRegister.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, agree } = formData;

    if (!name || !email || !mobile) {
      setError("Please fill all fields before registering.");
      return;
    }
    if (!agree) {
      setError("Please agree to the Privacy Policy and Terms & Conditions.");
      return;
    }

    // ✅ Your actual EmailJS credentials
    const serviceID = "service_0wkmlio";
    const templateID = "template_x4qt8gf";
    const publicKey = "Hc5Ps23TXZCn7mO0B";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSuccess("✅ Registration successful! Email sent to admin.");
        setError("");
        setFormData({ name: "", email: "", mobile: "", agree: false });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError("❌ Something went wrong while sending the email. Please try again.");
      });
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <h2 className="register-title">Register Using The Form</h2>
        <p className="subtext">
          It’s easy to register for the bootcamp — just fill out the form and click submit.
          You’ll be registered for one of the best Java bootcamps in the industry.
        </p>

        <div className="register-layout">
          {/* Info Cards */}
          <div className="info-card-wrapper">
            <div className="info-card">
              <i className="bi bi-cloud-check-fill icon"></i>
              <p className="info-text">Complete your registration details</p>
            </div>
            <div className="info-card">
              <i className="bi bi-shield-check icon"></i>
              <p className="info-text">It’s safe with us and will not be used for marketing.</p>
            </div>
            <div className="info-card">
              <i className="bi bi-clock-history icon"></i>
              <p className="info-text">You will receive a confirmation email in less than 24h.</p>
            </div>
          </div>

          {/* Form */}
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile No"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="checkbox-row">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree">
                I’ve read and agree to Jobzenter’s{" "}
                <a href="#" className="link">Privacy Policy</a> and{" "}
                <a href="#" className="link">Terms & Conditions</a>.
              </label>
            </div>

            {error && <p className="error-text">{error}</p>}
            {success && <p className="success-text">{success}</p>}

            <div className="button-container">
              <button type="submit" className="btn-outline-dark">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
