import PrivacyPolicy from '@/components/terms/PrivacyPolicy';

export const metadata = {
  title: "Privacy Policy | Jobzenter",
  description: "Read Jobzenter's privacy policy to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://jobzenter.in/privacy-policy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}