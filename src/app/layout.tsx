import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation - Azahra & Dwi",
  description: "Undangan Pernikahan Azahra & Dwi - Minggu, 12 April 2026",
  icons: {
    icon: '/images/cover-couple.png',
    apple: '/images/cover-couple.png',
  },
  openGraph: {
    title: "Wedding Invitation - Azahra & Dwi",
    description: "Anda diundang ke pernikahan Azahra & Dwi",
    type: "website",
    images: '/images/cover-couple.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
