import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "korededayobabatunde - Full Stack Developer",
    template: "%s | korededayobabatunde",
  },
  description: "Full stack developer portfolio showcasing projects and skills in modern web technologies",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "korededayobabatunde" }],
  creator: "korededayobabatunde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://korededayobabatunde.dev",
    title: "korededayobabatunde - Full Stack Developer",
    description: "Full stack developer portfolio showcasing projects and skills",
    siteName: "korededayobabatunde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "korededayobabatunde - Full Stack Developer",
    description: "Full stack developer portfolio showcasing projects and skills",
    creator: "@korededayobabatunde",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
