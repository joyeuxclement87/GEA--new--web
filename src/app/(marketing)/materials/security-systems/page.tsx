import type { Metadata } from 'next';
import SecuritySystemsPageClient from './SecuritySystemsPageClient';

export const metadata: Metadata = {
  title: 'Security Systems Supplier | CCTV & Access Control Solutions | Global Engineering Agency',
  description:
    'Global Engineering Agency provides professional security systems including CCTV cameras, access control, video intercoms, and monitoring solutions for residential, commercial, and industrial projects.',
  keywords: [
    'Security Systems Supplier',
    'CCTV Cameras Supplier',
    'Access Control Systems',
    'Video Surveillance',
    'Smart Security Systems',
    'Building Security Solutions',
    'CCTV Installation Equipment',
  ],
  alternates: {
    canonical: '/materials/security-systems',
  },
};

export default function SecuritySystemsPage() {
  return <SecuritySystemsPageClient />;
}
