import { NextResponse } from "next/server";

const API_URL =
  process.env.EXTERNAL_ENROLLMENT_API_URL ||
  "https://api.zen-urbancode.in/leads/external-enrollment/jobzenter";

function resolveApiKey(raw) {
  const value = String(raw || "MY_SUPER_SECRET_KEY").trim().replace(/^["']|["']$/g, "");
  const match = value.match(/^x-api-key\s*:\s*(.+)$/i);
  return (match ? match[1] : value).trim();
}

const API_KEY = resolveApiKey(process.env.EXTERNAL_COURSES_API_KEY);

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));

    const name = clean(body.name);
    const mobile_number = clean(body.mobile_number || body.phone);
    const email = clean(body.email);
    const pincode = clean(body.pincode);
    const course = clean(body.course);
    const course_id = clean(body.course_id);
    const mode = clean(body.mode);
    const message = clean(body.message);

    if (!name || !mobile_number) {
      return NextResponse.json(
        { success: false, error: "Name and mobile number are required." },
        { status: 400 }
      );
    }

    if (!course_id && !course) {
      return NextResponse.json(
        { success: false, error: "Please select a course." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      mobile_number,
      ...(email && { email }),
      ...(pincode && { pincode }),
      ...(course && { course }),
      ...(course_id && { course_id }),
      ...(mode && { mode }),
      ...(message && { message }),
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data?.error || "Failed to submit enquiry",
        },
        { status: res.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data?.message || "Lead submitted successfully",
      lead_id: data?.lead_id ?? null,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err.message || "Failed to submit enquiry",
      },
      { status: 500 }
    );
  }
}
