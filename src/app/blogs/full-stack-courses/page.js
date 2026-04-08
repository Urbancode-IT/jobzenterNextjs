import BlogPost from "@/components/blogs/Fullstack";
import MorePosts from "@/components/blogs/MorePosts";

const SingleBlogPage = () => {
  return (
    <div>
      <BlogPost />
      <MorePosts currentPostId={1} />
    </div>
  );
};

export default SingleBlogPage;