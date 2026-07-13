import type { Metadata } from 'next';
import ElectricalPageClient from './ElectricalPageClient';

export const metadata: Metadata = {
  title: 'Electrical Materials Supplier | Wiring, Lighting & Distribution Systems | Global Engineering Agency',
  description:
    'Explore premium electrical wiring, switches, sockets, lighting, distribution boards, and electrical accessories supplied by Global Engineering Agency for residential, commercial, and industrial projects.',
  keywords: [
    'Electrical Materials Supplier',
    'Electrical Wiring',
    'Switches and Sockets',
    'Distribution Boards',
    'LED Lighting',
    'Circuit Breakers',
    'Electrical Accessories',
    'Building Electrical Systems',
  ],
  alternates: {
    canonical: '/materials/electrical',
  },
};

export default function ElectricalPage() {
  return <ElectricalPageClient />;
}
