"use client";

import React, { useEffect, useState } from "react";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoonFill,
  Question,
  SunFill,
} from "react-bootstrap-icons";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  position?: "absolute" | "fixed";
  className?: string;
  ariaLabel?: string;
  title?: string;
  isAnimating?: boolean;
  animationClassName?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  position = "absolute",
  className = "",
  ariaLabel,
  title,
  isAnimating = false,
  animationClassName = "",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      className={`${position} p-2 rounded-full text-[rgb(var(--clean-white))] hover:bg-[var(--button-hover-bg-color)] bg-[var(--button-bg-color)] z-103 ${className}`}
    >
      <div className={`${isAnimating ? animationClassName : ""}`}>{icon}</div>
    </button>
  );
};

interface ButtonAProps {
  direction: "left" | "right" | "down";
  onClick: () => void;
  position?: "absolute" | "fixed";
  className?: string;
}

const ButtonA: React.FC<ButtonAProps> = ({
  direction,
  onClick,
  position = "absolute",
  className = "",
}) => {
  let IconComponent;
  let ariaLabel;

  switch (direction) {
    case "left":
      IconComponent = <ChevronLeft size={24} />;
      ariaLabel = "Previous";
      break;
    case "right":
      IconComponent = <ChevronRight size={24} />;
      ariaLabel = "Next";
      break;
    case "down":
      IconComponent = <ChevronDown size={24} />;
      ariaLabel = "Down";
      break;
    default:
      IconComponent = <Question size={24} />;
      ariaLabel = "Unknown";
  }

  return (
    <IconButton
      onClick={onClick}
      icon={IconComponent}
      position={position}
      className={className}
      ariaLabel={ariaLabel}
    />
  );
};

const ThemeToggleButton: React.FC = () => {
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

export { ButtonA, IconButton, ThemeToggleButton };
