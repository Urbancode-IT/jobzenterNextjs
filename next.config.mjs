/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [

      // www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jobzenter.in" }],
        destination: "https://jobzenter.in/:path*",
        permanent: true,
      },

      // remove index.html
      {
        source: "/:path*/index.html",
        destination: "/:path*",
        permanent: true,
      },

      // main html redirects
      { source: "/about.html", destination: "/aboutus", permanent: true },
      { source: "/contact.html", destination: "/reach-us", permanent: true },
      { source: "/service.html", destination: "/courses", permanent: true },
      { source: "/courses.html", destination: "/courses", permanent: true },

      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms.html", destination: "/terms-conditions", permanent: true },
      { source: "/disclaimer.html", destination: "/disclaimer", permanent: true },

      { source: "/blogjobz/index.html", destination: "/blogs", permanent: true },

      { source: "/bt/resumebuild.html", destination: "/career-lab/resume-building", permanent: true },
      { source: "/bt/interviewprep.html", destination: "/career-lab/interview-preparation", permanent: true },
      { source: "/resumebuild.html", destination: "/career-lab/resume-building", permanent: true },

      // generic html cleanup
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },

      { source: "/index.html", destination: "/", permanent: true },

    ];
  },
};

export default nextConfig;