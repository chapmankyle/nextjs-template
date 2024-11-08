import localFont from "next/font/local"
import type { Metadata, Viewport } from "next"

import "./globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const customSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--custom-font-sans",
  weight: "100 900",
})

const customMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--custom-font-mono",
  weight: "100 900",
})

/** Title of your application */
const TITLE = "Next.js v15 Starter"

/** Description of your application */
const DESCRIPTION = "Starter template for Next.js v15"

/** Production URL of your application */
const URL = "http://localhost:3000"

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s · ${TITLE}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Starter",
    "Template",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: URL,
    title: TITLE,
    siteName: TITLE,
    description: DESCRIPTION,
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
  twitter: {
    title: TITLE,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased min-h-screen",
          customSans.variable,
          customMono.variable,
        )}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
