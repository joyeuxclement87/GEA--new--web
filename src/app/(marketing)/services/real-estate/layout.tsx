import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Real Estate Services | Property Advisory & Investment | Global Engineering Agency",
  description:
    "Global Engineering Agency provides real estate advisory, property sourcing, investment feasibility, refurbishment, and demolition services grounded in genuine technical expertise.",
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
