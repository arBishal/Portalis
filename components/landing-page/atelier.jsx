"use client";

import Link from "next/link";

export default function Atelier() {
  const roles = [
    {
      title: "Software Engineer",
      description:
        "Explore my work in frontend development, architecture, and code craftsmanship.",
      href: "/softwareengineer",
    },
    {
      title: "Creative Writer",
      description:
        "Dive into stories, poems, and thoughtful musings from my creative desk.",
      href: "/author",
    },
    {
      title: "Graphic Designer",
      description:
        "Browse through visuals, branding, and experiments in digital design.",
      href: "/designer",
    },
  ];

  return (
    <section id="atelier" className="max-w-5xl mx-auto flex flex-col items-center justify-center p-6 h-screen">
      <h2 className="text-5xl font-bold text-center mb-12">
        Have a Tour in my Ateliers
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 text-center">
        {roles.map((role) => (
          <Link
            key={role.title}
            href={role.href}
            className={`hover:bg-gradient-to-b from-teal-500 to-teal-700 p-6 rounded-2xl shadow-lg border text-white transition-transform hover:scale-105 duration-300`}
          >
            <h3 className="text-3xl font-bold mb-2">{role.title}</h3>
            <p className="text-base">{role.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
