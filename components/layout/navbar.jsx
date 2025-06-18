"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import { NAV_LINKS } from "@/constants/nav-links";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid mismatch on server vs client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render theme toggle after mount
  const isDark = resolvedTheme === "dark";

  return (
    <nav className="fixed font-mono flex items-center justify-center sm:justify-between gap-24 px-6 py-4 border border-border-transparent backdrop-blur-2xl rounded-full w-min max-w-5xl top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-10">
      <Link href="/#hero" className="font-black hidden sm:block">PO.RTALIS</Link>

      <div className="flex gap-4 sm:gap-6 text-sm sm:text-lg items-center justify-center">
        {NAV_LINKS.map(({ href, label, icon: Icon }, index) => (
          <Link key={index} href={href} aria-label={label} title={label}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-teal-500 transition-transform duration-300 active:-rotate-45" />
          </Link>
        ))}
        
        {mounted && (
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="transition-transform duration-500 active:-rotate-90 cursor-pointer"
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-amber-400" />
            ) : (
              <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-indigo-600" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
}
