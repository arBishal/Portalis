"use client";

import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import TypewriterEffect from "@/components/effects/typewriter-effect";
import FirefliesCanvas from "@/components/effects/fireflies-canvas-effect";
import WindLinesCanvas from "@/components/effects/wind-lines-canvas-effect";
import { SOCIAL_LINKS } from "@/constants/external-links";

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className="relative w-full h-dvh p-6 flex flex-col gap-8 items-center justify-between pt-28 sm:pt-32 pb-12 sm:pb-16"
    >
      {isDark ? <FirefliesCanvas /> : <WindLinesCanvas />}

      {/* intro */}
      <section
        id="intro"
        className="max-w-2xl flex flex-col items-center justify-center sm:gap-2"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
          Ping Xiao Po
        </h1>
        <h2>
          <span className="inline-block">
            <TypewriterEffect
              texts={["Dragon Warrior", "Master of Chi", "Wuxi Weilder"]}
            />
          </span>
        </h2>
        <p className="text-justify text-base sm:text-xl font-sans mt-4">
          Trained by a red panda, blessed by an ancient tortoise, and
          reluctantly majestic on most Tuesdays. I have battled evil warlords,
          mastered chi, and reached inner peace—all while avoiding stairs like
          the ultimate foe. Hero by destiny, snack-lover by choice, and always
          ready for the next scroll-worthy adventure.
        </p>

        {/* resume */}
        <a
          href="/Awesome_Résumé_of_Po.pdf"
          target="_blank"
          className="mt-4 sm:mt-8 px-8 py-2 rounded transition-transform duration-300 text-base sm:text-lg text-center cursor-pointer bg-foreground text-background hover:scale-95 active:scale-95 w-fit sm:w-1/2"
        >
          Grab My Résumé
        </a>
      </section>

      {/* social links */}
      <section className="flex flex-col gap-2 sm:gap-4">
        <h3 className="text-lg sm:text-xl text-center">Find Me On</h3>
        <div className="flex justify-center items-center gap-3 sm:gap-4">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                {/* Icon */}
                <Icon className="w-5 sm:w-6 h-5 sm:h-6 hover:scale-110 transition-transform duration-150" />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <Link
        href="/#experiences"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-sm sm:text-lg">Unroll the Adventure</span>
      </Link>
    </section>
  );
}
