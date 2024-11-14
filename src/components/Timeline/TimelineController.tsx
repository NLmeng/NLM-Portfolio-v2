"use client";

import React, { useEffect, useState } from "react";

interface TimelineControllerProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  experienceData: {
    year: string;
    title: string;
    description: string;
  }[];
}

export const TimelineController: React.FC<TimelineControllerProps> = ({
  currentIndex,
  setCurrentIndex,
  experienceData,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  // scroll listener to handle sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // check if any part of the section is in the viewport
        const inView = sectionTop < window.innerHeight && sectionBottom > 0;

        setIsSticky(inView);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // call it initially in case the section is already in view
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isSticky ? "sticky" : "relative"
      } bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[var(--button-bg-color)] p-2 shadow-lg`}
      style={{
        borderRadius: "999px",
      }}
    >
      {experienceData.map((item, index) => (
        <button
          key={index}
          onClick={() => handleNavigation(index)}
          className={`mx-1 h-4 flex items-center justify-center transition-all duration-300 ease-in-out ${
            index === currentIndex
              ? "w-16 bg-[var(--main-text-color)] text-[var(--main-bg-color)] rounded-full"
              : "w-4 bg-[var(--main-bg-color)] text-[var(--main-text-color)] rounded-full"
          }`}
          style={{
            borderRadius: index === currentIndex ? "999px" : "50%",
          }}
        >
          {index === currentIndex ? item.year : null}
        </button>
      ))}
    </div>
  );
};
