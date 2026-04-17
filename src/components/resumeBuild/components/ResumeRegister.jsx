'use client';
import React, { useState, useEffect, useRef } from "react";
import "./ResumeRegister.css";
import { sendEmail } from '../../../lib/emailjsClient';

const defaultSubtext =
  "It's easy to register for the bootcamp — just fill out the form and click submit. " +
  "You'll be registered for one of the best Java bootcamps in the industry.";

const Register = ({
  sectionId = "resume-register",
  emailVia = "Resume page Registeration",
  title = "Register Using The Form",
  subtext = defaultSubtext,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtextRef.current) observer.observe(subtextRef.current);
    if (formRef.current) observer.observe(formRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

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
      via: emailVia,
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
    <section id={sectionId} className="register-section">
      <div className="register-container">
        <h2 ref={titleRef} className="register-title slide-down">
          {title}
        </h2>
        <p ref={subtextRef} className="subtext slide-down" style={{ transitionDelay: '0.2s' }}>
          {subtext}
        </p>

        <div className="register-layout">
          {/* Info Cards */}
          <div className="info-card-wrapper">
            {[
              { icon: "bi-cloud-check-fill", text: "Complete your registration details" },
              { icon: "bi-shield-check", text: "It's safe with us and will not be used for marketing." },
              { icon: "bi-clock-history", text: "You will receive a confirmation email in less than 24h." },
            ].map((card, i) => (
              <div
                key={i}
                className="info-card slide-left"
                ref={(el) => (cardsRef.current[i] = el)}
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
              >
                <i className={`bi ${card.icon} icon`}></i>
                <p className="info-text">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            ref={formRef}
            className="register-form slide-right"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              <input type="text" name="mobile" placeholder="Mobile No" value={formData.mobile} onChange={handleChange} />
            </div>

            <div className="checkbox-row">
              <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} />
              <label htmlFor="agree">
                I've read and agree to Jobzenter's{" "}
                <a href="#" className="link">Privacy Policy</a> and{" "}
                <a href="#" className="link">Terms & Conditions</a>.
              </label>
            </div>

            {error && <p className="error-text">{error}</p>}
            {success && <p className="success-text">{success}</p>}

            <div className="button-container">
              <button type="submit" className="btn-outline-dark">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;