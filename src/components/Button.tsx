"use client";

import React from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Question,
} from "react-bootstrap-icons";

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
  if (direction === "left") {
    IconComponent = ChevronLeft;
  } else if (direction === "right") {
    IconComponent = ChevronRight;
  } else if (direction === "down") {
    IconComponent = ChevronDown;
  } else {
    IconComponent = Question;
  }

  return (
    <button
      onClick={onClick}
      aria-label={
        direction === "left"
          ? "Previous"
          : direction === "right"
          ? "Next"
          : "Down"
      }
      className={`${position} p-2 rounded-full text-[rgb(var(--clean-white))] hover:bg-[rgb(var(--main-orange-dark))] bg-[rgb(var(--main-orange))] z-103 ${className}`}
    >
      <IconComponent size={24} />
    </button>
  );
};

export default ButtonA;
