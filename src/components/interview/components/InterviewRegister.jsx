'use client';
import Link from "next/link";
import "./InterviewRegister.css";
import React, { useState, useEffect, useRef } from "react";
import { sendEmail } from '../../../lib/emailjsClient';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [visible, setVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        setTitleVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

    const templateParams = {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.mobile || '',
      course: '',
      pincode: '',
      message: '',
      mode: '',
      country: '',
      education: '',
      via: 'InterviewRegister',
    };

    sendEmail(templateParams)
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
    <section id="interview-register" className="register-section" ref={sectionRef}>
      <div className={`register-container ${visible ? 'fade-in-up' : 'hidden'}`}>
        <h2 className={`register-title ${titleVisible ? 'title-sweep' : ''}`}>
          Register using the form
        </h2>
        <p className="subtext">
          It’s easy to register for the bootcamp — just fill out the form and click submit.
          You’ll be registered for one of the best Interview Preparation bootcamps in the industry.
        </p>

        <div className="register-layout">
          {/* Info Cards */}
          <div className="info-card-wrapper">
            <div className={`info-card ${visible ? 'slide-in-left' : 'hidden'}`} style={{ transitionDelay: '0.2s' }}>
              <i className="bi bi-cloud-check-fill icon"></i>
              <p className="info-text">Complete your registration details</p>
            </div>
            <div className={`info-card ${visible ? 'slide-in-left' : 'hidden'}`} style={{ transitionDelay: '0.4s' }}>
              <i className="bi bi-shield-check icon"></i>
              <p className="info-text">It’s safe with us and will not be used for marketing.</p>
            </div>
            <div className={`info-card ${visible ? 'slide-in-left' : 'hidden'}`} style={{ transitionDelay: '0.6s' }}>
              <i className="bi bi-clock-history icon"></i>
              <p className="info-text">You will receive a confirmation email in less than 24h.</p>
            </div>
          </div>

          {/* Form */}
          <form className={`register-form ${visible ? 'slide-in-right' : 'hidden'}`} style={{ transitionDelay: '0.4s' }} onSubmit={handleSubmit}>
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
                <Link href="/privacy-policy" className="link">Privacy Policy</Link> and{" "}
                <Link href="/terms-conditions" className="link">Terms & Conditions</Link>.
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
