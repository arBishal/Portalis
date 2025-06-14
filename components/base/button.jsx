'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function BaseButton({
  children,
  href,
  onClick,
  variant = 'solid',
  className = '',
  ...props
}) {
  const baseStyles =
    'px-6 py-2 rounded transition-all duration-300 text-base sm:text-lg text-center cursor-pointer';

  const variants = {
    solid:
      'bg-foreground text-background hover:opacity-80 active:scale-95 w-full',
    ghost:
      'bg-transparent text-foreground hover:bg-foreground/10 active:bg-foreground/20 w-fit',
  };

  const combinedClassName = twMerge(
    baseStyles,
    variants[variant],
    className
  );

  // If it's a link, render <Link>
  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise, render <button>
  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}


