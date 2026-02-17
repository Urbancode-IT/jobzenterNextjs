import BlogPost from "@/components/blogs/SoftwareTesting";

export const metadata = {
  title: "Software Testing: Backbone of Quality | Jobzenter Blog",
  description: "Boost your career with software testing skills and ensure the backbone of high-quality software.",
  alternates: {
    canonical: "https://jobzenter.in/blogs/software-testing",
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