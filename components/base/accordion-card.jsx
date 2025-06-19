"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AccordionItem({ exp, index, isOpen, toggleItem }) {
  return (
    <div className="relative mb-8 pl-8">
      <div className="absolute -left-4 translate-1/2 top-5 w-4 h-4 bg-gray-900 border-2 border-white rounded-full"></div>
      <div className="bg-card-transparent border border-border-transparent rounded-lg overflow-hidden cursor-pointer">
        <div
          onClick={() => toggleItem(index)}
          className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-xs italic text-gray-500">
              {exp.period} · {exp.location}
            </p>
          </div>
          <ChevronDownIcon
            className={`w-5 h-5 text-white transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden px-6 ${
            isOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          <p className="text-sm text-gray-300 mb-3">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
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
