"use client";

import React from "react";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  position?: "absolute" | "fixed" | "";
  className?: string;
  ariaLabel?: string;
  title?: string;
  isAnimating?: boolean;
  animationClassName?: string;
  default?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  position = "absolute",
  className = "",
  ariaLabel,
  title,
  isAnimating = false,
  animationClassName = "",
  default: isDefault = true,
}) => {
  const defaultClasses = isDefault
    ? "text-[var(--main-text-color)] hover:bg-[var(--button-hover-bg-color)] bg-[var(--button-bg-color)] p-2 rounded-full z-20"
    : "";

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      className={`${position} ${defaultClasses} ${className}`}
    >
      <div className={`${isAnimating ? animationClassName : ""}`}>{icon}</div>
    </button>
  );
};
