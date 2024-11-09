"use client";

import { useCurrentSection } from "@/hooks/useCurrentSection";
import React, { useEffect, useRef, useState } from "react";

interface CircularBorderProps {
  color?: string;
  direction?: "clockwise" | "counter";
  numDots?: number;
  delayIncrement?: number;
  radiusOffset?: number;
  id: string;
  rotationAngle: number;
}

export const CircularBorder: React.FC<CircularBorderProps> = ({
  color = "rgb(var(--main-orange))",
  direction = "clockwise",
  numDots = 84,
  delayIncrement = 0.1,
  radiusOffset = 0,
  id,
  rotationAngle = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLSpanElement[]>([]);
  const currentSection = useCurrentSection();
  const [hasAnimationStarted, setHasAnimationStarted] = useState(false);

  useEffect(() => {
    if (currentSection === "PROJECTS" && !hasAnimationStarted) {
      setHasAnimationStarted(true);
    }
  }, [currentSection, hasAnimationStarted]);

  // create the dots only once
  useEffect(() => {
    if (!hasAnimationStarted) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";
    dotsRef.current = [];

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("span");
      dot.id = `dot-${i}`;
      dot.className = `absolute w-2 h-2 rounded-full opacity-0 animate-fadeIn`;
      dot.style.backgroundColor = color;
      dot.style.animationDelay = `${i * delayIncrement}s`;

      dot.style.left = `50%`;
      dot.style.top = `99%`;

      dot.style.transform = `translate(0px, 0px)`;
      dot.style.transition = "transform 0.5s ease";

      container.appendChild(dot);
      dotsRef.current.push(dot);
    }

    const handleResize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const topAdjust = 42;
      const radiusX = width / 2 - radiusOffset - topAdjust;
      const radiusY = height - radiusOffset - topAdjust;

      dotsRef.current.forEach((dot, i) => {
        const directionMultiplier = direction === "clockwise" ? 1 : -1;
        const angleOffset = direction === "counter" ? Math.PI : 0;

        const rotationAngleRad = (rotationAngle * Math.PI) / 180;

        const angle =
          ((i / numDots) * 2 * Math.PI * directionMultiplier +
            angleOffset +
            rotationAngleRad) %
          (2 * Math.PI);

        const x = radiusX * Math.cos(angle);
        const y = -radiusY * Math.sin(angle);

        dot.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("resize", handleResize);

    // Initial positions
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    hasAnimationStarted,
    color,
    direction,
    numDots,
    delayIncrement,
    radiusOffset,
    // prevent rerender on rotationAngle changes
  ]);

  // transforms when rotationAngle changes
  useEffect(() => {
    if (!hasAnimationStarted) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const topAdjust = 42;
    const radiusX = width / 2 - radiusOffset - topAdjust;
    const radiusY = height - radiusOffset - topAdjust;

    // Convert rotationAngle to radians
    const rotationAngleRad = (rotationAngle * Math.PI) / 180;

    dotsRef.current.forEach((dot, i) => {
      const directionMultiplier = direction === "clockwise" ? 1 : -1;
      const angleOffset = direction === "counter" ? Math.PI : 0;

      const angle =
        ((i / numDots) * 2 * Math.PI * directionMultiplier +
          angleOffset +
          rotationAngleRad) %
        (2 * Math.PI);

      const x = radiusX * Math.cos(angle);
      const y = -radiusY * Math.sin(angle);

      dot.style.transform = `translate(${x}px, ${y}px)`;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotationAngle, hasAnimationStarted]);

  return <div ref={containerRef} className="h-full w-full" id={id}></div>;
};
