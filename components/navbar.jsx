"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  SunIcon,
  MoonIcon,
  CurrencyBangladeshiIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

import { useScrollNavbar } from "@/hooks/useScrollNavbar";
import FlipMotionEffect from "@/components/flip-motion-effect";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const { visible, mounted } = useScrollNavbar(10);

  return (
    <nav
      className={`fixed font-mono flex items-center justify-between px-6 py-4 border border-border-transparent backdrop-blur-sm rounded-full w-full max-w-5xl top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out
        ${
          mounted && visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
      `}
    >
      {/* logo */}
      <FlipMotionEffect
        links={[
          { href: "/", label: "Po.rtalis" }
        ]}
      />

      {/* links */}
      <div className="flex gap-4 sm:gap-8 text-sm sm:text-lg items-center justify-center">
        <Link
          href="/#pricing"
          className="group transition-all duration-150 flex gap-2 items-center justify-center"
        >
          <CurrencyBangladeshiIcon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-360 group-active:-rotate-90" />
          <span className="hidden sm:inline-block">Pricing</span>
        </Link>

        <Link
          href="/#about"
          className="group transition-all duration-150 flex gap-2 items-center justify-center"
        >
          <InformationCircleIcon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-360 group-active:-rotate-90" />
          <span className="hidden sm:inline-block">About Us</span>
        </Link>

        {/* theme toggle */}
        <button
          onClick={toggleTheme}
          className="transition-transform duration-500 hover:-rotate-360 active:-rotate-90"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
}
