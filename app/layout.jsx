import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashikur B.'s Portal",
  description:
    "Get to know Ashikur Rahman Bishal, a multidisciplinary creator who combines code, design, and storytelling. Explore a picked out selection of projects that exhibit enthusiasm, precision, and creativity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        suppressHydrationWarning
        className={`antialiased relative`}
      >
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen font-mono">
          {children}
        </main>
      </body>
    </html>
  );
}
