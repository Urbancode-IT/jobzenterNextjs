import Link from "next/link";

export default function MbbsDestinationNotFound() {
  return (
    <main className="container py-5 text-center" style={{ minHeight: "50vh" }}>
      <h1 className="h3 mb-3">MBBS destination not found</h1>
      <p className="text-muted mb-4">
        We couldn&apos;t find that MBBS abroad destination.
      </p>
      <Link href="/study-abroad" className="btn btn-warning rounded-pill px-4">
        Back to Study Abroad
      </Link>
    </main>
  );
}
