import Link from "next/link";

export default function StudyAbroadDestinationNotFound() {
  return (
    <main className="container py-5 text-center" style={{ minHeight: "50vh" }}>
      <h1 className="h3 mb-3">Destination not found</h1>
      <p className="text-muted mb-4">
        We couldn&apos;t find that study abroad destination.
      </p>
      <Link href="/study-abroad" className="btn btn-warning rounded-pill px-4">
        Back to Study Abroad
      </Link>
    </main>
  );
}
