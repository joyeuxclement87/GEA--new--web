import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Project Management Services | Construction Project Managers | Global Engineering Agency",
  description:
    "Global Engineering Agency provides professional project management services including planning, scheduling, budgeting, contractor coordination, quality control, and successful project delivery for residential, commercial, and industrial developments.",
  keywords: [
    "Project Management Services",
    "Construction Project Management",
    "Project Planning",
    "Construction Supervision",
    "Cost Control",
    "Quality Management",
    "Building Project Management",
    "Project Coordination",
    "Construction Consulting",
    "Engineering Project Management",
  ],
};

export default function ProjectManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
