import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "SUPANAT - Portfolio",
  description: "My Portfolio",
  icons: {
    icon: "/favicon/clover.webp",
    apple: "/favicon/clover.webp",
    shortcut: "/favicon/clover.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="luxury">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
