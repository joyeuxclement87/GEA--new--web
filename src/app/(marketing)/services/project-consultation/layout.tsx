import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Project Consultation Services | Construction Planning Experts | Global Engineering Agency",
  description:
    "Global Engineering Agency provides professional project consultation services including feasibility assessment, technical advice, construction planning, budget guidance, site evaluation, and development strategy.",
  keywords: [
    "Project Consultation Services",
    "Construction Consultant",
    "Building Advice",
    "Construction Planning Consultant",
    "Project Feasibility Study",
    "Development Consultation",
    "Engineering Consultation",
    "Property Development Advice",
  ],
};

export default function ProjectConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
