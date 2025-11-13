"use client";
import Image from "next/image";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* LEFT TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold about-heading mb-3">
              Trusted by thousands, we help careers <br />
              grow with confidence.
            </h2>

            <p className="about-text ">
              At JobZenter, we are trusted by thousands of aspiring professionals who
              rely on us to shape their future with confidence. Our proven training
              programs and dedicated placement support have helped students, freshers,
              and experienced candidates transform their skills, unlock their potential,
              and secure positions in top MNCs with salaries ranging from 5 LPA to 15 LPA.
              We believe in empowering every individual with the knowledge, guidance, and
              industry exposure they need to achieve their career goals and step into the
              corporate world with certainty and success.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6 d-flex justify-content-center gap-4 about-images-wrap">

            <div className="about-img-container">
              <Image
                src="/place1.webp"
                alt="Team Meeting"
                fill
                className="about-img"
              />
            </div>

            <div className="about-img-container">
              <Image
                src="/place2.webp"
                alt="Mentor Teaching"
                fill
                className="about-img"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
