import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlacementStudent.css";

const PlacementStudent = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const sectionRef = useRef(null);

  /* ── Scroll observer ── */
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          setContentVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="placement-student-section" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE TEXT */}
          <div className={`col-lg-7 ps-content ${contentVisible ? 'ps-animate' : ''}`}>
            <h2
              className={`placement-student-title ${titleVisible ? "title-sweep" : ""}`}
            >
              Placement Services for Students
            </h2>

            <p className="placement-student-desc">
              At JobZenter, we understand that a student’s biggest challenge is not just learning
              skills—but finding the right opportunity to apply them. Our Placement Services are
              designed exclusively to support students in transforming their academic learning into
              real-world success.
              <br /><br />
              We provide a structured, end-to-end placement experience that prepares every student to
              confidently step into the corporate world with clarity, competence, and direction.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className={`col-lg-5 text-center ps-image-box ${contentVisible ? 'ps-animate' : ''}`}>
            <img
              src="/student.jpg"
              alt="Placement Interview"
              className="placement-student-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlacementStudent;
