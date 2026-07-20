import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://theempiregrowth.com"),
  title: { default: "EMPIRE — Conversion-First Shopify Stores & Funnels", template: "%s | EMPIRE" },
  description: "EMPIRE builds conversion-focused Shopify stores and funnels engineered to turn paid traffic into measurable revenue.",
  icons: { icon: "/empire-ecommerce-logo.png", apple: "/empire-ecommerce-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body><div className="noise" aria-hidden="true" /><SiteHeader />{children}<SiteFooter /><Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" /></body>
    </html>
  );
}
