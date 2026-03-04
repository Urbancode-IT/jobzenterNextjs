import { recentBlogs } from "../../components/blogs/blogsData";

export async function GET() {

  const siteUrl = "https://jobzenter.in";

  const blogItems = recentBlogs.map(blog => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${siteUrl}${blog.link}</link>
      <description><![CDATA[${blog.description}]]></description>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <guid>${siteUrl}${blog.link}</guid>
    </item>
  `).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Jobzenter Blog</title>
      <link>${siteUrl}</link>
      <description>Latest career tips and technology blogs</description>

      <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

      ${blogItems}

    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}