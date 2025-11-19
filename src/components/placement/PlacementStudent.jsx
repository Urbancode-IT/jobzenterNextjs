import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlacementStudent.css";

const PlacementStudent = () => {
  return (
    <section className="placement-student-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE TEXT */}
          <div className="col-lg-7">
            <h2 className="placement-student-title">
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
          <div className="col-lg-5 text-center">
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
