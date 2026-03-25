import AllBlogs from "@/components/blogs/AllBlogs";
import RecentBlogs from "@/components/blogs/RecentBlogs";


const BlogsPage = () => {
  return (
    <>
      <div
        className="text-white text-center d-flex align-items-center justify-content-center relative"
        style={{ height: "300px", background: "#000 url('/blogs/hero.png') center/cover" ,position:"relative", overflow: "hidden"}}
      >
        <div 
          className="hero-image-bg" 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundImage: "url('/blogs/hero.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            filter: "brightness(1.2)" /* Increased image brightness */
          }}
        ></div>
        <div className="overlay" style={{ background: "rgba(0, 0, 0, 0.3)", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></div>

        <h1 className="fw-bold z-1 text-white" style={{ textShadow: "0 0 20px rgba(0,0,0,0.8)", fontSize: "3.5rem" }}>Get to know your tech updates</h1>
      </div>

      <RecentBlogs />
      <AllBlogs />
    </>
  );
};

export default BlogsPage;
