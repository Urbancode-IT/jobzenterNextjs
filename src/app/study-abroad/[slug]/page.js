import { notFound } from "next/navigation";
import DestinationDetailPage from "@/components/study-abroad/destination/DestinationDetailPage";
import {
  getAllDestinationSlugs,
  getDestinationBySlug,
} from "@/data/studyAbroadDestinations";

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return { title: "Destination Not Found | Jobzenter" };
  }

  return {
    title: `Study in ${destination.name} | Jobzenter Study Abroad`,
    description: `${destination.description}. ${destination.overview.slice(0, 140)}...`,
    keywords: [
      `study in ${destination.name}`,
      "study abroad",
      destination.name,
      "Jobzenter",
      "scholarship",
      "visa assistance",
    ],
    openGraph: {
      title: `Study in ${destination.name} – Jobzenter`,
      description: destination.overview,
      url: `https://jobzenter.in/study-abroad/${destination.slug}`,
      siteName: "Jobzenter",
      type: "website",
      images: [
        {
          url: `https://jobzenter.in${destination.image}`,
          alt: `Study in ${destination.name}`,
        },
      ],
    },
  };
}

export default async function StudyAbroadDestinationPage({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return <DestinationDetailPage destination={destination} />;
}
