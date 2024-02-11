import aiSummarizerImg from "@/public/aiSummarizer.png";
import motorsHubImg from "@/public/motorsHub.png";
import theGameLibImg from "@/public/theGameLib.png";
import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "Diploma in Industrial Maintenance with Electrical Specialization",
    location: "Dijon, France",
    description:
      "Obtained a BTS in Industrial Maintenance, specializing in electrical systems. Developed skills in troubleshooting and repairing industrial equipment.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    id: 2,
    title: "Graduated bootcamp",
    location: "Nîmes, France",
    description:
      "Completed the Meta Front-End Developer bootcamp on Coursera, gaining practical skills in front-end development and mastering industry-standard technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    id: 3,
    title: "Front-End Developer",
    location: "Nîmes, France",
    description:
      "Currently focusing on personal projects and actively seeking opportunities to apply and further develop my skills in web development.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "The Game Lib",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    code: "https://github.com/Ackarmen/THEgame",
    url: "https://thegamelib.vercel.app/",
    tags: ["Vite.js", "React", "TypeScript", "React router", "Chakra UI"],
    imageUrl: theGameLibImg,
  },
  {
    id: 2,
    title: "Ai-Summarizer",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    code: "https://github.com/Ackarmen/AI-Articles-Summarize",
    url: "https://ai-article-app.vercel.app/",
    tags: ["Vite.js", "React", "Redux", "Tailwind"],
    imageUrl: aiSummarizerImg,
  },
  {
    id: 3,
    title: "Motors Hub",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    code: "https://github.com/Ackarmen/motorsHub",
    url: "https://motorshub.vercel.app/",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
    imageUrl: motorsHubImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Git/GitHub",
] as const;
