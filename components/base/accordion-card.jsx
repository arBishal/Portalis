"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AccordionItem({ exp, index, isOpen, toggleItem }) {
  return (
    <div className="relative pl-8 font-sans">
      {/* Timeline dot */}
      <span className="absolute -left-4 translate-1/2 top-4 w-4 h-4 bg-background border-2 sm:border-3 border-foreground rounded-full"></span>

      {/* Card */}
      <div
        onClick={() => toggleItem(index)}
        className="bg-card-transparent border border-border-transparent rounded-lg overflow-hidden cursor-pointer"
      >
        {/* Header */}
        <div className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none text-sm sm:text-base font-extralight">
          <div>
            <h3 className="text-base sm:text-lg font-bold">{exp.title}</h3>
            <p className="font-bold">{exp.company}</p>
            <p>{exp.location}</p>
            <p className="italic">{exp.period}</p>
          </div>
          <ChevronDownIcon
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Expandable content */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden px-6 ${
            isOpen
              ? "max-h-96 opacity-100 pt-0 pb-6"
              : "max-h-0 opacity-0 pt-0 pb-0"
          }`}
        >
          <p className="text-sm sm:text-base mb-4">{exp.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech, i) => (
              <span
                key={i}
                className="bg-foreground text-background text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
