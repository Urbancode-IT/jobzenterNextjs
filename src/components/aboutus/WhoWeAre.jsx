import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <>
      {/* TOP SPACER — gives clean space without touching your CSS */}
      <div style={{ height: "120px" }}></div>

      <section className="who-section py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT SIDE TEXT */}
            <div className="col-lg-6 mb-4 left-col-fix">
              <h2 className="who-title">Who We are</h2>

              <p className="who-text">
                We empower students, freshers, and working individuals with <br />
                industry-aligned skills, hands- <br /> on learning, and guided career
                support. Through expert <br /> mentorship, structured training <br /> programs,
                and real-time practical exposure, we help learners gain <br /> the
                clarity, competence, <br /> and confidence needed to build successful
                careers and step into <br /> the corporate world with <br />purpose.
              </p>

              <p className="who-text">
                At JobZenter, our focus is simple — transform skills, strengthen<br />
                careers, and create<br /> opportunities. We are dedicated to bridging
                the gap between <br />education and industry<br /> expectations by nurturing
                talent, enhancing employability, and <br />supporting candidates until<br />
                they achieve meaningful career breakthroughs.
              </p>
            </div>

            {/* RIGHT SIDE IMAGES */}
            <div className="col-lg-6 right-col">
              <div className="right-wrapper">

                <img src="/aboutus/Who1.png" className="img-wide-1" alt="img1" />

                <img src="aboutus/Who2.png" className="img-wide-2" alt="img2" />

                <div className="small-wrapper">
                  <img src="aboutus/Who3.png" className="img-small" alt="img3" />

                  <div className="badge-box">
                    <h3>10+</h3>
                    <span>Course</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
