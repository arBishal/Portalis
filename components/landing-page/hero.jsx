import TypewriterEffect from "@/components/typewriter-effect";

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl h-screen p-6 gap-2 flex flex-col items-center justify-center text-6xl font-extrabold">
      <h2>Ahoy! I'm Bishal.</h2>
      <h2>
        A{" "}
        <span className="inline-block">
          <TypewriterEffect
            texts={[
              "Software Engineer.",
              "Creative Writer.",
              "Graphic Designer.",
            ]}
          />
        </span>
      </h2>
    </section>
  );
}
