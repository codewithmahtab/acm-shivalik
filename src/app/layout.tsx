import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ACM Shivalik",
  description:
    "ACM Student Chapter at Shivalik College of Engineering — building the future of computing.",
  keywords: ["ACM", "Shivalik", "Computing", "Tech", "Student Chapter"],
};

export default function RootLayout({
  children,
} : {
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
