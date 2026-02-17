import BlogPost from "@/components/blogs/FullStackTrends";

export const metadata = {
  title: "Full Stack Development: Trends to Watch in 2025 | Jobzenter Blog",
  description: "Explore the top full stack development trends for 2025 and stay ahead in the tech industry.",
  alternates: {
    canonical: "https://jobzenter.in/blogs/full-stack-trends",
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