import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

const title = "Jennie Zeng — UX / Product Designer";
const description =
  "UX and product designer with a research background — shipping products across digital content, finance, and AI search.";

// Metadata merges shallowly, so openGraph / twitter are restated in full.
export const metadata: Metadata = {
  title,
  description,
  // Same content as the homepage: point search engines at "/" so the two
  // pages aren't treated as duplicates. Shared links still preview with the
  // design title below.
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://jenniezeng.com/design",
    siteName: "Jennie Zeng",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function DesignHome() {
  return <HomePage mode="design" />;
}