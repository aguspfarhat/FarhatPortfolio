import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://agustinperezfarhat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agustín Pérez Farhat — Full-Stack Web Developer",
    template: "%s · Agustín Pérez Farhat",
  },
  description:
    "Full-stack developer specializing in React, Next.js and TypeScript. I take web products from problem to production — architecture, interface and everything in between.",
  keywords: [
    "Agustín Pérez Farhat",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Tucumán",
    "Argentina",
  ],
  authors: [{ name: "Agustín Pérez Farhat" }],
  creator: "Agustín Pérez Farhat",
  openGraph: {
    title: "Agustín Pérez Farhat — Full-Stack Web Developer",
    description:
      "Full-stack developer specializing in React, Next.js and TypeScript. From problem to production.",
    url: siteUrl,
    siteName: "Agustín Pérez Farhat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Pérez Farhat — Full-Stack Web Developer",
    description:
      "Full-stack developer specializing in React, Next.js and TypeScript. From problem to production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
