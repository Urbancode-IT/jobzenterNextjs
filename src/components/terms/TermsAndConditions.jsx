import React from "react";
import "./terms.css";

const TermsAndConditions = () => {
  return (
    <section className="terms-wrapper">
      <div className="terms-container">
        <h1>Terms and Conditions</h1>

        {/* SECTION 1 */}
        <div className="terms-section">
          <h2>Introduction</h2>
          <p>
            Welcome to JOBZENTER! These terms and conditions outline the rules and regulations for the use of JOBZENTER's Website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use JOBZENTER's website if you do not accept all of the terms and conditions stated on this page.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 2 */}
        <div className="terms-section">
          <h2>Intellectual Property Rights</h2>
          <p>
           While you are granted a limited and non-exclusive right to use the JOBZENTER website, services, and courseware for the purposes set forth in this agreement, you acknowledge and agree that JOBZENTER is the sole and exclusive owner of the website, services, and courseware, including all intellectual property rights and other proprietary rights. You acknowledge and agree that this agreement, other than permitting you to use the website, services, and courseware for the specified purposes, does not convey to you any right, title, or interest of a proprietary or any other nature in the website, services, or courseware.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 3 */}
        <div className="terms-section">
          <h2>Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>
              Publishing any website material in any other media without our
              permission.
            </li>
            <li>
              Selling, sublicensing, and/or otherwise commercializing any
              website material.
            </li>
            <li>
              Publicly performing and/or showing any website material.
            </li>
            <li>
              Using this website in any way that is or may be damaging to this
              website.
            </li>
            <li>
              Using this website in any way that impacts user access to this
              website.
            </li>
            <li>
             Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.
            </li>
            <li>
              Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.
            </li>
          </ul>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 4 */}
        <div className="terms-section">
          <h2>Content and Courseware</h2>
          <p>
            As a part of our Services offered through our Website, we shall grant you access to our content, courseware, practice tests, and other information, documents, and data which may be in audio, video, written, graphic, recorded, photographic, or any machine-readable format in relation to the specific training course you have registered for (“Content and Courseware“). We reserve the right to amend, revise or update the Content and Courseware offered to you. In the event such an amendment, revision or update occurs, we may require you pay an additional fee to access such amended, revised, or updated Content and Courseware.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 5 */}
        <div className="terms-section">
          <h2>No Warranties</h2>
          <p>
            This website is provided “as is,” with all faults, and JOBZENTER makes no express or implied representations or warranties of any kind related to this website or the materials contained on this website. Additionally, nothing contained on this website shall be construed as providing consult or advice to you.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 6 */}
        <div className="terms-section">
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall JOBZENTER, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise, and JOBZENTER, including its officers, directors, and employees, shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 7 */}
        <div className="terms-section">
          <h2>Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent JOBZENTER from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these terms.
          </p>
          <span className="diamond-right"></span>
        </div>


 {/* SECTION 8 - NEW: Severability */}
        <div className="terms-section">
          <h2>Severability</h2>
          <p>
            If any provision of these terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 9 - NEW: Variation of Terms */}
        <div className="terms-section">
          <h2>Variation of Terms</h2>
          <p>
            JOBZENTER is permitted to revise these terms at any time as it sees
            fit, and by using this website, you are expected to review these
            terms on a regular basis.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 10 - NEW: Assignment */}
        <div className="terms-section">
          <h2>Assignment</h2>
          <p>
            JOBZENTER is allowed to assign, transfer, and subcontract its rights
            and/or obligations under these terms without any notification.
            However, you are not allowed to assign, transfer, or subcontract any
            of your rights and/or obligations under these terms.
          </p>
          <span className="diamond-right"></span>
        </div>

        {/* SECTION 11 - NEW: Entire Agreement */}
        <div className="terms-section">
          <h2>Entire Agreement</h2>
          <p>
            These terms constitute the entire agreement between JOBZENTER and
            you in relation to your use of this website and supersede all prior
            agreements and understandings.
          </p>
          <span className="diamond-right"></span>
        </div>




        {/* SECTION 12 */}
        <div className="terms-section">
          <h2>Governing Law & Jurisdiction</h2>
          <p>
            These terms will be governed by and construed in accordance with the laws of the country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in india for the resolution of any disputes.
          </p>
          <span className="diamond-right"></span>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
