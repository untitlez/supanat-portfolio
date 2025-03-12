import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <body
        // className={inter.className}
        className="bg-base-200"
        data-theme="light"      >
          {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
