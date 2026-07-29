import type { LucideIcon } from "lucide-react";
import { Cloud, Github } from "lucide-react";

export type Tool = {
  name: string;
  description: string;
  level: "Beginner" | "Intermediate";
  trending?: boolean;
  new?: boolean;
  logo?: string;
  icon?: LucideIcon;
  accent: string;
};

export const tools: Tool[] = [
  {
    name: "Power BI",
    description: "Visualize business insights through interactive reporting.",
    level: "Intermediate",
    logo: "/courses/data-analytics-power-bi.png",
    accent: "#D9A400",
  },
  {
    name: "GraphQL",
    description: "Query language for efficient API development and data fetching.",
    level: "Intermediate",
    new: true,
    logo: "/courses/graphql.svg",
    accent: "#e534fc",
  },
  {
    name: "Angular",
    description: "Build scalable web applications with TypeScript framework.",
    level: "Intermediate",
    logo: "/courses/angular.svg",
    accent: "#dd0031",
  },
  {
    name: "GitHub",
    description: "Collaborate securely with source control and CI/CD workflows.",
    level: "Beginner",
    logo: "/mncs/github.png",
    accent: "#181717",
  },
  {
    name: "React",
    description: "Craft modern user experiences using reusable component design.",
    level: "Beginner",
    logo: "/courses/reactNative.webp",
    accent: "#61dafb",
  },
  {
    name: "Docker",
    description: "Containerize applications for consistent deployment everywhere.",
    level: "Intermediate",
    logo: "/courses/Docker.png",
    accent: "#2496ed",
  },
  {
    name: "Python",
    description: "Automate workflows, analytics, and data pipelines with ease.",
    level: "Beginner",
    logo: "/courses/python.jpg",
    accent: "#3776ab",
  },
  {
    name: "Tableau",
    description: "Create stunning visual analytics dashboards for data insights.",
    level: "Intermediate",
    new: true,
    logo: "/courses/tableau.svg",
    accent: "#e8622a",
  },
  {
    name: "Microsoft Teams",
    description: "Collaborate and communicate with integrated productivity tools.",
    level: "Intermediate",
    new: true,
    logo: "/mncs/microsoft.png",
    accent: "#0078d7",
  },
  {
    name: "Next.js",
    description: "Build fast, SEO-ready React apps with hybrid rendering.",
    level: "Intermediate",
    logo: "/next.svg",
    accent: "#000000",
  },
  {
    name: "MongoDB",
    description: "Scale schema-less storage for cloud-native applications.",
    level: "Intermediate",
    logo: "/courses/mongodb.webp",
    accent: "#00a84f",
  },
  {
    name: "AWS",
    description: "Deploy resilient infrastructure on the world's leading cloud.",
    level: "Intermediate",
    logo: "/courses/aws-logo.png",
    accent: "#FF9900",
  },
];
