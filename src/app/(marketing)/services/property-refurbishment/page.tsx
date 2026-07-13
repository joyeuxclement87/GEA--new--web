import type { Metadata } from 'next';
import PropertyRefurbishmentPageClient from './PropertyRefurbishmentPageClient';

export const metadata: Metadata = {
  title: 'Property Refurbishment Services | Building Renovation | Global Engineering Agency',
  description:
    'Global Engineering Agency provides professional property refurbishment services including residential renovation, commercial refurbishment, interior remodeling, exterior upgrades, building system modernization, and sustainable renovations.',
  keywords: [
    'Property Refurbishment',
    'Building Renovation',
    'Commercial Refurbishment',
    'Residential Renovation',
    'Interior Remodeling',
    'Office Renovation',
    'Building Upgrades',
    'Property Improvement',
    'Building Restoration',
    'Renovation Company',
  ],
  alternates: {
    canonical: '/services/property-refurbishment',
  },
};

export default function Page() {
  return <PropertyRefurbishmentPageClient />;
}
