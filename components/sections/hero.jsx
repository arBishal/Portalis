import TypewriterEffect from "@/components/effects/typewriter-effect";
import FlipMotionEffect from "@/components/effects/flip-motion-effect";

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl h-screen p-6 flex flex-col gap-1 items-center justify-start pt-22 sm:pt-24">
      <h1 className="text-4xl sm:text-5xl font-extrabold">Ping Xiao Po</h1>
      <h2>
        <span className="inline-block">
          <TypewriterEffect
            texts={[
              "Dragon Warrior",
              "Master of Chi",
              "Wuxi Weilder",
            ]}
          />
        </span>
      </h2>
    </section>
  );
}
