"use client";

import React from "react";

interface NavigationItemProps {
  section: string;
  currentSection: string;
  onClick: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  section,
  currentSection,
  onClick,
}) => {
  const isActive = currentSection === section;

  return (
    <div className="group cursor-pointer flex items-center" onClick={onClick}>
      <li
        className={`flex items-center ${
          isActive
            ? "font-bold text-[rgb(var(--color-red))]"
            : "text-[rgb(var(--color-orange))] group-hover:text-[var(--button-hover-bg-color)]"
        }`}
      >
        <span
          className={`block h-0.5 ${
            isActive
              ? "bg-[rgb(var(--color-red))] md:w-12 w-8"
              : "bg-[rgb(var(--color-orange))] md:w-8 w-4 group-hover:bg-[var(--button-hover-bg-color)]"
          } mr-[1.5px] transition-all duration-300`}
        />
        {section}
      </li>
    </div>
  );
};
