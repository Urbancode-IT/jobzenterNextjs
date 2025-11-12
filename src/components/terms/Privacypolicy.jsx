import React from "react";
import "./privacy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-wrapper">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>

        {/* SECTION 1 */}
        <div className="privacy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to JOBZENTER! We are committed to protecting your privacy.
            This Privacy Policy outlines our practices regarding the collection,
            use, and disclosure of your information when you use our services.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 2 */}
        <div className="privacy-section">
          <h2>Information We Collect</h2>
          <p>We may collect and process the following information about you:</p>
          <ul>
            <li>
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li>
              Technical data (IP address, browser type, operating system, etc.)
            </li>
            <li>
              Usage data (information about how you use our website and
              services)
            </li>
            <li>
              Cookies and tracking technologies (to improve user experience and
              for analytics)
            </li>
          </ul>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 3 */}
        <div className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>
            We use the collected information for various purposes, including:
          </p>
          <ul>
            <li>To provide and maintain our service.</li>
            <li>To notify you about changes to our service.</li>
            <li>To provide customer support.</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our service.
            </li>
            <li>To monitor the usage of our service.</li>
            <li>To detect, prevent and address technical issues.</li>
            <li>
              To send you marketing and promotional communications. 
            </li>
          </ul>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 4 */}
        <div className="privacy-section">
          <h2>Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except
            in the following circumstances:
          </p>
          <ul>
            <li>With your consent</li>
            <li>To comply with legal obligations.</li>
            <li>To protect and defend our rights and property.</li>
            <li>
              To prevent or investigate possible wrongdoing in connection with
              our service.
            </li>
            <li>
              To protect the personal safety of users of our service or the
              public.
            </li>
            <li>
              With service providers to perform functions on our behalf.
            </li>
          </ul>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 5 */}
        <div className="privacy-section">
          <h2>Security of Your Information</h2>
          <p>
            We take the security of your personal information seriously and use
            reasonable administrative, technical, and physical measures to
            protect it from unauthorized access, use, or disclosure.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 6 */}
        <div className="privacy-section">
          <h2>Retention of Your Information</h2>
          <p>
            We will retain your personal information only for as long as is
            necessary. 
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 7 */}
        <div className="privacy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 8 */}
        <div className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <ul>
            <li>Email: jobzenter24@gmail.com</li>
            <li>Phone: +91 9344828514</li>
          </ul>
          <span className="diamond-right"></span>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
