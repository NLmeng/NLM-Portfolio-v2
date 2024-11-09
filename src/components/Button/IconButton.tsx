"use client";

import React from "react";

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

export const IconButton: React.FC<IconButtonProps> = ({
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
