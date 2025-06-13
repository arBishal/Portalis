"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterText({ texts = [] }) {
  const defaultTexts = ["Software Engineer"];

  const styledTexts = (texts.length > 0 ? texts : defaultTexts).map(
    (text) =>
      `<span class='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600'>${text}</span>`
  );

  return (
    <div className="text-2xl sm:text-3xl font-extrabold">
      <Typewriter
        options={{
          strings: styledTexts,
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50,
          html: true,
        }}
      />
    </div>
  );
}
