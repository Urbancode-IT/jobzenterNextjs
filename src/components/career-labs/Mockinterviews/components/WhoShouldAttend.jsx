'use client';
import "./WhoShouldAttend.css"; // external CSS

const WhoShouldAttend = () => {
  return (
    <section className="who-should-attend">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-lg-5 info-section mb-4 mb-lg-0">
            <h2>
              Who Should Attend The Java <br /> Bootcamp Training
            </h2>
            <p>
              This bootcamp is perfect for anyone passionate about coding, from beginners to professionals,
              looking to sharpen their Java skills and advance their careers in software development.
            </p>
            <button className="btn">Register</button>
          </div>

          {/* Right Cards */}
          <div className="col-lg-7 d-flex justify-content-center">
            <div className="card-wrapper">
              {/* Card 1 */}
              <div className="attend-card">
                <div className="card-top-line"></div>
                <div className="icon-circle">
                  <i className="bi bi-person-fill"></i>
                </div>
                <h5>Students & Fresh Graduates</h5>
                <p>Looking to start a career in programming.</p>
              </div>

              {/* Card 2 */}
              <div className="attend-card">
                <div className="card-top-line"></div>
                <div className="icon-circle">
                  <i className="bi bi-laptop"></i>
                </div>
                <h5>Beginners in Coding</h5>
                <p>Who want to learn Java from scratch.</p>
              </div>

              {/* Card 3 */}
              <div className="attend-card">
                <div className="card-top-line"></div>
                <div className="icon-circle">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h5>Full-Stack & Backend Aspirants</h5>
                <p>Who want to build real-world applications using Java.</p>
              </div>

              {/* Card 4 */}
              <div className="attend-card">
                <div className="card-top-line"></div>
                <div className="icon-circle">
                  <i className="bi bi-bar-chart-fill"></i>
                </div>
                <h5>IT Professionals</h5>
                <p>Aiming to upgrade skills or transition into Java development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
