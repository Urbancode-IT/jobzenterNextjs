import BlogPost from "@/components/blogs/Fullstack";

export const metadata = {
  title: "Full Stack Development Masterclass | Jobzenter Blog",
  description: "Master both front-end and back-end development to streamline your workflow and boost your career.",
  alternates: {
    canonical: "https://jobzenter.in/blogs/full-stack-courses",
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