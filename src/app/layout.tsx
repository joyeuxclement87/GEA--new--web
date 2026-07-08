import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Global Engineering Agency — Architecture, Engineering & Construction',
  description:
    'Global Engineering Agency delivers premium architecture, engineering, construction, building products, and real estate services. Design. Build. Supply. Invest.',
  keywords: [
    'architecture',
    'engineering',
    'construction',
    'real estate',
    'building products',
    'interior design',
    'project management',
  ],
  openGraph: {
    title: 'Global Engineering Agency',
    description: 'Premium architecture, engineering, construction & real estate.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
