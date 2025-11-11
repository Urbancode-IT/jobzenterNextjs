"use client";

import Image from "next/image";
import Link from "next/link";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-wrapper d-flex align-items-center position-relative">
      
      <img src="/Background.png" alt="" className="hero-overlay" />
      <div className="container">
        <div className="row align-items-center g-4 py-sm-5 py-1">

          {/* TEXT CONTENT */}
          <div className="col-lg-6 col-md-6 col-12 hero-text ">
            <h1 className=" fw-bold display-3 mb-5 line" >
              Learn, Upskill & <br/>
              <span className="animate-line">
   <span className="highlight-animate">Get Placed</span>
</span>
            </h1>

            <p className="hero-subtext my-3">
             We help people grow in their career path with confidence. Join our community to access top-notch courses, expert guidance, and job placement support.
            </p>

            <div className="d-flex gap-3 mt-5">
              <Link href="/courses" className="btn hero-btn-primary">
                Explore Courses
              </Link>

              <Link href="/reach-us" className="btn hero-btn-secondary">
                Talk to us
              </Link>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="col-lg-6 col-md-6 col-12 text-center hero-image-wrap">
            <div className="hero-image-container position-relative">
              <Image
                src="/circle.png"
                alt="Background Shape"
                width={100}
                height={100}
                className="circle-image-down position-absolute "
              />
              <Image
                src="/outlineCircle.png"
                alt="Background Shape"
                width={100}
                height={100}
                className="circle-image-down position-absolute rotating "
              />
              <Image
                src="/circle.png"
                alt="Background Shape"
                width={120}
                height={120}
                className="circle-image-up position-absolute"
              />
              <Image
                src="/outlineCircle.png"
                alt="Background Shape"
                width={120}
                height={120}
                className="circle-image-up position-absolute rotating "
              />

              <Image
                src="/Girl.png"
                alt="Student"
                width={500}
                height={500}
                className="hero-main-image"
              />
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
