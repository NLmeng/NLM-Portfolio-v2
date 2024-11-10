"use client";

import React, { useEffect, useRef, useState } from "react";

interface OvalNavigatorProps {
  isExpanded: boolean;
  toggleExpansion: () => void;
}

// TODO: add swipe for scrolling
export const OvalNavigator: React.FC<OvalNavigatorProps> = ({
  isExpanded,
  toggleExpansion,
}) => {
  const outerPerimeter = 420.48;
  const innerPerimeter = 364.6;
  const outerGap = 14.016;
  const innerGap = 14.023;

  const [isIdle, setIsIdle] = useState(true);
  const [outerDashOffset, setOuterDashOffset] = useState(0);
  const [innerDashOffset, setInnerDashOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const lastScrollY = useRef(0);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
    }

    const handleScroll = () => {
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }

      setIsIdle(false);

      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const scrollFactor = 1;
      setOuterDashOffset(
        (prev) => (prev + deltaY * scrollFactor) % outerPerimeter
      );
      setInnerDashOffset(
        (prev) => (prev - deltaY * scrollFactor) % innerPerimeter
      );

      idleTimeout.current = setTimeout(() => {
        setIsIdle(true);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    idleTimeout.current = setTimeout(() => {
      setIsIdle(true);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-1/2 transform -translate-y-1/2 z-[999] transition-all duration-500 ease-in-out ${
        isExpanded ? "left-0" : "left-[-25px]"
      }`}
      onClick={toggleExpansion}
      style={{ cursor: "pointer" }}
    >
      <svg
        width="50"
        height="210"
        viewBox="0 0 50 200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <ellipse
            cx="25"
            cy="100"
            rx="20"
            ry="100"
            fill="var(--hover-overlay-color)"
          />
        )}
        <ellipse
          cx="25"
          cy="100"
          rx="20"
          ry="100"
          fill="none"
          stroke="var(--main-text-color)"
          strokeWidth="7"
          strokeDasharray={`0,${outerGap}`}
          strokeLinecap="round"
          style={{
            animationName: isIdle ? "outerRotate" : "none",
            animationDuration: "20s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "normal",
            strokeDashoffset: isIdle ? undefined : outerDashOffset,
          }}
        />
        <ellipse
          cx="25"
          cy="100"
          rx="10"
          ry="90"
          fill="none"
          stroke="rgb(var(--color-orange))"
          strokeWidth="7"
          strokeDasharray={`0,${innerGap}`}
          strokeLinecap="round"
          style={{
            animationName: isIdle ? "innerRotate" : "none",
            animationDuration: "15s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: isIdle ? "normal" : "reverse",
            strokeDashoffset: isIdle ? undefined : innerDashOffset,
          }}
        />
      </svg>
    </div>
  );
};
