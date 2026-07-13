import type { Metadata } from 'next';
import SolarEnergySolutionsPageClient from './SolarEnergySolutionsPageClient';

export const metadata: Metadata = {
  title: 'Solar Energy Solutions | Solar Panel Installation | Global Engineering Agency',
  description:
    'Global Engineering Agency provides professional solar energy solutions including residential and commercial solar systems, battery storage, hybrid and off-grid systems, installation, monitoring, and maintenance.',
  keywords: [
    'Solar Energy Solutions',
    'Solar Panel Installation',
    'Commercial Solar Systems',
    'Residential Solar',
    'Solar Battery Storage',
    'Renewable Energy',
    'Solar Engineering',
    'Off-Grid Solar Systems',
    'Hybrid Solar Systems',
    'Sustainable Energy',
  ],
  alternates: {
    canonical: '/services/solar-energy-solutions',
  },
};

export default function Page() {
  return <SolarEnergySolutionsPageClient />;
}
