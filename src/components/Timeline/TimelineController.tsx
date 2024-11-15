"use client";

import { IconButton } from "@/components";
import { TEXT_SIZE } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import { CaretRight, Pause } from "react-bootstrap-icons";

interface TimelineControllerProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  experienceData: {
    year: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
}

export const TimelineController: React.FC<TimelineControllerProps> = ({
  currentIndex,
  setCurrentIndex,
  experienceData,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const elapsedTimeRef = useRef<number>(0);
  const duration = 5000;

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
          setCurrentIndex((prevIndex) =>
            prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 10);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
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
      // Pausing: Store the elapsed time
      const now = Date.now();
      elapsedTimeRef.current += now - startTimeRef.current;
    } else {
      // Resuming: Reset the start time
      startTimeRef.current = Date.now();
    }
    setIsPaused(!isPaused);
  };

  const totalSteps = experienceData.length - 1;
  const progressPerStep = 100 / totalSteps;
  const baseFill = currentIndex * progressPerStep;

  // Prevent incrementalFill from adding at the last index
  const incrementalFill =
    currentIndex === experienceData.length - 1
      ? 0
      : (progress / 100) * progressPerStep;

  const fillPercentage = Math.min(baseFill + incrementalFill, 100);

  return (
    <div
      className={`transition-all duration-300 sticky bottom-8 flex items-center justify-center`}
    >
      <IconButton
        onClick={handlePauseResume}
        icon={isPaused ? <CaretRight size={12} /> : <Pause size={12} />}
        position=""
        className="text-[var(--main-text-color)] hover:bg-[var(--button-hover-bg-color)] p-[0px] md:p-[6px] self-baseline"
        ariaLabel="Pause/Resume Timeline"
        title="Pause/Resume Timeline"
        animationClassName="transition-transform duration-500"
      />
      <div className="relative flex items-center w-full max-w-3xl px-4">
        <div
          className="absolute w-[75%] left-[12%] top-[4px] md:top-[8px] h-[3px] md:h-[6px] bg-[var(--main-text-color)] z-0"
          style={{ overflow: "hidden" }}
        >
          <div
            style={{ width: `${fillPercentage}%` }}
            className="h-full bg-[var(--button-bg-color)]"
          />
        </div>
        {experienceData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 z-10">
            <button
              onClick={() => handleNavigation(index)}
              className={`w-3 h-3 md:w-6 md:h-6 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-[var(--button-bg-color)]"
                  : "bg-[var(--main-text-color)]"
              }`}
            />
            <div className="mt-2">
              <div className="font-semibold">{item.year}</div>
              <div
                className={`${TEXT_SIZE.MINI} h-[35px] w-[80px] md:h-[50px] md:w-[100px] overflow-hidden text-ellipsis`}
              >
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
