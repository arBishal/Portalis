"use client"; // Required for canvas effects in Next.js client components

import { useEffect, useRef } from "react";

/**
 * FirefliesCanvas renders animated firefly particles that:
 * - Glow with a yellow hue
 * - Pulse in brightness (alpha)
 * - Float gently upward like chi
 * - Wrap from top to bottom
 */
export default function FirefliesCanvas() {
  const canvasRef = useRef(null); // Ref to the canvas element

  useEffect(() => {
    // === Setup ===
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas to full screen size
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Handle screen resizing
    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    /**
     * Firefly Object Structure:
     * {
     *   x: horizontal position
     *   y: vertical position
     *   r: radius (size)
     *   dx: horizontal speed
     *   dy: vertical speed (usually negative to float up)
     *   alpha: transparency (glow intensity)
     *   pulseDir: +1 or -1 (direction to pulse glow)
     */
// 🔁 Determine firefly count based on screen size
    const baseCount = 32;
    const width = window.innerWidth;
    let NUM_FIREFLIES;

    if (width < 640) {
      // Mobile
      NUM_FIREFLIES = Math.floor(baseCount / 2); // 16
    } else if (width < 1024) {
      // Tablet
      NUM_FIREFLIES = Math.floor(baseCount / 1.5); // ≈21
    } else {
      // Desktop
      NUM_FIREFLIES = baseCount;
    }

    const fireflies = Array.from({ length: NUM_FIREFLIES }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1, // radius: 1–3px
      dx: Math.random() * 0.6 - 0.3, // horizontal speed: -0.3 to +0.3
      dy: -(Math.random() * 0.3 + 0.1), // upward float: -0.4 to -0.1
      alpha: Math.random() * 0.5 + 0.5, // initial glow brightness: 0.5–1
      pulseDir: Math.random() > 0.5 ? 1 : -1, // alternate pulse direction
    }));

    /**
     * Main animation loop:
     * - Clears canvas
     * - Updates firefly properties
     * - Draws glowing fireflies
     */
    const animate = () => {
      ctx.clearRect(0, 0, w, h); // Clear canvas each frame

      for (let f of fireflies) {
        // === Pulse Glow ===
        f.alpha += f.pulseDir * 0.01;
        if (f.alpha >= 1) {
          f.alpha = 1;
          f.pulseDir = -1;
        } else if (f.alpha <= 0.3) {
          f.alpha = 0.3;
          f.pulseDir = 1;
        }

        // === Draw Firefly ===
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 150, ${f.alpha})`; // Yellow color
        ctx.shadowColor = `rgba(255, 255, 150, ${f.alpha})`; // Glow
        ctx.shadowBlur = 12; // Soft halo around fireflies
        ctx.fill();

        // === Movement ===
        f.x += f.dx;
        f.y += f.dy;

        // Horizontal bounce (left/right edge)
        if (f.x < 0 || f.x > w) f.dx *= -1;

        // Vertical wrap (chi float upward → loop)
        if (f.y < 0) f.y = h;
        if (f.y > h) f.y = 0;
      }

      animationFrameId = requestAnimationFrame(animate); // Repeat
    };

    animate(); // Start animation

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
