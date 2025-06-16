import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Po's Folio",
  description:
    "Po, the Legendary Dragon Warrior, Master of Chi, Doomsday of Dumplings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className={`antialiased relative`}
      >
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen font-mono">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
