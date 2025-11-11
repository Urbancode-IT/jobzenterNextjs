import React from "react";
import { IoChevronDown } from "react-icons/io5";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="get-started-section">
      <div className="get-started-card">
        <h2 className="get-started-title">Find The Best Service You Need</h2>
        <div className="get-started-divider" />

        <div className="get-started-form">
          <div className="get-started-select-wrapper">
            <select className="get-started-select" defaultValue="">
              <option value="" disabled>
                Type of service
              </option>
              <option value="training">Software Training</option>
              <option value="placement">Placement Support</option>
              <option value="consulting">Consulting</option>
            </select>
            <IoChevronDown className="get-started-select-icon" />
          </div>

          <input type="text" className="get-started-input" placeholder="Name" />
          <input type="text" className="get-started-input" placeholder="Phone" />
          <input type="email" className="get-started-input" placeholder="Email" />

          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
