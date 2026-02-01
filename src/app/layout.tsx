import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syahrulkurniawan.com"),
  title: {
    default: "Syahrul Kurniawan | Software Engineer",
    template: "%s | Syahrul Kurniawan",
  },
  description: "Portfolio of Syahrul Kurniawan, a Software Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "Portfolio", "Syahrul Kurniawan"],
  authors: [{ name: "Syahrul Kurniawan" }],
  creator: "Syahrul Kurniawan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syahrulkurniawan.com",
    title: "Syahrul Kurniawan | Software Engineer",
    description: "Portfolio of Syahrul Kurniawan, a Software Engineer specializing in React, Next.js, and modern web technologies.",
    siteName: "Syahrul Kurniawan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syahrul Kurniawan | Software Engineer",
    creator: "@syahrulkrn",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${playfair.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
