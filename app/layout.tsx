import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calls From Clicks — 72-Hour Websites for Local Service Businesses",
  description:
    "Modern, mobile-first websites built in 72 hours for local service businesses. More calls, more quote requests — or your final 50% is waived.",
  metadataBase: new URL("https://callsfromclicks.com"),
  openGraph: {
    title: "Calls From Clicks — 72-Hour Websites for Local Service Businesses",
    description: "Custom-built, mobile-first websites that turn visitors into calls. Live in 72 hours — guaranteed.",
    url: "https://callsfromclicks.com",
    siteName: "Calls From Clicks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calls From Clicks — 72-Hour Websites for Local Service Businesses",
    description: "Custom-built, mobile-first websites that turn visitors into calls. Live in 72 hours — guaranteed.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
