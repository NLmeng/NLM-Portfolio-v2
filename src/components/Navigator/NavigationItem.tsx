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
    <li
      className={`flex items-center cursor-pointer ${
        isActive
          ? "font-bold text-[rgb(var(--main-red))]"
          : "text-[rgb(var(--main-orange))]"
      }`}
      onClick={onClick}
    >
      <span
        className={`block h-0.5 ${
          isActive
            ? "bg-[rgb(var(--main-red))] w-16"
            : "bg-[rgb(var(--main-orange))] w-8"
        } mr-4 transition-all duration-300`}
      ></span>
      {section}
    </li>
  );
};
