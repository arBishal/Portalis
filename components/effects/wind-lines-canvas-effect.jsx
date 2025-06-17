"use client";

import { useEffect, useRef } from "react";

/**
 * WindLinesCanvas - Subtle animated wind lines for light mode.
 * Creates flowing curved lines (like stylized wind or chi) using sine waves.
 *
 * Customization:
 * - lineCount: number of animated lines
 * - color: HSL string (light gray, soft teal, etc.)
 * - amplitude, frequency: controls wave shape
 * - speed: animation speed per line
 */
export default function WindLinesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // CONFIG: Number of wind lines
    const lineCount = 12;

    // Create lines with randomized wave parameters
    const lines = Array.from({ length: lineCount }, () => createLine());

    function createLine() {
      return {
        y: Math.random() * h, // vertical position
        amplitude: Math.random() * 15 + 10, // wave height
        frequency: Math.random() * 0.01 + 0.003, // wave tightness
        phase: Math.random() * Math.PI * 2, // starting phase offset
        speed: Math.random() * 0.005 + 0.003, // wave speed
        thickness: Math.random() * 1.2 + 0.8,
        color: `hsla(180, 25%, 70%, ${Math.random() * 0.4 + 0.3})`, // soft teal/grayish-blue
      };
    }

    function drawLine(line, time) {
      ctx.beginPath();
      ctx.moveTo(0, line.y);
      for (let x = 0; x < w; x += 5) {
        const yOffset = Math.sin(x * line.frequency + time * line.speed + line.phase) * line.amplitude;
        ctx.lineTo(x, line.y + yOffset);
      }
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.thickness;
      ctx.stroke();
    }

    function animate(time) {
      ctx.clearRect(0, 0, w, h);
      for (let line of lines) {
        drawLine(line, time);
      }
      requestAnimationFrame(animate);
    }

    animate(0);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}