import type { Metadata } from "next";
import ProjectsClientPage from "./ProjectsClientPage";

export const metadata: Metadata = {
  title: "Projects | Global Engineering Agency",
  description:
    "Explore residential, commercial, industrial, infrastructure, and renovation projects delivered by Global Engineering Agency through architecture, engineering, and integrated construction expertise.",
  keywords: [
    "construction projects",
    "architecture portfolio",
    "engineering projects",
    "residential and commercial development",
    "global engineering agency projects",
  ],
};

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
