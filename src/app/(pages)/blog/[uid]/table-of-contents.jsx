"use client";

import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const ACTIVE_OFFSET = 100;

export default function TableOfContents({ items = [] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) {
      return;
    }

    const updateActiveId = () => {
      const sections = items
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) {
        return;
      }

      const currentSection = sections.reduce((activeSection, section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop - ACTIVE_OFFSET <= 0) {
          return section;
        }

        return activeSection;
      }, sections[0]);

      if (currentSection?.id) {
        setActiveId(currentSection.id);
      }
    };

    updateActiveId();
    window.addEventListener("scroll", updateActiveId, { passive: true });
    window.addEventListener("hashchange", updateActiveId);

    return () => {
      window.removeEventListener("scroll", updateActiveId);
      window.removeEventListener("hashchange", updateActiveId);
    };
  }, [items]);

  return (
    <ol className="bg-primary-white p-4.5 rounded-xl flex flex-col gap-y-3">
      {items.map(({ id, label }) => {
        const isActive = activeId === id;

        return (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex items-center bg-[#F3F3F3] rounded-md py-2.25 px-3.5 gap-x-4 text-body-small-s transition-bouncy"
            >
              <span
                className={`block rounded-[3px] p-[7.5px] transition-bouncy ${
                  isActive
                    ? "bg-text-secondary text-white"
                    : "bg-primary-white text-text-heading"
                }`}
              >
                <FiArrowRight />
              </span>
              <span className="inline-block text-body-small-s text-text-heading">
                {label}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
