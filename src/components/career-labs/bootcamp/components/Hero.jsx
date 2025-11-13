'use client';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="fw-bold">Mock Interviews</h1>
        <p className="hero-text">
          Ready to master Java programming? Join our bootcamp and gain the
          skills needed to build powerful applications. Learn from experts and
          transform your coding journey today!
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-register">Register</button>
          <button className="btn btn-discover">Discover</button>
        </div>

        <div className="program-card mt-5">
          <div className="program-text text-start">
            <h3 className="program-title">Java Training Program</h3>
            <p className="program-desc">
              Java Essentials, Selenium, Hands-on Tasks, Expert Guidance
            </p>
            <button className="btn btn-enroll">Enroll now</button>
          </div>

          <div className="program-img">
            <img src="/bootcamp/image.png" alt="Java Program Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
