import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import "./GetStarted.css";
import { sendEmail } from "../lib/emailjsClient";

const GetStarted = () => {
  const [form, setForm] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };

  const validate = () => {
    if (!form.service) return "Please select a service.";
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Please enter phone number.";
    if (!/^\d{10}$/.test(form.phone.trim())) return "Please enter a 10-digit phone number.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    const templateParams = {
      name: form.name || "",
      email: form.email || "",
      phone: form.phone || "",
      course: form.service || "",
      pincode: "",
      message: "",
      mode: "",
      country: "",
      education: "",
      via: "Get started section of home page",
    };

    try {
      await sendEmail(templateParams);
      setSuccess("Thanks! We received your request — we'll be in touch soon.");
      setForm({ service: "", name: "", phone: "", email: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to send your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="get-started-section">
      <div className="get-started-card">
        <h2 className="get-started-title">Please choose the service that suits your needs</h2>
        <div className="get-started-divider" />

        <form className="get-started-form" onSubmit={handleSubmit}>
          <div className="get-started-select-wrapper">
            <select
              className="get-started-select"
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Type of service
              </option>
              <option value="Resume Building">Resume Building</option>
              <option value="Placement Preparation">Placement Preparation</option>
              <option value="Interview Preparation">Interview Preparation</option>
            </select>
            <IoChevronDown className="get-started-select-icon" />
          </div>

          <input
            type="text"
            className="get-started-input"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            className="get-started-input"
            placeholder="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            className="get-started-input"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {error && <div className="get-started-error">{error}</div>}
          {success && <div className="get-started-success">{success}</div>}

          <button className="get-started-btn" disabled={loading}>
            {loading ? "Sending..." : "Get Started"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetStarted;
