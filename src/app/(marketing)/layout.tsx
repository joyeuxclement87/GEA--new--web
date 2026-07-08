import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEA | Global Engineering Agency",
  description:
    "Architecture, engineering, and design services with a refined, modern presence.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
