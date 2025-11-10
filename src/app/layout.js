import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "@/lib/bootstrap";
import "./globals.css";

import Script from "next/script";

export const metadata = {
  title: "Jobzenter | IT Training, Full Stack Development, AWS, Power BI, Software Testing & 100% Placement Support",
  description:
    "Jobzenter provides hands-on IT training and placement support in Software Testing, Java, AWS, Power BI, and Full Stack Development. Join us to kickstart your IT career.",
  keywords:
    "jobzenter, software training, placements, IT courses, resume building, interview preparation, placement services, Python, Java, AWS, Power BI, Full Stack Development, Software Development, SQL, Business Intelligence, AWS DevOps, IT professional training, career counselling",
  authors: [{ name: "Jobzenter" }],
  robots: "index, follow",
  metadataBase: new URL("https://jobzenter.in"),
  alternates: { canonical: "/" },

  openGraph: {
    title: "Jobzenter - Software Training And Placements",
    description: "We offer hands-on training.",
    url: "https://jobzenter.in/",
    siteName: "Jobzenter",
    images: [
      {
        url: "https://jobzenter.in/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jobzenter - Software Training And Placements",
    description: "Leading training and placement institute offering IT courses",
    images: ["https://jobzenter.in/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="/logo.png"
          type="image/png"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E9Q04EY8H6"
        />
        <Script id="ga-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E9Q04EY8H6');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBV4QZT2');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <Script type="application/ld+json" id="schema-ld">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Course",
                "name": "Software Testing",
                "description":
                  "Hands-on training in manual and automation testing using Selenium, Java, TestNG, and real-time project scenarios.",
                "provider": {
                  "@type": "Organization",
                  "name": "Jobzenter",
                  "sameAs": "https://jobzenter.in/",
                },
              },
              {
                "@type": "LocalBusiness",
                "name": "Jobzenter",
                "image": "https://jobzenter.in/img/logo.png",
                "telephone": "+91 90577 70577",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kamakoti Nagar",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "600100",
                  "addressCountry": "IN",
                },
              },
            ],
          })}
        </Script>
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBV4QZT2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>


        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
