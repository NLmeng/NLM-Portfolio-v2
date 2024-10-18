"use client";
// TODO: add click to scroll to position
import { useEffect, useState } from "react";

export default function LeftSection() {
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

  return (
    <div className="ml-4 fixed left-4 top-1/2 transform -translate-y-1/2 z-40 w-48 flex flex-col items-center">
      <ul className="space-y-8 text-lg">
        <li
          className={`flex items-center ${
            currentSection === "ABOUT" ? "font-bold text-red" : "text-orange"
          }`}
        >
          <span
            className={`block h-0.5 ${
              currentSection === "ABOUT" ? "bg-red w-16" : "bg-orange w-8"
            } mr-4 transition-all duration-300`}
          ></span>
          ABOUT
        </li>
        <li
          className={`flex items-center ${
            currentSection === "EXPERIENCE"
              ? "font-bold text-red"
              : "text-orange"
          }`}
        >
          <span
            className={`block h-0.5 ${
              currentSection === "EXPERIENCE" ? "bg-red w-16" : "bg-orange w-8"
            } mr-4 transition-all duration-300`}
          ></span>
          EXPERIENCE
        </li>
        <li
          className={`flex items-center ${
            currentSection === "PROJECTS" ? "font-bold text-red" : "text-orange"
          }`}
        >
          <span
            className={`block h-0.5 ${
              currentSection === "PROJECTS" ? "bg-red w-16" : "bg-orange w-8"
            } mr-4 transition-all duration-300`}
          ></span>
          PROJECTS
        </li>
      </ul>
    </div>
  );
}
