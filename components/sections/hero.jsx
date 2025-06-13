import TypewriterEffect from "@/components/effects/typewriter-effect";
import FlipMotionEffect from "@/components/effects/flip-motion-effect";

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl h-screen p-6 flex flex-col items-center justify-start pt-22 sm:pt-24 text-3xl sm:text-4xl font-light">
      <h1> Ping Xiao Po</h1>
      <FlipMotionEffect />
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
