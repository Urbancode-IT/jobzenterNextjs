/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      // 1. Specific Page Redirects (MUST BE FIRST)
      { 
        source: "/terms.html", 
        destination: "/terms-conditions", 
        permanent: true 
      },
      { 
        source: "/privacy-policy.html", 
        destination: "/privacy-policy", 
        permanent: true 
      },
      { 
        source: "/about.html", 
        destination: "/aboutus", 
        permanent: true 
      },
      {
        source: "/courses/software-testing",
        destination: "/courses?category=Testing",
        permanent: true,
      },

      // 2. Force www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jobzenter.in" }],
        destination: "https://jobzenter.in/:path*",
        permanent: true,
      },

      // 3. Generic .html cleanup (MUST BE LAST)
      // This rule is a "catch-all" for anything not defined above
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;