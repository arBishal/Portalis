"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Reusable FlipMotionEffect component
export default function FlipMotionEffect({ links = [], className = "" }) {
  return (
    <div className={`flex gap-6 ${className}`}>
      {links.map(({ href, label }, index) => (
        <FlipLink key={index} href={href}>
          {label}
        </FlipLink>
      ))}
    </div>
  );
}

// Internal animation constants
const DURATION = 0.25;
const STAGGER = 0.025;

// FlipLink with Next.js Link
const FlipLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-base sm:text-lg font-extrabold cursor-pointer"
        style={{ lineHeight: 0.75 }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};
