"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css"; // make sure this path is correct

const ReachUs = () => {
  return (
    <div className="contact-page">
      {/* ===== REACH US HEADER ===== */}
      <section className="reach-header">
        <div className="overlay"></div>
        <div className="content">
          <h1>Reach Us</h1>
          <p>We’re here to answer your questions and guide you every step of the way.</p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side: Contact Info */}
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
            <form>
              <div className="input-row">
                <div className="input-box">
                  <label>First Name</label>
                  <input type="text" />
                </div>

                <div className="input-box">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-box">
                  <label>Email</label>
                  <input type="email" />
                </div>

                <div className="input-box">
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
              </div>

              <div className="input-box">
                <label>Subject</label>
                <input type="text" />
              </div>

              <div className="text-area" style={{ marginTop: "40px", marginBottom: "20px" }}>
                <label>Message</label>
                <textarea rows="2" placeholder="Write your message"></textarea>
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
