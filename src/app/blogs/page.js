import AllBlogs from "@/components/blogs/AllBlogs";
import RecentBlogs from "@/components/blogs/RecentBlogs";

export const metadata = {
  title: "Tech Blogs | Jobzenter - Latest Tech Updates and Career Tips",
  description: "Stay updated with the latest trends in technology, software testing, full stack development, and career tips from Jobzenter.",
  alternates: {
    canonical: "https://jobzenter.in/blogs",
  },
};

const BlogsPage = () => {
  return (
    <>
      <div
        className="text-white text-center d-flex align-items-center justify-content-center relative"
        style={{ height: "300px", background: "#000 url('/blogs/hero.png') center/cover", position: "relative" }}
      >
        <div className="overlay" style={{ background: "rgba(0, 0, 0, 0.6)", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></div>

        <h1 className="fw-bold z-1  ">Get to know your tech updates</h1>
      </div>

      <RecentBlogs />
      <AllBlogs />
    </>
  );
};

export default BlogsPage;
