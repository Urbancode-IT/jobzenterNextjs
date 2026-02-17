import TermsAndConditions from '@/components/terms/TermsAndConditions';

export const metadata = {
    title: "Terms and Conditions | Jobzenter",
    description: "Read Jobzenter's terms and conditions for using our website and services.",
    alternates: {
        canonical: "https://jobzenter.in/terms-conditions",
    },
};

export default function TermsPage() {
    return (
        <>
            <TermsAndConditions />
        </>
    )
}