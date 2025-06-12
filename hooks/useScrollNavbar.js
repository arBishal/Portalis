import { useEffect, useState } from 'react';

/**
 * useScrollNavbar
 * Custom hook to show/hide a navbar based on scroll direction.
 *
 * Navbar is:
 * - Visible initially
 * - Hidden when scrolling down
 * - Visible when scrolling up
 *
 * @returns {{ visible: boolean, mounted: boolean }}
 *
 * Example:
 * const { visible, mounted } = useScrollNavbar();
 */
export function useScrollNavbar() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return { visible, mounted };
}
