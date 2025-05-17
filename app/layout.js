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
    icon: "/favicon/clover.png",
    apple: "/favicon/clover.png",
    shortcut: "/favicon/clover.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="light">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
