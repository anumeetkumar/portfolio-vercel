import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Anumeet Kumar - Front-End Developer";
const siteUrl = "https://www.anumeet.tech/"; // Replace with your actual domain
const description =
  "I'm Anumeet Kumar, a skilled front-end developer with experience in JavaScript, React.js, Next.js, Svelte, and TypeScript. Explore my portfolio and projects.";
const imageUrl = "/profile.webp";

export const metadata: Metadata = {
  title: siteName,
  description,
  icons: {
    icon: [
      { url: imageUrl, sizes: "32x32", type: "image/jpeg" },
      { url: imageUrl, sizes: "16x16", type: "image/jpeg" },
    ],
    apple: { url: imageUrl, sizes: "180x180", type: "image/jpeg" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description,
    siteName,
    images: [{ url: imageUrl, width: 1200, height: 630, alt: "Anumeet Kumar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: [imageUrl],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href={imageUrl} />
        <link rel="apple-touch-icon" href={imageUrl} />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
