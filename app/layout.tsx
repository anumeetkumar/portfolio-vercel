import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Anumeet Kumar | Experienced Software Developer",
  description: "Senior software developer with extensive experience in building scalable applications and enterprise solutions",
  keywords: "software developer, full-stack developer, React developer, Next.js developer, TypeScript developer",
  authors: [{ name: "Anumeet Kumar" }],
  creator: "Anumeet Kumar",
  publisher: "Anumeet Kumar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anumeet.tech",
    siteName: "Anumeet Kumar Portfolio",
    title: "Anumeet Kumar | Experienced Software Developer",
    description: "Senior software developer with extensive experience in building scalable applications and enterprise solutions",
    images: [
      {
        url: "https://anumeet.tech/about.webp",
        width: 1200,
        height: 630,
        alt: "Anumeet Kumar - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anumeet Kumar | Experienced Software Developer",
    description: "Senior software developer with extensive experience in building scalable applications and enterprise solutions",
    images: ["/og-image.png"],
    creator: "@anumeetkumar",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "https://anumeet.tech/apple-touch-icon.png" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Anumeet Kumar",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
