"use client";

import { IconButton } from "@/components";
import { TEXT_SIZE } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import { CaretRight, Pause } from "react-bootstrap-icons";

interface TimelineControllerBetaProps {
  currentIndex: number;
  setCurrentIndex: (index: number | ((prevIndex: number) => number)) => void;
  experienceData: {
    year: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
}

export const TimelineControllerBeta: React.FC<TimelineControllerBetaProps> = ({
  currentIndex,
  setCurrentIndex,
  experienceData,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dotWidth, setDotWidth] = useState(100);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const elapsedTimeRef = useRef<number>(0);
  const duration = 5000;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDotWidth(40);
      } else if (width < 1024) {
        setDotWidth(80);
      } else if (width < 1280) {
        setDotWidth(120);
      } else {
        setDotWidth(160);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollToMiddle = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
      }
    };
    requestAnimationFrame(scrollToMiddle);
  }, [dotWidth, experienceData.length]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTimeRef.current + elapsedTimeRef.current;
        if (elapsed < duration) {
          const progressPercentage = (elapsed / duration) * 100;
          setProgress(progressPercentage);
        } else {
          setProgress(0);
          elapsedTimeRef.current = 0;
          startTimeRef.current = Date.now();
          setCurrentIndex((prevIndex: number) =>
            prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 10);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, currentIndex, setCurrentIndex, experienceData.length]);

  const handleNavigation = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    elapsedTimeRef.current = 0;
    if (!isPaused) {
      startTimeRef.current = Date.now();
    }
  };

  const handlePauseResume = () => {
    if (!isPaused) {
      const now = Date.now();
      elapsedTimeRef.current += now - startTimeRef.current;
    } else {
      startTimeRef.current = Date.now();
    }
    setIsPaused(!isPaused);
  };

  const totalSteps = experienceData.length - 1;
  const progressPerStep = 100 / totalSteps;
  const baseFill = currentIndex * progressPerStep;
  const incrementalFill =
    currentIndex === experienceData.length - 1
      ? 0
      : (progress / 100) * progressPerStep;
  const fillPercentage = Math.min(baseFill + incrementalFill, 100);

  // const lineLeft = dotWidth * (experienceData.length - 1) * 0.05 + dotWidth / 2;
  const lineLeft = dotWidth;
  const lineWidth = (experienceData.length - 1) * dotWidth;

  return (
    <div className="w-full transition-all duration-300 sticky bottom-8 flex items-center justify-center rounded-lg transition-opacity hover:opacity-100 opacity-50 z-30">
      <IconButton
        onClick={handlePauseResume}
        icon={isPaused ? <CaretRight size={12} /> : <Pause size={12} />}
        position=""
        className="text-[var(--main-text-color)] hover:bg-[var(--button-bg-color)] p-[0px] md:p-[6px] self-baseline"
        ariaLabel="Pause/Resume Timeline"
        title="Pause/Resume Timeline"
        animationClassName="transition-transform duration-500"
      />

      <div className="relative w-full sm:max-w-[450px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[900px] 2xl:max-w-[1050px] max-w-[300px] mx-auto overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="relative flex items-center overflow-x-auto"
        >
          <div
            className="relative flex items-center"
            style={{ padding: `0 ${dotWidth / 2}px` }}
          >
            <div
              className="absolute top-[4px] md:top-[8px] z-0 h-[3px] md:h-[6px] bg-[var(--main-text-color)]"
              style={{
                left: `${lineLeft}px`,
                width: `${lineWidth}px`,
              }}
            >
              <div
                className="h-full bg-[var(--button-bg-color)]"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            {experienceData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(index)}
                className="flex flex-col items-center z-10 cursor-pointer group"
                style={{ width: `${dotWidth}px` }}
              >
                <button
                  className={`w-3 h-3 md:w-6 md:h-6 rounded-full transition-colors duration-300 group-hover:bg-[var(--button-bg-color)] ${
                    index === currentIndex
                      ? "bg-[var(--button-bg-color)]"
                      : "bg-[var(--main-text-color)]"
                  }`}
                />
                <div className="mt-2 text-center">
                  <div className="font-semibold group-hover:text-[var(--button-bg-color)]">
                    {item.year}
                  </div>
                  <div
                    className={`${TEXT_SIZE.MINI} h-[35px] md:h-[50px] md:w-[100px] overflow-hidden text-ellipsis group-hover:text-[var(--button-bg-color)]`}
                  >
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-neutral-200 filter blur-2xl z-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-neutral-200 filter blur-2xl z-40" /> */}
      </div>
    </div>
  );
};
