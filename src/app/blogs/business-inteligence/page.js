import BlogPost from "@/components/blogs/BusinessInteligence";

export const metadata = {
  title: "Business Intelligence: Unlock the Power of Data | Jobzenter Blog",
  description: "Transform your business with business intelligence and data power.",
  alternates: {
    canonical: "https://jobzenter.in/blogs/business-inteligence",
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