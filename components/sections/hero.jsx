import Link from "next/link";

import TypewriterEffect from "@/components/effects/typewriter-effect";
import FlipMotionEffect from "@/components/effects/flip-motion-effect";
import FirefliesCanvas from "@/components/effects/fireflies-canvas-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen p-6 flex flex-col gap-8 items-center justify-between pt-28 sm:pt-32 pb-12 sm:pb-16"
    >
      <FirefliesCanvas />

      <div className="max-w-2xl flex flex-col items-center justify-center gap-2">
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

        <a
          href="/Awesome_Résumé_of_Po.pdf"
          target="-1"
          className="mt-8 px-8 py-2 rounded transition-transform duration-300 text-base sm:text-lg text-center cursor-pointer bg-foreground text-background hover:scale-95 active:scale-95 w-fit sm:w-1/2"
        >
          Grab My Résumé
        </a>
      </div>

      <Link
        href="/#experiences"
        className="flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-2xl">↓</span>
        <span className="text-base sm:text-xl">Unroll the Adventure</span>
      </Link>
    </section>
  );
}
