import BlogPost from "@/components/blogs/AwsDevops";

export const metadata = {
  title: "AWS DevOps Trends | Jobzenter Blog",
  description: "Explore why AWS DevOps is the future of efficient development and operations.",
  alternates: {
    canonical: "https://jobzenter.in/blogs/aws-devops",
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