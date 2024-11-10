"use client";

import React, { useEffect, useState } from "react";

import { IconButton } from "@/components";
import { MoonFill, SunFill } from "react-bootstrap-icons";

export const ThemeToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsDarkMode((prev) => !prev);
    }, 250);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const icon = isDarkMode ? <MoonFill size={24} /> : <SunFill size={24} />;

  return (
    <IconButton
      onClick={handleClick}
      icon={icon}
      position="absolute"
      className="flex items-center justify-center"
      ariaLabel="Toggle Dark Mode"
      title="Toggle Dark Mode"
      isAnimating={isAnimating}
      animationClassName="transition-transform duration-500 transform rotate-180"
    />
  );
};
