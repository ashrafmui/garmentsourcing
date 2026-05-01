import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

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
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Atelier & Mill — Apparel Sourcing, NYC × Dhaka",
    template: "%s · Atelier & Mill",
  },
  description:
    "A buying house bridging American brands with Bangladesh's most capable mills. Design support, production, compliance, and on-the-ground QA — operated from Dhaka, sold from New York.",
  openGraph: {
    title: "Atelier & Mill — Apparel Sourcing, NYC × Dhaka",
    description:
      "A buying house bridging American brands with Bangladesh's most capable mills.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier & Mill — Apparel Sourcing, NYC × Dhaka",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bone text-ink">{children}</body>
    </html>
  );
}
