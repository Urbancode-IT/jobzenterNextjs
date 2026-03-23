"use client";
import Image from "next/image";
import "./AboutSection.css";

const courses = [
  { title: "Full Stack Development", desc: "Full Stack Development is the most in-demand skill in today's tech industry. You'll learn to build complete web applications from frontend to backend, working with real projects that top companies expect from day one." },
  { title: "Software Testing", desc: "Every great product needs a great tester. Learn to find bugs, automate test cases, and ensure quality — a skill every IT company actively hires for with strong salary packages." },
  { title: "CCNA Networking", desc: "Networking is the backbone of every technology. Master Cisco routing, switching, and protocols to become the expert who keeps businesses connected and running 24/7." },
  { title: "AWS Cloud Platform", desc: "The world is moving to the cloud — and companies need people who know it. Learn AWS from scratch and step into one of the highest-paying roles in the IT industry today." },
];

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row gy-4 align-items-center">

          {/* LEFT - COURSE CARDS */}
          <div className="col-lg-6">
            <h2 className="fw-bold about-heading mb-3">
              Trusted by thousands, we help careers 
              grow with <br></br>confidence.
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
              {/* RIGHT - BLOB IMAGE */}
<div className="col-lg-6 d-flex justify-content-center align-items-center">
  <div className="blob-wrap">

            <div className="about-img-container">
              <Image
                src="/place1.jpg"
                alt="Team Meeting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="about-img"
              />
            </div>

            <div className="about-img-container">
              <Image
                src="/Study-Abroad/Container.png"
                alt="Mentor Teaching"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="about-img"
              />
            </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;