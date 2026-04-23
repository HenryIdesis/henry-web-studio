import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { contactEmail, siteName, siteUrl } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Free website preview in 24 hours for plumbers and electricians",
    template: `%s | ${siteName}`,
  },
  description:
    "Website as a service for plumbers, electricians, HVAC teams, and other local businesses. Free preview in 24 hours, live in 48, then $99/month after the free first month.",
  keywords: [
    "plumber website design",
    "electrician website design",
    "website as a service",
    "home service marketing",
    "local lead generation",
    "mobile-first web design",
    "ongoing website management",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free website preview in 24 hours",
    description:
      "Built to improve trust, clarity, and lead conversion for plumbers, electricians, HVAC teams, and other local businesses.",
    url: "/",
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName} open graph image`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free website preview in 24 hours",
    description:
      "Built to improve trust, clarity, and lead conversion. First month free, then $99/month.",
    images: ["/twitter-image"],
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
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
        {children}
        <a className="sr-only focus:not-sr-only" href={`mailto:${contactEmail}`}>
          Email {contactEmail}
        </a>
      </body>
    </html>
  );
}
