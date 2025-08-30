import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mara Real Estate | Premium Properties in Kenya",
  description: "Discover your dream property in Kenya with Mara Real Estate. Expert real estate services for buying, selling, and renting residential and commercial properties across Nairobi, Mombasa, and beyond.",
  keywords: "real estate Kenya, property Kenya, homes for sale Nairobi, commercial property, land for sale, property management Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}