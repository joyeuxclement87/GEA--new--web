import type { Metadata } from 'next';
import PropertyDemolitionPageClient from './PropertyDemolitionPageClient';

export const metadata: Metadata = {
  title: 'Property Demolition Services | Building Demolition & Site Clearance | Global Engineering Agency',
  description:
    'Global Engineering Agency provides professional residential, commercial, and industrial demolition services, including controlled demolition, site clearance, waste management, recycling, and redevelopment preparation.',
  keywords: [
    'Property Demolition',
    'Building Demolition',
    'Controlled Demolition',
    'Commercial Demolition',
    'Residential Demolition',
    'Industrial Demolition',
    'Site Clearance',
    'Demolition Contractor',
    'Building Removal',
    'Demolition Services',
  ],
  alternates: {
    canonical: '/services/property-demolition',
  },
};

export default function Page() {
  return <PropertyDemolitionPageClient />;
}
