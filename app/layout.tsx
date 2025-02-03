import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

const name = "Anumeet Kumar";
const siteName = "Anumeet Kumar";
const siteUrl = "https://www.anumeet.tech/"; // Replace with your actual domain
const description =
  "I'm Anumeet Kumar, a skilled front-end developer with experience in JavaScript, React.js, Next.js, Svelte, and TypeScript. Explore my portfolio and projects.";
const imageUrl = "https://www.anumeet.tech/profile.webp";
const favIconURL = "/profile-fav.webp";

export const metadata: Metadata = {
  title: siteName,
  description,
  icons: {
    icon: [
      { url: favIconURL, sizes: "32x32", type: "image/jpeg" },
      { url: favIconURL, sizes: "16x16", type: "image/jpeg" },
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
        <link rel="shortcut icon" href={favIconURL} />
        <link rel="apple-touch-icon" href={favIconURL} />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={favIconURL} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={favIconURL} />
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
