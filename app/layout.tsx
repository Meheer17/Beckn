import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unified Krishi Interface (UKI) - Open Agriculture Network",
  description:
    "A community-led local open agriculture network enabling discovery and access to agri-inputs, agri-services and advisory enabled by beckn protocol",
  keywords:
    "agriculture, farming, agri-tech, UKI, krishi, farmers, buyers, beckn protocol, open network",
  openGraph: {
    title: "Unified Krishi Interface (UKI)",
    description:
      "A farmer-centric open agriculture network powered by beckn protocol - One Network, Endless Possibilities",
    images: ["/a.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
