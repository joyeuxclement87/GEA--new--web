import type { Metadata } from 'next';
import BathroomSanitarySolutionsPageClient from './BathroomSanitarySolutionsPageClient';

export const metadata: Metadata = {
  title: 'Bathroom & Sanitary Products | Building Solutions | Global Engineering Agency',
  description:
    'Global Engineering Agency supplies premium bathroom fixtures, sanitary ware, installation materials, and complete bathroom solutions for residential, commercial, hospitality, and institutional projects.',
  keywords: [
    'Bathroom Fixtures Supplier',
    'Sanitary Ware',
    'Bathroom Solutions',
    'Toilets and Basins',
    'Construction Materials Supplier',
    'Building Materials Rwanda',
    'Bathroom Equipment',
  ],
  alternates: {
    canonical: '/materials/bathroom-sanitary',
  },
};

export default function BathroomSanitarySolutionsPage() {
  return <BathroomSanitarySolutionsPageClient />;
}
