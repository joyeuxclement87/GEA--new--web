import type { Metadata } from 'next';
import TilesFlooringPageClient from './TilesFlooringPageClient';

export const metadata: Metadata = {
  title: 'Tiles & Flooring Supplier | Ceramic, Porcelain & Natural Stone | Global Engineering Agency',
  description:
    'Discover premium ceramic tiles, porcelain tiles, natural stone, and flooring solutions for residential, commercial, hospitality, healthcare, and industrial projects.',
  keywords: [
    'Tiles Supplier',
    'Flooring Supplier',
    'Ceramic Tiles',
    'Porcelain Tiles',
    'Natural Stone',
    'Floor Tiles',
    'Wall Tiles',
    'Commercial Flooring',
    'Architectural Finishes',
  ],
  alternates: {
    canonical: '/materials/tiles-flooring',
  },
};

export default function TilesFlooringPage() {
  return <TilesFlooringPageClient />;
}
