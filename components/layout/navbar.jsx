"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

import { useScrollNavbar } from "@/hooks/useScrollNavbar";
import FlipMotionEffect from "@/components/effects/flip-motion-effect";
import { NAV_LINKS } from "@/constants/nav-links.js";

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

  // const { visible, mounted } = useScrollNavbar(10);

  return (
    <nav
      className={`fixed font-mono flex items-center justify-center sm:justify-between gap-24 px-6 py-4 border border-border-transparent backdrop-blur-sm rounded-full w-min max-w-5xl top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out`}
    >
      {/* logo */}
      <Link href="/#hero" className="font-black hidden sm:block">PO.RTALIS</Link>

      {/* links */}
      <div className="flex gap-4 sm:gap-6 text-sm sm:text-lg items-center justify-center">
        {NAV_LINKS.map(({ href, label, icon: Icon }, index) => (
        <Link
          key={index}
          href={href}
          aria-label={label}
          title={label}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-teal-500 transition-transform hover:tansition-color duration-300 active:-rotate-45" />
        </Link>
      ))}

        {/* theme toggle */}
        <button
          onClick={toggleTheme}
          className="transition-transform hover:tansition-color duration-500 active:-rotate-90 cursor-pointer"
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          {isDark ? (
            <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-teal-500" />
          ) : (
            <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-teal-500" />
          )}
        </button>
      </div>
    </nav>
  );
}
