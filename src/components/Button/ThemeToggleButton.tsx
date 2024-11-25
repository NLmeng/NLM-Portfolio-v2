"use client";

import React, { useEffect, useState } from "react";

import { IconButton } from "@/components";
import { Moon, Sun } from "react-bootstrap-icons";

interface ThemeToggleButtonProps {
  size?: number;
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  size = 24,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  };

  useEffect(() => {
    const savedTheme = getCookie("pref-theme-cookie");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsDarkMode((prev) => {
        const newMode = !prev;
        setCookie("pref-theme-cookie", newMode ? "dark" : "light", 365);
        return newMode;
      });
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

  const icon = isDarkMode ? (
    <Moon className="glow-effect" size={size} />
  ) : (
    <Sun className="glow-effect" size={size} />
  );

  return (
    <IconButton
      onClick={handleClick}
      icon={icon}
      position=""
      default={false}
      className="text-[var(--main-text-color)] hover:bg-[var(--button-hover-bg-color)] p-2 rounded-full z-20"
      ariaLabel="Toggle Dark Mode"
      title="Toggle Dark Mode"
      isAnimating={isAnimating}
      animationClassName="transition-transform duration-500 transform rotate-180"
    />
  );
};
