'use client';

import Link from 'next/link';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';

export default function Navbar() {
  const { visible, mounted } = useScrollNavbar(12); // Show after 10px scroll

  return (
    <nav
      className={`fixed font-mono flex items-center justify-center px-4 py-4 backdrop-blur-sm border border-white/20 rounded-full w-min top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
        ${mounted && visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}
    >
      <ul className="flex items-center justify-center gap-4 list-none m-0 p-0">
        <li>
          <Link
            href="/atelier"
            className="text-lg hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Atelier
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lg hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/social"
            className="text-lg hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Social
          </Link>
        </li>
      </ul>
    </nav>
  );
}
