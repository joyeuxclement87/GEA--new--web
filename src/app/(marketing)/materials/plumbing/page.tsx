import type { Metadata } from 'next';
import PlumbingPageClient from './PlumbingPageClient';

export const metadata: Metadata = {
  title: 'Plumbing Materials Supplier | Pipes, Fittings & Valves | Global Engineering Agency',
  description:
    'Global Engineering Agency supplies premium plumbing materials including PPR, PVC, HDPE and GI pipes, fittings, valves, drainage systems, and plumbing accessories for residential, commercial, hospitality, and industrial projects.',
  keywords: [
    'Plumbing Materials Supplier',
    'Pipes Supplier',
    'Pipe Fittings',
    'Plumbing Valves',
    'PPR Pipes',
    'PVC Pipes',
    'HDPE Pipes',
    'Drainage Systems',
    'Building Plumbing Materials',
  ],
  alternates: {
    canonical: '/materials/plumbing',
  },
};

export default function PlumbingPage() {
  return <PlumbingPageClient />;
}
