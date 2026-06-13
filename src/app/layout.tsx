import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300"],
})

export const metadata: Metadata = {
  title: "Habitus – Build Better Habits",
  description:
    "Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
