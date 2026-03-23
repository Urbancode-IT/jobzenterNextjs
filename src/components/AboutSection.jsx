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
              Chennai's Most Trusted IT Training &amp;{" "}
              <br />
              Digital Solutions Studio.
            </h2>

            <p className="about-text">
              At Urbancode Edutech Solutions Pvt. Ltd., we have proudly trained and
              placed 800+ professionals in top MNCs like Zoho, Amazon, TCS, and
              Infosys. Our industry-first curriculum is designed with direct input
              from hiring managers — ensuring every student learns exactly what
              companies demand. From full-stack development to data analytics and
              cloud computing, we don't just teach technology — we build careers.
              With expert mentors, live projects, and 100% placement support, we
              empower every student to step into the corporate world with confidence
              and real-world skills.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6 d-flex justify-content-center gap-4 about-images-wrap">

            <div className="about-img-container">
              <Image
                src="/place1.jpg"
                alt="Urbancode students in training"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="about-img"
              />
            </div>

            <div className="about-img-container">
              <Image
                src="/Study-Abroad/Container.png"
                alt="Urbancode mentor teaching"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
