import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://bjornclind.github.io";
const description =
  "Portfolio of Bjorn Lindqvist, a full stack engineer building end-to-end " +
  "web applications with Next.js, React, Node.js and MongoDB.";

export const metadata: Metadata = {
  // Required so the Open Graph/Twitter image paths below resolve to absolute URLs.
  metadataBase: new URL(siteUrl),
  title: "Bjorn Lindqvist | Full Stack Engineer",
  description,
  keywords: [
    "Bjorn Lindqvist",
    "full stack engineer",
    "Next.js",
    "React",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Bjorn Lindqvist", url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Bjorn Lindqvist",
    title: "Bjorn Lindqvist | Full Stack Engineer",
    description,
    // logo.jpg is square (1120x1120). Swap in a 1200x630 banner and update
    // these dimensions + the twitter card below to get large link previews.
    images: [{ url: "/logo.jpg", width: 1120, height: 1120, alt: "Bjorn Lindqvist" }],
  },
  twitter: {
    card: "summary",
    title: "Bjorn Lindqvist | Full Stack Engineer",
    description,
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
