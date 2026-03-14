import { NextResponse } from "next/server";
import { listEnquiries, createEnquiry } from "@/server/services/enquiryService.js";

/**
 * GET /api/enquiries
 * List recent enquiries (optional: ?limit=50).
 * In production, protect this route with auth.
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") ?? "50", 10);
    const data = await listEnquiries(limit);
    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/enquiries
 * Create a new enquiry (e.g. from contact/study-abroad forms).
 * Body: { name, email, phone?, subject?, message?, source? }
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "name and email are required" },
        { status: 400 }
      );
    }

    const row = await createEnquiry({
      name,
      email,
      phone: phone ?? null,
      subject: subject ?? null,
      message: message ?? null,
      source: source ?? null,
    });

    return NextResponse.json({ data: row }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
