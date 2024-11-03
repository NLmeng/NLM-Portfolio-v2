"use client";

import { useCurrentSection } from "@/hooks/useCurrentSection";
import React from "react";

interface NavigationItemProps {
  section: string;
  currentSection: string;
  onClick: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
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

interface LeftNavigatorProps {
  onNavigate: (sectionId: string) => void;
}

const LeftNavigator: React.FC<LeftNavigatorProps> = ({ onNavigate }) => {
  const currentSection = useCurrentSection();
  const sections: string[] = ["ABOUT", "EXPERIENCE", "PROJECTS"];

  return (
    <div className="ml-6 fixed left-6 top-1/2 transform -translate-y-1/2 z-40 w-48 flex flex-col items-center">
      <ul className="space-y-8 text-lg">
        {sections.map((section) => (
          <NavigationItem
            key={section}
            section={section}
            currentSection={currentSection}
            onClick={() => onNavigate(section.toLowerCase())}
          />
        ))}
      </ul>
    </div>
  );
};

const OvalNavigator: React.FC = () => {
  const outerPerimeter = 420.48;
  const innerPerimeter = 364.6;
  const outerGap = 14.016;
  const innerGap = 14.023;
  const innerOffset = innerGap / 2;

  return (
    <div className="fixed top-1/2 left-[-25px] transform -translate-y-1/2 z-[999]">
      <svg width="50" height="200" viewBox="0 0 50 200">
        <ellipse
          cx="25"
          cy="100"
          rx="20"
          ry="100"
          fill="none"
          stroke="rgb(var(--clean-white))"
          strokeWidth="7"
          strokeDasharray={`0,${outerGap}`}
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to={`${outerPerimeter}`}
            dur="20s"
            repeatCount="indefinite"
            calcMode="linear"
          />
        </ellipse>
        <ellipse
          cx="25"
          cy="100"
          rx="10"
          ry="90"
          fill="none"
          stroke="rgb(var(--main-orange))"
          strokeWidth="7"
          strokeDasharray={`0,${innerGap}`}
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from={`${innerPerimeter + innerOffset}`}
            to={`${innerOffset}`}
            dur="15s"
            repeatCount="indefinite"
            calcMode="linear"
          />
        </ellipse>
      </svg>
    </div>
  );
};

export { LeftNavigator, OvalNavigator };
