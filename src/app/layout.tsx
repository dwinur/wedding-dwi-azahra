import type { Metadata } from "next";
import { Caveat, Indie_Flower, Patrick_Hand, Inter, Amiri, Caveat_Brush, Madimi_One } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

// Handwritten style font for names and headings
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// More casual handwritten font
const indieFlower = Indie_Flower({
  variable: "--font-indie",
  subsets: ["latin"],
  weight: "400",
});

// Handwritten font for body text
const patrickHand = Patrick_Hand({
  variable: "--font-patrick",
  subsets: ["latin"],
  weight: "400",
});

const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
  subsets: ["latin"],
  weight: "400",
});

const madimiOne = Madimi_One({
  variable: "--font-madimi",
  subsets: ["latin"],
  weight: "400",
});

// Arabic font
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation - Azahra & Dwi",
  description: "Undangan Pernikahan Azahra & Dwi - Minggu, 12 April 2026",
  icons: {
    icon: '/images/logo-nama.png',
    apple: '/images/logo-nama.png',
  },
  openGraph: {
    title: "Wedding Invitation - Azahra & Dwi",
    description: "Anda diundang ke pernikahan Azahra & Dwi",
    type: "website",
    images: '/images/logo-nama.png',
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
        className={`${caveat.variable} ${indieFlower.variable} ${patrickHand.variable} ${caveatBrush.variable} ${madimiOne.variable} ${amiri.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
