import { useEffect, useState } from 'react';

/**
 * useScrollNavbar
 * Custom hook to show/hide an element (like navbar) based on scroll position.
 *
 * @param {number} threshold - Scroll distance in pixels before showing.
 * @returns {{ visible: boolean, mounted: boolean }}
 *
 * Example:
 * const { visible, mounted } = useScrollNavbar(10);
 */
export function useScrollNavbar(threshold = 10) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { visible, mounted };
}
