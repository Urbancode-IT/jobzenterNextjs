/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Primary Domain Redirect: www to non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.jobzenter.in",
          },
        ],
        destination: "https://jobzenter.in/:path*",
        permanent: true,
      },
      // Specific Old HTML to New Route Mapping
      { source: "/about.html", destination: "/aboutus", permanent: true },
      { source: "/contact.html", destination: "/reach-us", permanent: true },
      { source: "/service.html", destination: "/courses", permanent: true },
      { source: "/resumebuild.html", destination: "/career-lab/resume-building", permanent: true },
      { source: "/courses.html", destination: "/courses", permanent: true },
      { source: "/blogjobz/index.html", destination: "/blogs", permanent: true },
      { source: "/blogjobz", destination: "/blogs", permanent: true },
      { source: "/bt/resumebuild.html", destination: "/career-lab/resume-building", permanent: true },
      { source: "/offlinebenefits/index.html", destination: "/", permanent: true },
      { source: "/offlinebenefits/resumebuild.html", destination: "/career-lab/resume-building", permanent: true },
      { source: "/bt/interviewprep.html", destination: "/career-lab/interview-preparation", permanent: true },
      { source: "/referandearn.html", destination: "/", permanent: true },
      { source: "/privacyolicy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms.html", destination: "/terms-conditions", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/www.jobzenter.in/index.html", destination: "/", permanent: true },

      // index.html cleanup for any path
      {
        source: "/:path*/index.html",
        destination: "/:path*",
        permanent: true,
      },

      // Generic .html to clean URL (only if not matched above)
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

