import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/url";
import "./globals.css";

const cormorant = localFont({ src: [
  { path: "../../public/fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
  { path: "../../public/fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
], variable: "--font-cormorant", display: "swap" });
const manrope = localFont({ src: [
  { path: "../../public/fonts/manrope-latin-400-normal.woff2", weight: "400", style: "normal" },
  { path: "../../public/fonts/manrope-latin-600-normal.woff2", weight: "600", style: "normal" },
], variable: "--font-manrope", display: "swap" });

const title = `${site.name} · Men's Grooming in Eunice, LA`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.shortName,
  alternates: { canonical: "/" },
  appleWebApp: { capable: true, title: site.shortName, statusBarStyle: "black-translucent" },
  formatDetection: { telephone: true, address: true },
  icons: {
    icon: [
      { url: "/icons/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#menu"
          className="sr-only z-50 bg-gold px-4 py-2 text-carbon focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to services
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
