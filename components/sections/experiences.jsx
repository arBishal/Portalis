"use client"

import { useState } from 'react';

import AccordionCard from '@/components/base/accordion-card';
import { EXPERIENCES } from '@/constants/experiences';

export default function Experiences() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experiences" className="max-w-2xl h-screen px-6 flex flex-col items-center justify-start gap-6 sm:gap-8 pt-22 sm:pt-24">
      <h2 className="text-3xl sm:text-4xl font-bold">Experiences</h2>
      <div className="relative border-l border-gray-700 ml-4">
        {EXPERIENCES.map((exp, index) => (
          <AccordionCard
            key={index}
            exp={exp}
            index={index}
            isOpen={openItems.includes(index)}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </section>
  );
}
