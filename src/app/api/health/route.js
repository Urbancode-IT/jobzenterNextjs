import { query } from "@/lib/db";

/**
 * GET /api/health
 * Health check that verifies the app and database are reachable.
 */
export async function GET() {
  try {
    await query("SELECT 1 AS ok");
    return Response.json({
      ok: true,
      service: "jobzenter-api",
      db: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return Response.json(
      {
        ok: false,
        service: "jobzenter-api",
        db: "error",
        error: err.message,
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
