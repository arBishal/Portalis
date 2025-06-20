"use client";

import { COMPETENCES } from "@/constants/competences";

export default function Competences() {
  return (
    <section
      id="competences"
      className="max-w-2xl h-fit px-6 flex flex-col items-center justify-start gap-6 sm:gap-8 pt-24 sm:pt-28"
    >
      <h3 className="text-3xl sm:text-4xl font-bold">Competences</h3>
      <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center">
        {COMPETENCES.map((category, groupIdx) => (
          <div key={category.key} className="flex flex-wrap gap-3 sm:gap-4">
            {category.items.map(({ icon: Icon, name }, itemIdx) => {
              const tooltipId = `${category.key}-${itemIdx}`;
              return (
                <div key={tooltipId}>
                  <Icon
                    className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-110 active:scale-110 transition-transform duration-300"
                    data-tooltip-id={tooltipId}
                    data-tooltip-content={name}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
