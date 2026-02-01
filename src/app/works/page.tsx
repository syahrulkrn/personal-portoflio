import { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Works",
  description: "Explore the portfolio and projects of Syahrul Kurniawan, featuring web development, full-stack applications, and more.",
  openGraph: {
    title: "Works | Syahrul Kurniawan",
    description: "Explore the portfolio and projects of Syahrul Kurniawan.",
    url: "https://syahrulkurniawan.com/works", // Adjust domain if needed
    siteName: "Syahrul Kurniawan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Works | Syahrul Kurniawan",
    description: "Explore the portfolio and projects of Syahrul Kurniawan.",
  },
};

export default function WorksListingPage() {
  return <WorksClient />;
}
