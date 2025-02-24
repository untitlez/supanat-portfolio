import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "SUPANAT - Portfolio",
  description: "My Portfolio",
  icons: {
    icon: "/clover.png",
    apple: "/clover.png",
    shortcut: "/clover.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}