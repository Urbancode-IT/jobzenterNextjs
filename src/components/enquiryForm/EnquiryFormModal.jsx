'use client';
import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendForm } from '../../lib/emailjsClient';
import { findExternalCourse, formatEnrollmentError } from '../../lib/externalCourseAliases';
import "./EnquiryForm.css";

const EXTRA_COURSE_OPTIONS = ["Help me choose my course", "Other"];

const EnquiryFormModal = ({ isOpen, onClose, courseName }) => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    course: courseName || "",
    courseId: "",
    message: "",
    mode: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [coursesError, setCoursesError] = useState("");
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const courseDropdownRef = useRef(null);

  useEffect(() => {
    if (!courseName && courses.length === 0) return;

    const match = findExternalCourse(courses, courseName);

    setFormData((prev) => ({
      ...prev,
      course: courseName || (typeof match === "string" ? match : match?.name) || prev.course || "",
      courseId: (typeof match === "object" && match?.id) || prev.courseId || "",
    }));
  }, [courseName, courses]);

  useEffect(() => {
    if (!isOpen) setIsCourseOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isCourseOpen) return;

    const handlePointerDown = (event) => {
      if (!courseDropdownRef.current?.contains(event.target)) {
        setIsCourseOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsCourseOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCourseOpen]);

  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    const loadCourses = async () => {
      setCoursesLoading(true);
      setCoursesError("");
      try {
        const res = await fetch("/api/external-courses");
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(data?.error || "Failed to load courses");
        }
        if (!cancelled) {
          setCourses(Array.isArray(data?.courses) ? data.courses : []);
        }
      } catch (err) {
        if (!cancelled) {
          setCourses([]);
          setCoursesError(err.message || "Failed to load courses");
        }
      } finally {
        if (!cancelled) setCoursesLoading(false);
      }
    };

    loadCourses();
    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  const courseOptions = useMemo(() => {
    const merged = courses.map((item) =>
      typeof item === "string"
        ? { id: "", name: item, type: "" }
        : {
            id: item?.id || "",
            name: item?.name || "",
            type: item?.type || "",
          }
    ).filter((item) => item.name);

    if (courseName) {
      const matched = findExternalCourse(merged, courseName);
      const hasDisplayOption = merged.some(
        (item) => item.name.toLowerCase() === courseName.toLowerCase()
      );

      if (!hasDisplayOption) {
        merged.unshift({
          id: matched?.id || "",
          name: courseName,
          type: matched?.type || "",
        });
      }
    }

    EXTRA_COURSE_OPTIONS.forEach((option) => {
      if (!merged.some((item) => item.name === option)) {
        merged.push({ id: "", name: option, type: "" });
      }
    });

    const nameCounts = merged.reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});

    return merged.map((item) => ({
      ...item,
      label:
        nameCounts[item.name] > 1 && item.type
          ? `${item.name} (${item.type})`
          : item.name,
    }));
  }, [courses, courseName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setStatus({ type: "", message: "" });
  };

  const selectCourse = (course) => {
    setFormData((prev) => ({
      ...prev,
      course: course.name,
      courseId: course.id || "",
    }));
    setErrors((prev) => ({ ...prev, course: "" }));
    setStatus({ type: "", message: "" });
    setIsCourseOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits.";
    if (!formData.course) newErrors.course = "Please select a course.";
    if (!formData.mode) newErrors.mode = "Please select a mode.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "loading", message: "Sending your enquiry..." });

    try {
      const matchedCourse = findExternalCourse(courses, formData.course);
      const courseId = formData.courseId || matchedCourse?.id || "";
      const externalCourseName =
        (typeof matchedCourse === "object" && matchedCourse?.name) ||
        (typeof matchedCourse === "string" ? matchedCourse : "") ||
        formData.course;

      const res = await fetch("/api/external-enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          mobile_number: formData.phone.trim(),
          pincode: formData.pincode.trim(),
          course: externalCourseName,
          course_id: courseId || undefined,
          mode: formData.mode,
          message: formData.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

      try {
        await sendForm(formRef.current);
      } catch {
        // Enrollment API already saved the lead.
      }

      setStatus({
        type: "success",
        message:
          "Enquiry submitted successfully! Our team will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        pincode: "",
        course: courseName || "",
        courseId: "",
        message: "",
        mode: "",
      });

      setTimeout(() => {
        setStatus({ type: "", message: "" });
        onClose();
      }, 1500);
    } catch (err) {
      setStatus({
        type: "error",
        message: formatEnrollmentError(err?.message),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="enquiry-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="enquiry-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="enquiry-header">
              <h3>Enquire Today</h3>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="container">
              {/* include hidden template fields required by EmailJS template */}
              <input type="hidden" name="via" value="Course page Enquiry" />

              <div className="row g-3">
                {/* Inputs */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="pincode"
                    placeholder="Enter your pin code"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>

                <div className={`col-md-6 course-dropdown-col${isCourseOpen ? " is-open" : ""}`}>
                  <div
                    className={`course-dropdown${isCourseOpen ? " is-open" : ""}`}
                    ref={courseDropdownRef}
                  >
                    <input type="hidden" name="course" value={formData.course} />
                    <button
                      type="button"
                      className={`course-dropdown-trigger${formData.course ? "" : " is-placeholder"}`}
                      onClick={() => {
                        if (!coursesLoading) setIsCourseOpen((open) => !open);
                      }}
                      disabled={coursesLoading}
                      aria-haspopup="listbox"
                      aria-expanded={isCourseOpen}
                    >
                      <span>
                        {coursesLoading
                          ? "Loading courses..."
                          : formData.course || "Select a course"}
                      </span>
                      <span className="course-dropdown-caret" aria-hidden />
                    </button>
                    {isCourseOpen && (
                      <ul className="course-dropdown-menu" role="listbox">
                        {courseOptions.map((course) => (
                          <li key={course.id || course.label}>
                            <button
                              type="button"
                              className={`course-dropdown-option${formData.courseId ? (formData.courseId === course.id ? " is-active" : "") : (formData.course === course.name ? " is-active" : "")}`}
                              onClick={() => selectCourse(course)}
                              role="option"
                              aria-selected={
                                formData.courseId
                                  ? formData.courseId === course.id
                                  : formData.course === course.name
                              }
                            >
                              {course.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {errors.course && <small className="text-danger">{errors.course}</small>}
                  {coursesError && !errors.course && (
                    <small className="text-danger">Could not load courses. Please try again.</small>
                  )}
                </div>

                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                  >
                    <option value="">Mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="lets decide later">Let's decide later</option>
                  </select>
                  {errors.mode && <small className="text-danger">{errors.mode}</small>}
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Any specific requirements?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <div className="col-12 text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-success px-5 py-2 rounded-pill submit-btn"
                    disabled={loading || coursesLoading}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm me-2"></span>
                    ) : null}
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryFormModal;
