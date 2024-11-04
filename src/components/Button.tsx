"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

interface ButtonA {
  direction: "left" | "right";
  onClick: () => void;
  position?: "absolute" | "fixed";
  className?: string;
}

const ButtonA: React.FC<ButtonA> = ({
  direction,
  onClick,
  position = "absolute",
  className = "",
}) => {
  const IconComponent = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={`${position} top-1/2 transform -translate-y-1/2 p-2 rounded-full text-[rgb(var(--clean-white))] hover:bg-[rgb(var(--main-orange-dark))] ${
        direction === "left" ? "left-[5vw]" : "right-[5vw]"
      } z-103 bg-[rgb(var(--main-orange))] ${className}`}
    >
      <IconComponent size={24} />
    </button>
  );
};

export default ButtonA;
