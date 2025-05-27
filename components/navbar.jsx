'use client';

import Link from 'next/link';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import FlipMotionEffect from "@/components/flip-motion-effect";

export default function Navbar() {
  const { visible, mounted } = useScrollNavbar(12); // Show after 10px scroll

  return (
    <nav
      className={`fixed font-mono flex items-center justify-center px-6 py-4 backdrop-blur-sm rounded-full w-min top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
        ${mounted && visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}
    >
      <FlipMotionEffect
        links={[
          { href: "/#atelier", label: "Atelier" },
          { href: "/#contact", label: "Contact" },
          { href: "/#social", label: "Social" },
        ]}
      />
    </nav>
  );
}
