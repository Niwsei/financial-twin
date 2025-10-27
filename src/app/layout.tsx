import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Niwner - Your Digital Financial Twin",
  description: "Experience next-generation portfolio management with real-time insights, AI-powered analytics, and seamless trading integration.",
  keywords: "finance, portfolio, trading, investment, AI, analytics, crypto, stocks",
  openGraph: {
    title: "Niwner - Your Digital Financial Twin",
    description: "Experience next-generation portfolio management with real-time insights, AI-powered analytics, and seamless trading integration.",
    url: "https://niwner.com",
    siteName: "Niwner",
    images: [
      {
        url: "https://niwner.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
