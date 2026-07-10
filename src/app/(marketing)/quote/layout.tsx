import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Request a Quote | Global Engineering Agency",
  description:
    "Request a personalised quote from Global Engineering Agency for architecture, construction, engineering, project management, or building materials — we respond within 24 business hours.",
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
