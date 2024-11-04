// Carousel.tsx

"use client";

import ButtonA from "@/components/Button";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Project {
  id: number;
  title: string;
  description: string;
}

const projects: Project[] = [
  { id: 0, title: "Project 1", description: "Description of Project 1" },
  { id: 1, title: "Project 2", description: "Description of Project 2" },
  { id: 2, title: "Project 3", description: "Description of Project 3" },
];

interface ProjectCarouselProps {
  onRotate: (direction: "left" | "right") => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onRotate }) => {
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
      <ButtonA direction="left" onClick={handlePrev} />

      <div className="text-center ">
        <h2 className="text-2xl">{projects[currentIndex].title}</h2>
        <p>{projects[currentIndex].description}</p>
      </div>

      <ButtonA direction="right" onClick={handleNext} />
    </div>
  );
};

export default ProjectCarousel;
