import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Aidan Kleinhenz | Personal Porfolio",
    template: "%s | aidankleinhenz.com",
  },
  description: "Personal website, docs",
  metadataBase: new URL("https://nikiv.dev"),
  // TODO: not sure if this is applied
  openGraph: {
    title: "aidankleinhenz.com",
    description: "Personal website, portfolio",
    url: "https://aidankleinhenz.com/",
    siteName: "aidankleinhenz.com",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Aidan Kleinhenz",
 
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
