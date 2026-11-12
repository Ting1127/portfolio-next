import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CursorTrail } from "@/components/CursorTrail";
import { TrackClicks } from "@/components/TrackClicks";

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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const isProd = process.env.NODE_ENV === "production";

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

        {/* Vercel Web Analytics */}
        <Analytics />

        {/* GA4 click events (auto-detects Resume / LinkedIn / Email / case study links) */}
        {isProd && GA_ID && <TrackClicks />}

        {/* Microsoft Clarity — production only */}
        {isProd && CLARITY_ID && (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </body>

      {/* Google Analytics 4 — production only */}
      {isProd && GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}