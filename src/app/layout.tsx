import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/ui/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ACM Shivalik',
  description:
    'ACM Student Chapter at Shivalik College of Engineering — building the future of computing.',
  keywords: [
    'ACM',
    'Shivalik',
    'Computing',
    'Tech',
    'Student Chapter',
    'Engineering',
    'Dehradun',
  ],
  openGraph: {
    title: 'ACM Shivalik',
    description:
      'ACM Student Chapter at Shivalik College of Engineering — building the future of computing.',
    url: 'https://acmshivalik.vercel.app',
    siteName: 'ACM Shivalik',
    images: [
      {
        url: '/images/og-placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'ACM Shivalik',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACM Shivalik',
    description: 'ACM Student Chapter at Shivalik College of Engineering.',
    images: ['/images/og-placeholder.jpg'],
  },
  alternates: {
    canonical: 'https://acmshivalik.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
