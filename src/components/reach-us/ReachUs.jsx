"use client";

import { useState, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import "./style.css";

const WHATSAPP_HREF = "https://wa.me/919057770577";
const CONTACT_EMAIL = "admin@jobzenter.in";
const MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

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
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "Please enter first name";
    if (!form.lastName.trim()) newErrors.lastName = "Please enter last name";
    if (!form.email.trim()) {
      newErrors.email = "Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
      Swal.fire({
        title: 'Invalid Email!',
        text: 'Please enter a correct email format (e.g., example@mail.com).',
        icon: 'error',
        background: '#2c2c2c',
        color: '#fff',
        confirmButtonText: 'OK',
        confirmButtonColor: 'transparent',
        customClass: {
          popup: 'swal2-border-radius',
          confirmButton: 'swal2-styled-btn',
          title: 'swal2-title-white',
          htmlContainer: 'swal2-text-gray'
        },
        showClass: {
          popup: 'animate__animated animate__shakeX'
        }
      });
      return false;
    }
    if (!form.phone.trim()) newErrors.phone = "Please enter phone number";
    if (!form.subject.trim()) newErrors.subject = "Please enter subject";
    if (!form.message.trim()) newErrors.message = "Please enter message";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      Swal.fire({
        title: 'Fields Missing!',
        text: 'Please fill in all the required fields before sending.',
        icon: 'warning',
        width: '320px',
        background: '#242424',
        color: '#ffffff',
        confirmButtonText: 'OK',
        confirmButtonColor: 'transparent',
        customClass: {
          popup: 'swal2-border-radius',
          confirmButton: 'swal2-styled-btn',
          title: 'swal2-title-white',
          htmlContainer: 'swal2-text-gray'
        },
        buttonsStyling: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        }
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      Swal.fire({
        title: "Mail setup missing",
        text: "Please configure NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local",
        icon: "error",
        background: "#242424",
        color: "#ffffff",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsSending(true);
    try {
      const fullName = `${form.firstName} ${form.lastName}`.trim();
      const reachUsMessage = [
        "Reach Us Contact",
        `Name: ${fullName || "-"}`,
        `Email: ${form.email || "-"}`,
        `Phone: ${form.phone || "-"}`,
        `Subject: ${form.subject || "-"}`,
        "",
        "Message:",
        form.message || "-",
      ].join("\n");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Primary variables used by current Reach Us templates
          first_name: form.firstName,
          last_name: form.lastName,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: reachUsMessage,
          source: "reach-us",
          // Compatibility aliases so legacy/enroll templates can render values
          full_name: fullName,
          name: fullName,
          from_name: fullName,
          email: form.email,
          reply_to: form.email,
          mobile: form.phone,
          user_query: form.message,
          course: form.subject || "General Enquiry",
          pincode: "-",
          interested_country: "-",
          education: "-",
          preferred_mode: "Contact Form",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          {
            to_email: form.email,
            to_name: `${form.firstName} ${form.lastName}`.trim(),
            first_name: form.firstName,
            last_name: form.lastName,
            from_email: form.email,
            email: form.email,
            reply_to: form.email,
            phone: form.phone,
            subject: form.subject,
            message: reachUsMessage,
            source: "reach-us",
            full_name: fullName,
            name: fullName,
            from_name: fullName,
          },
          {
            publicKey: EMAILJS_PUBLIC_KEY,
          }
        );
      }

      Swal.fire({
        title: 'Message Sent!',
        text: `Thank you ${form.firstName}! We'll get back to you at ${form.email} soon.`,
        icon: 'success',
        iconColor: '#28a745',
        width: '320px',
        background: '#242424',
        color: '#ffffff',
        confirmButtonText: 'OK',
        confirmButtonColor: 'transparent',
        customClass: {
          popup: 'swal2-border-radius',
          confirmButton: 'swal2-styled-btn',
          title: 'swal2-title-white',
          htmlContainer: 'swal2-text-gray'
        },
        buttonsStyling: false,
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown'
        },
        didOpen: () => {
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#28a745', '#ffffff', '#f9f58b']
          });
        }
      }).then(() => {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      });
    } catch (error) {
      console.error("Email send error:", error);
      Swal.fire({
        title: "Failed to send",
        text: "Something went wrong while sending your message. Please try again in a moment.",
        icon: "error",
        iconColor: "#dc3545",
        width: '320px',
        background: '#242424',
        color: '#ffffff',
        confirmButtonText: 'OK',
        confirmButtonColor: 'transparent',
        customClass: {
          popup: 'swal2-border-radius',
          confirmButton: 'swal2-styled-btn',
          title: 'swal2-title-white',
          htmlContainer: 'swal2-text-gray'
        },
        buttonsStyling: false,
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
      });
    } finally {
      setIsSending(false);
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
        <a
          className="hero-badge"
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp" aria-hidden />
          WhatsApp
        </a>
        <a className="hero-badge" href={MAILTO_HREF}>
          <i className="bi bi-envelope-fill" aria-hidden />
          Email
        </a>
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

              <div className="info-item">
                <i className="bi bi-envelope-fill"></i>
                <a href={MAILTO_HREF}>{CONTACT_EMAIL}</a>
              </div>

              <div className="info-item">
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

              <div className="input-row">
                <div className="input-box">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  {errors.firstName && <small style={{ color: "red" }}>{errors.firstName}</small>}
                </div>

                <div className="input-box">
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  {errors.lastName && <small style={{ color: "red" }}>{errors.lastName}</small>}
                </div>
              </div>

              <div className="input-row">
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                </div>

                <div className="input-box">
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
                </div>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
                {errors.subject && <small style={{ color: "red" }}>{errors.subject}</small>}
              </div>

              <div className="text-area">
                <textarea
                  rows="2"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
                {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-send" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
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
