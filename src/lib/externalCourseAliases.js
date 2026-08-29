/**
 * Maps Jobzenter website course titles to the external courses API.
 * IDs are used so submit works even before the courses dropdown finishes loading.
 */
const WEBSITE_TO_EXTERNAL_COURSE = {
  ".net fullstack development": { id: "CRS-.NE-001", name: ".Net Angular" },
  "java fullstack development": { id: "CRS-JAV-002", name: "Java Fullstack" },
  "mern stack development": { id: "CRS-MER-001", name: "MERN" },
  "mean stack development": { id: "CRS-MEA-001", name: "MEAN" },
  "python fullstack development": { id: "CRS-PYT-002", name: "Python full stack" },
};

function normalizeCourseName(courseName) {
  return String(courseName || "").toLowerCase().trim();
}

export function getWebsiteCourseAlias(courseName) {
  return WEBSITE_TO_EXTERNAL_COURSE[normalizeCourseName(courseName)] || null;
}

export function resolveExternalCourseName(courseName) {
  return getWebsiteCourseAlias(courseName)?.name || normalizeCourseName(courseName);
}

export function findExternalCourse(courses, courseName) {
  if (!courseName) return null;

  const alias = getWebsiteCourseAlias(courseName);
  if (alias) return alias;

  if (!Array.isArray(courses) || courses.length === 0) return null;

  const resolvedName = resolveExternalCourseName(courseName);
  const originalKey = normalizeCourseName(courseName);

  return (
    courses.find((item) => {
      const name = (typeof item === "string" ? item : item?.name || "").toLowerCase().trim();
      return name === originalKey || name === resolvedName;
    }) || null
  );
}

export function formatEnrollmentError(message) {
  const text = String(message || "").trim();
  if (!text || text === "Failed to submit enquiry") {
    return "Failed to submit enquiry. Please try again later.";
  }
  if (text.toLowerCase().includes("duplicate key")) {
    return "You have already submitted an enquiry for this course. Our team will contact you soon.";
  }
  return text;
}
