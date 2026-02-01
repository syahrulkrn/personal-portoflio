import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Syahrul Kurniawan, a Fullstack Developer with a passion for building scalable web applications.",
  openGraph: {
    title: "About | Syahrul Kurniawan",
    description: "Learn more about Syahrul Kurniawan, a Fullstack Developer with a passion for building scalable web applications.",
    url: "https://syahrulkurniawan.com/about",
    siteName: "Syahrul Kurniawan Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Syahrul Kurniawan",
    description: "Learn more about Syahrul Kurniawan, a Fullstack Developer with a passion for building scalable web applications.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
