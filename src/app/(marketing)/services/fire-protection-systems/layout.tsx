import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Fire Protection Systems | Fire Safety Engineering | Global Engineering Agency",
  description:
    "Global Engineering Agency provides professional fire protection services including sprinkler systems, fire alarms, hydrants, hose reels, fire pumps, testing, commissioning, inspections, and maintenance.",
  keywords: [
    "Fire Protection Systems",
    "Fire Sprinkler Systems",
    "Fire Alarm Installation",
    "Fire Hydrant Systems",
    "Fire Safety Engineering",
    "Fire Pump Systems",
    "Fire Protection Maintenance",
    "Fire Safety Solutions",
  ],
};

export default function FireProtectionSystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
