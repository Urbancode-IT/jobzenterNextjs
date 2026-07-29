"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import "./InDemandTools.css";

// Tool data categorized by rows exactly matching the screenshot
const row1Tools = [
  { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" }
];

const row2Tools = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
];

const row3Tools = [
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg" }
];

const InDemandTools = () => {
  const titleRef = React.useRef(null);
  const [titleVisible, setTitleVisible] = React.useState(false);

  React.useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const renderRow = (toolsList, isReverse = false) => {
    // Triplicate the list for seamless infinite loop scroll
    const scrollingTools = [...toolsList, ...toolsList, ...toolsList];

    return (
      <div className="relative my-6 flex items-center">
        {/* Outer Capsule Container */}
        <div className="w-full rounded-[24px] border border-[#FFEFA6] bg-[#fffbf2] p-4 shadow-[0_8px_30px_rgba(255,212,0,0.04)] backdrop-blur-md overflow-hidden">
          {/* Infinite Marquee row */}
          <div className={`tools-logo-row ${isReverse ? "is-reverse" : ""}`}>
            <div className="tools-logo-track">
              {scrollingTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex h-[88px] w-[158px] min-w-[158px] flex-col items-center justify-center rounded-[12px] bg-white border border-[#ecdca2] p-2 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(255,212,0,0.25)] hover:-translate-y-1.5 hover:border-[#ffd400] transition-all duration-300 select-none group"
                >
                  {/* Logo wrapper */}
                  <div className="relative flex h-10 w-10 items-center justify-center mb-1 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-9 w-9 object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Tool Name */}
                  <span className="text-xs font-bold text-slate-800 text-center transition-colors duration-300 group-hover:text-black">
                    {tool.name}
                  </span>

                  {/* Bottom yellow stripe ornament */}
                  <div className="w-4 h-[2px] mt-1 rounded-full bg-[#FFD400] opacity-80 group-hover:w-8 group-hover:opacity-100 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#fffdf5] px-4 py-16 sm:px-6 lg:px-8">
      {/* Background Yellow Curve Vector Ornament (Top Left) */}
      <div className="absolute top-0 left-0 pointer-events-none select-none z-0">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-40,160 C60,160 110,60 160,-40 L-40,-40 Z" fill="#FFEFA6" opacity="0.35" />
          <path d="M-70,190 C70,190 120,70 190,-70 L-70,-70 Z" fill="#FFF9C4" opacity="0.25" />
        </svg>
      </div>

      {/* Background Yellow Curve Vector Ornament (Bottom Right) */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none z-0">
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180 transform">
          <path d="M-40,180 C80,180 130,70 180,-40 L-40,-40 Z" fill="#FFEFA6" opacity="0.4" />
          <path d="M-70,210 C100,210 150,80 210,-70 L-70,-70 Z" fill="#FFF9C4" opacity="0.3" />
        </svg>
      </div>

      {/* Decorative Grid of Dots (Top Right style) */}
      <div className="absolute top-20 right-10 pointer-events-none select-none opacity-20 hidden md:block">
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
          <circle cx="10" cy="10" r="2.5" fill="#FFD400" />
          <circle cx="30" cy="10" r="2.5" fill="#FFD400" />
          <circle cx="50" cy="10" r="2.5" fill="#FFD400" />
          <circle cx="70" cy="10" r="2.5" fill="#FFD400" />
          <circle cx="10" cy="30" r="2.5" fill="#FFD400" />
          <circle cx="30" cy="30" r="2.5" fill="#FFD400" />
          <circle cx="50" cy="30" r="2.5" fill="#FFD400" />
          <circle cx="70" cy="30" r="2.5" fill="#FFD400" />
          <circle cx="10" cy="50" r="2.5" fill="#FFD400" />
          <circle cx="30" cy="50" r="2.5" fill="#FFD400" />
          <circle cx="50" cy="50" r="2.5" fill="#FFD400" />
          <circle cx="70" cy="50" r="2.5" fill="#FFD400" />
          <circle cx="10" cy="70" r="2.5" fill="#FFD400" />
          <circle cx="30" cy="70" r="2.5" fill="#FFD400" />
          <circle cx="50" cy="70" r="2.5" fill="#FFD400" />
          <circle cx="70" cy="70" r="2.5" fill="#FFD400" />
          <circle cx="10" cy="90" r="2.5" fill="#FFD400" />
          <circle cx="30" cy="90" r="2.5" fill="#FFD400" />
          <circle cx="50" cy="90" r="2.5" fill="#FFD400" />
          <circle cx="70" cy="90" r="2.5" fill="#FFD400" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl z-10">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center mb-10">
          <h2
            ref={titleRef}
            className={`in-demand-title ${titleVisible ? "title-sweep" : ""}`}
          >
            In Demand Tools
          </h2>
        </header>

        {/* Carousel Tracks */}
        <div className="px-4">
          {renderRow(row1Tools, false)}
          {renderRow(row2Tools, true)}
          {renderRow(row3Tools, false)}
        </div>
      </div>
    </section>
  );
};

export default InDemandTools;