import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Insights | Global Engineering Agency",
  description:
    "Explore premium insights, project stories, and industry perspectives from Global Engineering Agency.",
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
