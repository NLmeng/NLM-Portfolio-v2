"use client";

import { useEffect, useState } from "react";

const NavigationItem = ({
  section,
  currentSection,
  onClick,
}: {
  section: string;
  currentSection: string;
  onClick: () => void;
}) => {
  const isActive = currentSection === section;

  return (
    <li
      className={`flex items-center cursor-pointer ${
        isActive ? "font-bold text-red" : "text-orange"
      }`}
      onClick={onClick}
    >
      <span
        className={`block h-0.5 ${
          isActive ? "bg-red w-16" : "bg-orange w-8"
        } mr-4 transition-all duration-300`}
      ></span>
      {section}
    </li>
  );
};

export default function LeftNavigator() {
  const [currentSection, setCurrentSection] = useState("ABOUT");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let activeSection = "ABOUT";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          activeSection = section.getAttribute("id") || "ABOUT";
        }
      });

      setCurrentSection(activeSection.toUpperCase());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];

  return (
    <div className="ml-4 fixed left-4 top-1/2 transform -translate-y-1/2 z-40 w-48 flex flex-col items-center">
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
}
