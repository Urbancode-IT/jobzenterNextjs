"use client";

import React from "react";
import "./InDemandTools.css";

const row1Tools = [
  { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
];

const row2Tools = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

const row3Tools = [
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg" },
];

const toolRows = [row1Tools, row2Tools, row3Tools];

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

  return (
    <section className="in-demand-section">
      <div className="in-demand-inner">
        <h2
          ref={titleRef}
          className={`in-demand-title ${titleVisible ? "title-sweep" : ""}`}
        >
          In Demand Tools
        </h2>

        {/* Same continuous logo-train pattern as Our Students in Top Companies */}
        <div className="tools-logo-train">
          {toolRows.map((row, rowIndex) => {
            const scrollingRow = [...row, ...row, ...row];
            return (
              <div
                key={`tools-row-${rowIndex}`}
                className={`tools-logo-row ${rowIndex % 2 === 1 ? "is-reverse" : ""}`}
              >
                <div className="tools-logo-track">
                  {scrollingRow.map((tool, index) => (
                    <div
                      key={`${tool.name}-${rowIndex}-${index}`}
                      className="tools-logo-item"
                    >
                      <div className="tools-logo-box">
                        <div className="tools-logo-icon-wrap">
                          <img
                            src={tool.logo}
                            alt={tool.name}
                            className="tools-logo-image"
                            loading="lazy"
                          />
                        </div>
                        <p className="tools-logo-name">{tool.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InDemandTools;
