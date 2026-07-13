import type { Metadata } from 'next';
import RealEstateServicesPageClient from './RealEstateServicesPageClient';

export const metadata: Metadata = {
  title: 'Real Estate Services | Property Sales, Investment & Development | Global Engineering Agency',
  description:
    'Global Engineering Agency provides professional real estate services including property sales, acquisition, investment advisory, development opportunities, valuation support, and integrated property solutions.',
  keywords: [
    'Real Estate Services',
    'Property Investment',
    'Commercial Property',
    'Residential Property',
    'Property Sales',
    'Property Acquisition',
    'Investment Property',
    'Land Development',
    'Property Consultant',
    'Real Estate Agency',
  ],
  alternates: {
    canonical: '/services/real-estate-services',
  },
};

export default function Page() {
  return <RealEstateServicesPageClient />;
}
