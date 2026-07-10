import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "BOQ & Cost Estimation Services | Construction Budget Planning | Global Engineering Agency",
  description:
    "Global Engineering Agency provides professional BOQ preparation, quantity surveying, construction cost estimation, material quantity take-offs, and project budgeting services for residential and commercial developments.",
  keywords: [
    "BOQ Services",
    "Cost Estimation Services",
    "Quantity Surveying",
    "Construction Budget Planning",
    "Bill of Quantities",
    "Construction Cost Consultant",
    "Material Take-Off",
    "Project Cost Management",
    "Building Cost Estimate",
  ],
};

export default function BoqCostEstimationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
