'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import "./EnquiryForm.css";
import "./BrochureForm.css";

const BrochureFormModal = ({ isOpen, onClose, courseName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    course: courseName || "",
    mode: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Sync courseName prop when it changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, course: courseName || "" }));
  }, [courseName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits.";
    if (!formData.course) newErrors.course = "Course name is required.";
    if (!formData.mode) newErrors.mode = "Please select a mode.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pincode: formData.pincode || "",
          course: formData.course,
          mode: formData.mode,
          message: formData.message || `Brochure request for: ${formData.course}`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          pincode: "",
          course: courseName || "",
          mode: "",
          message: "",
        });
        setErrors({});

        // Close modal first, then show SweetAlert
        onClose();

        Swal.fire({
          title: "Brochure Sent! 🎉",
          html: `<p style="color:#e2e8f0; font-size:15px; margin:0;">Your <strong style="color:#10b981;">${formData.course}</strong> curriculum PDF has been sent to<br/><strong style="color:#10b981;">${formData.email}</strong>.<br/><br/>Check your inbox (and spam folder if needed).</p>`,
          icon: "success",
          background: "#1e293b",
          color: "#f1f5f9",
          confirmButtonText: "Got it!",
          confirmButtonColor: "#10b981",
          showClass: { popup: "animate__animated animate__fadeInDown" },
        });
      } else {
        throw new Error(data.error || "Failed to send brochure.");
      }
    } catch (err) {
      Swal.fire({
        title: "Something went wrong",
        html: `<p style="color:#cbd5e1; font-size:14px; margin:0;">${err.message || "Could not send the brochure. Please try again or contact us at admin@jobzenter.in"}</p>`,
        icon: "error",
        background: "#1e293b",
        color: "#f1f5f9",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="enquiry-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="enquiry-modal brochure-modal"
            initial={{ scale: 0.88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="enquiry-header">
              <h3 className="brochure-heading">Get Course Brochure</h3>
              <button className="close-btn" onClick={onClose} aria-label="Close">x</button>
            </div>

            <form onSubmit={handleSubmit} className="container brochure-grid-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" name="name" placeholder="Enter your name" value={formData.name || ""} onChange={handleChange} />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Enter your email" value={formData.email || ""} onChange={handleChange} />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="phone" placeholder="Enter your phone number (10 digits)" value={formData.phone || ""} onChange={handleChange} maxLength={10} />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="pincode" placeholder="Enter your pin code (6 digits)" value={formData.pincode || ""} onChange={handleChange} maxLength={6} />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="course" placeholder="Course name" value={formData.course || ""} onChange={handleChange} />
                  {errors.course && <small className="text-danger">{errors.course}</small>}
                </div>
                <div className="col-md-6">
                  <select className="form-select" name="mode" value={formData.mode || ""} onChange={handleChange}>
                    <option value="">Mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Let's decide later">Let&apos;s decide later</option>
                  </select>
                  {errors.mode && <small className="text-danger">{errors.mode}</small>}
                </div>
                <div className="col-12">
                  <textarea className="form-control" name="message" rows="4" placeholder="Any specific requirements?" value={formData.message || ""} onChange={handleChange}></textarea>
                </div>
                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn px-5 py-2 rounded-pill brochure-submit-btn" disabled={loading}>
                    {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : null}
                    {loading ? "Sending..." : "Get Brochure"}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureFormModal;
