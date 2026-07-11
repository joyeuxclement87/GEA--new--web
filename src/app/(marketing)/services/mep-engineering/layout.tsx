import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "MEP Engineering Services | Mechanical, Electrical & Plumbing | Global Engineering Agency",
  description:
    "Global Engineering Agency provides integrated Mechanical, Electrical & Plumbing engineering services including system design, technical documentation, utility coordination, energy-efficient solutions, and construction support.",
  keywords: [
    "MEP Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Plumbing Design",
    "Building Services Engineering",
    "MEP Consultants",
    "Building Engineering Systems",
    "Integrated Engineering Solutions",
  ],
};

export default function MepEngineeringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
