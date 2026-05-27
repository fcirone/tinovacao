import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fabiocirone.com"),
  title: "Fabio Cirone | CTO · Gambling & Payments",
  description:
    "Portfolio and career overview of Fabio Cirone, CTO specialising in gambling, payments, and high-scale platforms.",
  openGraph: {
    type: "website",
    siteName: "Fabio Cirone",
    title: "Fabio Cirone | CTO · Gambling & Payments",
    description:
      "Portfolio and career overview of Fabio Cirone, CTO specialising in gambling, payments, and high-scale platforms.",
    url: "https://fabiocirone.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Cirone | CTO · Gambling & Payments",
    description:
      "Portfolio and career overview of Fabio Cirone, CTO specialising in gambling, payments, and high-scale platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Fabio Cirone — Blog"
          href="https://fabiocirone.com/feed.xml"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CLT4J4MDGG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CLT4J4MDGG');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
