import { studyAbroadDestinations } from "./studyAbroadDestinations";

const SHORT_NAMES = {
  "united-states": "USA",
  "united-kingdom": "UK",
  canada: "Canada",
  australia: "Australia",
  germany: "Germany",
  ireland: "Ireland",
  "new-zealand": "New Zealand",
  singapore: "Singapore",
};

const HEADINGS = {
  "united-states": "Build a world-class career in the United States",
  "united-kingdom": "Graduate faster with a prestigious UK degree",
  canada: "Study, work, and grow in welcoming Canada",
  australia: "Innovate and thrive in Australia's top universities",
  germany: "Access tuition-free excellence in Germany",
  ireland: "Launch your tech career from Europe's hub",
  "new-zealand": "Experience safe, quality education in New Zealand",
  singapore: "Step into Asia's leading education destination",
};

export const countryBenefitsSlides = studyAbroadDestinations.map((country) => {
  const shortName = SHORT_NAMES[country.slug] ?? country.name;
  const benefitPool = [...country.highlights, ...country.whyStudy];
  const benefits = benefitPool.slice(0, 5).map((text) => ({ text }));

  return {
    slug: country.slug,
    name: country.name,
    shortName,
    category: country.description,
    image: country.image,
    universities: country.universities,
    heading: HEADINGS[country.slug] ?? `Discover why students choose ${country.name}`,
    benefits,
  };
});
