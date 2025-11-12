import React from "react";
import "./disclaimer.css";

const Disclaimer = () => {
  return (
    <section className="terms-wrapper">
      <div className="terms-container">
        <h1>Disclaimer</h1>

        {/* Gradient line + diamonds below the heading */}
        <div className="heading-line">
          <span className="left-diamond"></span>
          <span className="line"></span>
          <span className="right-diamond"></span>
        </div>

        {/* Disclaimer Section */}
        <div className="terms-section">
          <p>
            The information provided by JOBZENTER on our website is for general
            informational purposes only. While we strive to provide accurate and
            up-to-date information, we make no representations or warranties of
            any kind, express or implied, about the completeness, accuracy,
            reliability, suitability, or availability with respect to the
            website or the information, products, services, or related graphics
            contained on the website for any purpose. Any reliance you place on
            such information is therefore strictly at your own risk.
          </p>

          <p>
            Through our website, you may be able to link to other websites which
            are not under the control of JOBZENTER. We have no control over the
            nature, content, and availability of those sites. The inclusion of
            any links does not necessarily imply a recommendation or endorse the
            views expressed within them.
          </p>

          <p>
            JOBZENTER will not be liable for any false, inaccurate,
            inappropriate, or incomplete information presented on the website.
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>

          <p>
            Every effort is made to keep the website up and running smoothly.
            However, JOBZENTER takes no responsibility for, and will not be
            liable for, the website being temporarily unavailable due to
            technical issues beyond our control.
          </p>

          <span className="diamond-right"></span>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
