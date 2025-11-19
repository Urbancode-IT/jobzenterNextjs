'use client';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="fw-bold">Mock Interviews</h1>
        <p className="hero-text">
          Sharpen your interview skills with realistic mock sessions guided by industry experts. Get personalized feedback that builds confidence and prepares you to crack your dream job.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-register">Register</button>
          <button className="btn btn-discover">Discover</button>
        </div>

        <div className="program-card mt-5">
          <div className="program-text text-start">
            <h3 className="program-title">Mock Interview</h3>
            <p className="program-desc">
              
              Practice real interviews with expert guidance to boost your
            
             confidence and performance.</p>
            <button className="btn btn-enroll">Enroll now</button>
          </div>

          <div className="program-img">
            <img src="/Mockinterviews/man.jpeg" alt="Java Program Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
