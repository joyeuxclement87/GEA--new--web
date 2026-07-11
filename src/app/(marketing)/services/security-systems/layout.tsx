import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Security Systems | CCTV, Access Control & Smart Security | Global Engineering Agency",
  description:
    "Global Engineering Agency provides CCTV surveillance, access control, video intercom, intruder alarms, perimeter protection, and integrated security solutions for residential, commercial, and industrial developments.",
  keywords: [
    "Security Systems",
    "CCTV Installation",
    "Access Control Systems",
    "Smart Security",
    "Video Surveillance",
    "Building Security",
    "Intruder Alarm Systems",
    "Commercial Security Solutions",
    "Biometric Access Control",
    "Integrated Security Systems",
  ],
};

export default function SecuritySystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
