import BlogPost from "@/components/blogs/MedicalBilling";

export const metadata = {
  title: "Medical Billing Career Guide | Jobzenter Blog",
  description: "Launch your career in medical billing and turn healthcare expertise into a high-demand profession.",
  alternates: {
    canonical: "https://jobzenter.in/blogs/medical-billing",
  },
};

const SingleBlogPage = () => {
  return (
    <div>
      <BlogPost />
    </div>
  );
};

export default SingleBlogPage;