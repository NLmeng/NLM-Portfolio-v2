"use client";

import { IconButton } from "@/components";
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

export const ButtonA: React.FC<ButtonAProps> = ({
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
