"use client";

import { ButtonA } from "@/components";
import { HOME_PROPS } from "@/constants";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface ProjectCarouselProps {
  onRotate: (direction: "left" | "right") => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  onRotate,
}) => {
  const projects = HOME_PROPS.PROJECT;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    onRotate("right");
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    onRotate("left");
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative h-full w-full flex items-center justify-center overflow-hidden mt-5"
    >
      <ButtonA
        direction="left"
        onClick={handlePrev}
        className="left-[5vw] top-1/2 transform -translate-y-1/2"
      />

      <div className="text-center">
        <h2 className="text-2xl">{projects[currentIndex].title}</h2>
        <p>{projects[currentIndex].description}</p>
      </div>

      <ButtonA
        direction="right"
        onClick={handleNext}
        className="right-[5vw] top-1/2 transform -translate-y-1/2"
      />
    </div>
  );
};
