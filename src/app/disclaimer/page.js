import Disclaimer from '@/components/terms/Disclaimer';

export const metadata = {
  title: "Disclaimer | Jobzenter",
  description: "Read Jobzenter's disclaimer regarding the information provided on our website.",
  alternates: {
    canonical: "https://jobzenter.in/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Disclaimer />
    </>
  )
}