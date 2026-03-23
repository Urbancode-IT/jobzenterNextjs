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
   <span className="highlight-animate">Get placed</span>
   </span>
            </h1>
{/* ✅ REPLACE your existing hero-quote-block with this */}
<div className="hero-quote-block fade-up-delay-1">
  <p className="hero-quote-text">
    "Every student who walks through our doors carries a dream —
    we make sure they walk out with the skills, confidence,
    and offer letter to live it."
  </p>
  <div className="hero-impact-points fade-up-delay-2">
    <Link href="/reach-us" className="impact-chip">✦ Live Expert Classes</Link>
    <Link href="/reach-us" className="impact-chip">✦ Real Projects</Link>
    <Link href="/reach-us" className="impact-chip">✦ Placement Support</Link>
  </div>
</div>
            <div className="d-flex gap-3 mt-5">
              <Link href="/courses" className="btn hero-btn-primary">
                Explore courses
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
                src="/circle.webp"
                alt="Background Shape"
                width={100}
                height={100}
                className="circle-image-down position-absolute "
              />
              <Image
                src="/outlineCircle.webp"
                alt="Background Shape"
                width={100}
                height={100}
                className="circle-image-down position-absolute rotating "
              />
              <Image
                src="/circle.webp"
                alt="Background Shape"
                width={120}
                height={120}
                className="circle-image-up position-absolute"
              />
              <Image
                src="/outlineCircle.webp"
                alt="Background Shape"
                width={120}
                height={120}
                className="circle-image-up position-absolute rotating "
              />

              <Image
                src="/Girl.webp"
                alt="Student image-fluid"
                fill
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
