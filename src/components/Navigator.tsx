// TODO: start animation only when project is active
"use client";

import React, { useEffect, useState } from "react";

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

export const LeftNavigator: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("ABOUT");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      let activeSection = "ABOUT";
      let maxVisibleArea = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibleArea = Math.max(0, visibleHeight);

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          activeSection = section.getAttribute("id") || "ABOUT";
        }
      });

      setCurrentSection(activeSection.toUpperCase());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + sectionRect.top;
      const scrollPosition =
        sectionTop - (window.innerHeight - sectionRect.height) / 2;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];

  return (
    <div className="ml-6 fixed left-6 top-1/2 transform -translate-y-1/2 z-40 w-48 flex flex-col items-center">
      <ul className="space-y-8 text-lg">
        {sections.map((section) => (
          <NavigationItem
            key={section}
            section={section}
            currentSection={currentSection}
            onClick={() => handleNavigationClick(section.toLowerCase())}
          />
        ))}
      </ul>
    </div>
  );
};

export function OvalNavigator() {
  const outerPerimeter = 420.48;
  const innerPerimeter = 364.6;
  const outerGap = 14.016;
  const innerGap = 14.023;
  const innerOffset = innerGap / 2;

  return (
    <div className="animated-oval">
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
}
