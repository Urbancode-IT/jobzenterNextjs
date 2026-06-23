import { notFound } from "next/navigation";
import MbbsDestinationDetailPage from "@/components/study-abroad/mbbs/MbbsDestinationDetailPage";
import {
  getAllMbbsDestinationSlugs,
  getMbbsDestinationBySlug,
} from "@/data/mbbsDestinations";

export async function generateStaticParams() {
  return getAllMbbsDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = getMbbsDestinationBySlug(slug);

  if (!destination) {
    return { title: "MBBS Destination Not Found | Jobzenter" };
  }

  return {
    title: `MBBS in ${destination.name} | Jobzenter Study Abroad`,
    description: `${destination.overview.slice(0, 140)}...`,
    keywords: [
      `MBBS in ${destination.name}`,
      "MBBS abroad",
      destination.name,
      "Jobzenter",
      "NEET",
      "FMGE",
    ],
    openGraph: {
      title: `MBBS in ${destination.name} – Jobzenter`,
      description: destination.overview,
      url: `https://jobzenter.in/study-abroad/mbbs/${destination.slug}`,
      siteName: "Jobzenter",
      type: "website",
      images: [
        {
          url: `https://jobzenter.in${destination.image}`,
          alt: `MBBS in ${destination.name}`,
        },
      ],
    },
  };
}

export default async function MbbsDestinationPage({ params }) {
  const { slug } = await params;
  const destination = getMbbsDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return <MbbsDestinationDetailPage destination={destination} />;
}
