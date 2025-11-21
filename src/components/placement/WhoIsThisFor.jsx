import React from "react";
import "./WhoIsThisFor.css";

const WhoIsThisFor = () => {
  const items = [
    {
      number: "01",
      title: "Students",
      desc: "Preparing for their first corporate interview."
    },
    {
      number: "02",
      title: "Freshers",
      desc: "Looking to build confidence and crack entry-level roles."
    },
    {
      number: "03",
      title: "Experienced Professionals",
      desc: "Preparing for role-switch, promotions, or career transitions."
    }
  ];

  return (
    <section className="who-wrapper">
      <div className="container">
        <h2 className="who-title">Who is this for?</h2>

        <div className="row g-4 mt-2">
          {items.map((box, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="who-card">
                <div className="who-number">
                  <span className="num-bg"></span>
                  <span className="num-text">{box.number}</span>
                </div>

                <h3 className="who-card-title">{box.title}</h3>
                <p className="who-card-desc">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
