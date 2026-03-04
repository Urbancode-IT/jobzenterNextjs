/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      // 1️⃣ Force www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jobzenter.in" }],
        destination: "https://jobzenter.in/:path*",
        permanent: true,
      },

      // 2️⃣ SPECIFIC MAPPINGS (Must be ABOVE generic rules)
      { source: "/terms.html", destination: "/terms-conditions", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/about.html", destination: "/aboutus", permanent: true },
      { source: "/contact.html", destination: "/reach-us", permanent: true },
      { source: "/bt/resumebuild.html", destination: "/career-lab/resume-building", permanent: true },
      { source: "/bt/interviewprep.html", destination: "/career-lab/interview-preparation", permanent: true },

      // 3️⃣ GENERIC CLEANUP (Must be LAST)
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;