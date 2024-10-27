"use client";

import { useEffect, useRef } from "react";

export default function CircleAnimation({
  color = "rgb(var(--main-orange))",
  direction = "clockwise",
  numDots = 84,
  delayIncrement = 0.1,
  radiusOffset = 0,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const renderDots = () => {
      container.innerHTML = "";

      const width = container.offsetWidth;
      const height = container.offsetHeight;

      const centerX = width / 2;
      const centerY = height;

      const topAdjust = 42;

      const radiusX = width / 2 - radiusOffset - topAdjust;
      const radiusY = height - radiusOffset - topAdjust;

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("span");
        dot.className = `absolute w-2 h-2 rounded-full opacity-0 animate-fadeIn`;
        dot.style.backgroundColor = color;
        dot.style.animationDelay = `${i * delayIncrement}s`;

        const directionMultiplier = direction === "clockwise" ? 1 : -1;
        const angleOffset = direction === "counter" ? Math.PI : 0;

        const angle =
          ((i / numDots) * 2 * Math.PI * directionMultiplier + angleOffset) %
          (2 * Math.PI);

        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY - radiusY * Math.sin(angle);

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.transform = "translate(-50%, -50%)";

        container.appendChild(dot);
      }
    };

    renderDots();

    window.addEventListener("resize", renderDots);
    return () => window.removeEventListener("resize", renderDots);
  }, [color, direction, numDots, delayIncrement, radiusOffset]);

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full overflow-hidden"
    ></div>
  );
}