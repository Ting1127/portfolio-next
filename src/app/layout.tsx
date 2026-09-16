import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CursorTrail } from "@/components/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Jennie Zeng — PM, AI & Data Products";
const description =
  "Product manager across digital content, finance, and semiconductors — currently building measurement for brand visibility in AI search.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jenniezeng.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://jenniezeng.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <CursorTrail />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}