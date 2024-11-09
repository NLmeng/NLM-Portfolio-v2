"use client";

import React, { useEffect, useRef, useState } from "react";

export const OvalNavigator: React.FC = () => {
  const outerPerimeter = 420.48;
  const innerPerimeter = 364.6;
  const outerGap = 14.016;
  const innerGap = 14.023;

  const [isIdle, setIsIdle] = useState(true);
  const [outerDashOffset, setOuterDashOffset] = useState(0);
  const [innerDashOffset, setInnerDashOffset] = useState(0);
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
    <div className="fixed top-1/2 left-[-25px] transform -translate-y-1/2 z-[999]">
      <svg width="50" height="200" viewBox="0 0 50 200">
        <ellipse
          cx="25"
          cy="100"
          rx="20"
          ry="100"
          fill="none"
          stroke="rgb(var(--clean-white))"
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
          stroke="rgb(var(--main-orange))"
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
