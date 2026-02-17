import BlogPost from "@/components/blogs/Ccna";

export const metadata = {
  title: "CCNA: Your Gateway to Global Networking | Jobzenter Blog",
  description: "Become a Cisco Certified Network Associate and launch your global networking career.",
  alternates: {
    canonical: "https://jobzenter.in/blogs/ccna",
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