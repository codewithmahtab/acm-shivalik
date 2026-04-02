import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/ui/Navbar';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'ACM Shivalik | Student Chapter',
  description:
    'ACM Student Chapter at Shivalik College of Engineering — building the future of computing.',
  icons: {
    icon: '/ACM LOGO WHITE.png',
  },
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
    title: 'ACM Shivalik | Student Chapter',
    description:
      'ACM Student Chapter at Shivalik College of Engineering — building the future of computing.',
    url: 'https://acmshivalik.vercel.app',
    siteName: 'ACM Shivalik',
    images: [
      {
        url: '/ACM LOGO WHITE.png',
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
    title: 'ACM Shivalik | Student Chapter',
    description: 'ACM Student Chapter at Shivalik College of Engineering.',
    images: ['/ACM LOGO WHITE.png'],
  },
  alternates: {
    canonical: 'https://acmshivalik.vercel.app',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
