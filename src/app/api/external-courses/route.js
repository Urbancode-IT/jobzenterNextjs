import { NextResponse } from "next/server";

const API_URL =
  process.env.EXTERNAL_COURSES_API_URL ||
  "https://api.zen-urbancode.in/leads/external-courses/jobzenter";

function resolveApiKey(raw) {
  const value = String(raw || "MY_SUPER_SECRET_KEY").trim().replace(/^["']|["']$/g, "");
  const match = value.match(/^x-api-key\s*:\s*(.+)$/i);
  return (match ? match[1] : value).trim();
}

const API_KEY = resolveApiKey(process.env.EXTERNAL_COURSES_API_KEY);

function pickCourse(item) {
  if (typeof item === "string") {
    const name = item.trim();
    return name ? { id: "", name, type: "" } : null;
  }
  if (!item || typeof item !== "object") return null;

  const name = String(
    item.course_name ||
      item.courseName ||
      item.name ||
      item.title ||
      item.course ||
      item.label ||
      ""
  ).trim();
  if (!name) return null;

  return {
    id: String(item.course_id || item.id || "").trim(),
    name,
    type: String(item.course_type || item.type || "").trim(),
  };
}

function extractList(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];

  const nested = payload.data;
  if (Array.isArray(nested)) return nested;
  if (nested && typeof nested === "object") {
    if (Array.isArray(nested.courses)) return nested.courses;
    if (Array.isArray(nested.items)) return nested.items;
  }

  if (Array.isArray(payload.courses)) return payload.courses;
  if (Array.isArray(payload.items)) return payload.items;
  if (Array.isArray(payload.results)) return payload.results;

  return [];
}

export async function GET() {
  try {
    const res = await fetch(API_URL, {
      headers: {
        "x-api-key": API_KEY,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const payload = await res.json().catch(() => null);

    if (!res.ok) {
      return NextResponse.json(
        {
          error: payload?.error || "Failed to load courses",
          courses: [],
        },
        { status: res.status }
      );
    }

    const list = extractList(payload);
    const seen = new Set();
    const courses = (Array.isArray(list) ? list : [])
      .map(pickCourse)
      .filter(Boolean)
      .filter((course) => {
        const key = course.id || course.name;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({ courses });
  } catch (err) {
    return NextResponse.json(
      {
        error: err.message || "Failed to load courses",
        courses: [],
      },
      { status: 500 }
    );
  }
}
