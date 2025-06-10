import TypewriterEffect from "@/components/typewriter-effect";

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl h-screen p-6 gap-2 flex flex-col items-center justify-center text-6xl font-extrabold">
      <h2>Hi! I'm Po. Ping Xiao Po.</h2>
      <h2>
        <span className="inline-block">
          <TypewriterEffect
            texts={[
              "Dragon Warrior.",
              "Master of Chi.",
              "Wuxi Weilder.",
            ]}
          />
        </span>
      </h2>
    </section>
  );
}
