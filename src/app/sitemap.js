import { recentBlogs } from "../components/blogs/blogsData";

export default function sitemap() {
  const siteUrl = "https://jobzenter.in";

  const staticPages = [
    "",
    "/courses",
    "/aboutus",
    "/career-lab/placement-preparation",
    "/reach-us",
    "/career-lab/interview-preparation",
    "/career-lab/resume-building",
    "/blogs",
    "/study-abroad",
    "/career-lab/mock-interview"
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${siteUrl}${page}`,
    priority: page === "" ? 1.0 : 0.8,
  }));

  const blogUrls = recentBlogs.map((blog) => ({
    url: `${siteUrl}${blog.link}`,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}