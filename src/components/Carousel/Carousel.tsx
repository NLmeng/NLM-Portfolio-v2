"use client";

import { Highlight } from "@/components";
import { PROJECTS, TEXT_SIZE } from "@/constants";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

type Direction = "left" | "right";
type Position = "left" | "center" | "right" | "leftmost" | "rightmost";
type TextType = "header" | "body";

interface ProjectCarouselProps {
  onRotate: (direction: "left" | "right") => void;
}
interface Transformation {
  transform: string;
  opacity?: number;
}
interface TextStyle {
  fontSize?: string;
  transform?: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  onRotate,
}) => {
  const projects = PROJECTS.filter((project) => project.display).sort(
    (a, b) => a.id - b.id
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }, 2000);
    onRotate("right");
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 2000);
    onRotate("left");
  };

  const handlers = useSwipeable({
    onSwipedLeft: handlePrev,
    onSwipedRight: handleNext,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;
  const leftmostIndex = (currentIndex - 2 + projects.length) % projects.length;
  const rightmostIndex = (currentIndex + 2) % projects.length;
  const transformations: Record<Direction, Record<Position, Transformation>> = {
    right: {
      right: { transform: "translateX(50%) scale(0.1, 0.1)" },
      center: {
        transform: "translateX(85%) translateY(40%) scale(0.3, 0.5)",
        opacity: 0.5,
      },
      left: {
        transform: "translateX(175%) translateY(-35%) scale(2, 1)",
        opacity: 1,
      },
      leftmost: {
        transform: "translateX(100%) translateY(-10%) scale(0.5, 0.5)",
      },
      rightmost: { transform: "" },
    },
    left: {
      left: { transform: "translateX(-50%) scale(0.1, 0.1)" },
      center: {
        transform: "translateX(-85%) translateY(40%) scale(0.3, 0.5)",
        opacity: 0.5,
      },
      right: {
        transform: "translateX(-175%) translateY(-35%) scale(2, 1)",
        opacity: 1,
      },
      rightmost: {
        transform: "translateX(-100%) translateY(-10%) scale(0.5, 0.5)",
      },
      leftmost: { transform: "" },
    },
  };
  const textStyles: Record<
    Direction,
    Record<Position, Record<TextType, TextStyle>>
  > = {
    right: {
      left: {
        header: { transform: "translateX(-25%) scale(0.5, 1)" },
        body: { fontSize: "calc(1rem / 2)" },
      },
      center: {
        header: {},
        body: {},
      },
      right: {
        header: {},
        body: {},
      },
      leftmost: {
        header: {},
        body: {},
      },
      rightmost: {
        header: {},
        body: {},
      },
    },
    left: {
      right: {
        header: { transform: "translateX(-25%) scale(0.5, 1)" },
        body: { fontSize: "calc(1rem / 2)" },
      },
      center: {
        header: {},
        body: {},
      },
      left: {
        header: {},
        body: {},
      },
      leftmost: {
        header: {},
        body: {},
      },
      rightmost: {
        header: {},
        body: {},
      },
    },
  };

  const getCardStyle = (
    position: "leftmost" | "left" | "center" | "right" | "rightmost"
  ) => {
    let style: React.CSSProperties = {};

    if (animating) {
      style = {
        transition: "transform 2s ease-in-out, opacity 2s ease-in-out",
      };
      const transformation = transformations[direction!]?.[position];
      if (transformation) {
        Object.assign(style, transformation);
      }
    }
    return style;
  };

  const getTextStyle = (
    position: Position,
    type: TextType
  ): React.CSSProperties => {
    let style: React.CSSProperties = {
      transition: "transform 1s ease-in-out, font-size 1s ease-in-out",
    };

    if (animating && direction) {
      const textStyle = textStyles[direction]?.[position]?.[type];
      if (textStyle) {
        Object.assign(style, textStyle);
      }
    }

    return style;
  };
  // TODO: refactor
  return (
    <div
      {...handlers}
      className="relative h-full w-full flex items-center justify-center overflow-hidden mt-5 whitespace-pre-line"
    >
      <div
        className="absolute w-[20%] opacity-30 top-[50%] left-[-20%] scale-50 text-start"
        style={getCardStyle("leftmost")}
      >
        <header
          className={`${TEXT_SIZE.HEADER} text-[rgb(var(--color-orange))]`}
        >
          {projects[leftmostIndex].title}
        </header>
        <p
          className={`${TEXT_SIZE.BODY} pt-6 border-t-[1px] border-[rgb(var(--border-color))]`}
        >
          {projects[leftmostIndex].description}
        </p>
      </div>

      <div
        className="flex-none w-[25%] h-[75%] opacity-50 cursor-pointer top-[25%] left-[-5%] relative scale-50 text-start"
        onClick={handleNext}
        style={getCardStyle("left")}
      >
        <header
          className={`${TEXT_SIZE.HEADER} text-[rgb(var(--color-orange))]`}
          style={getTextStyle("left", "header")}
        >
          {projects[prevIndex].title}
        </header>
        <p
          className={`${TEXT_SIZE.BODY} pt-6 border-t-[1px] border-[rgb(var(--border-color))] max-h-[100%] overflow-scroll`}
          style={getTextStyle("left", "body")}
        >
          {projects[prevIndex].description}
        </p>
      </div>

      <div className="grow text-start h-[75%]" style={getCardStyle("center")}>
        <header
          className={`${TEXT_SIZE.HEADER} text-[rgb(var(--color-orange))] flex flex-row`}
          style={getTextStyle("center", "header")}
        >
          {projects[currentIndex].title}
        </header>
        <p
          className={`${TEXT_SIZE.BODY} pt-3 border-t-[1px] border-[rgb(var(--border-color))] max-h-[100%] overflow-scroll`}
          style={getTextStyle("center", "body")}
        >
          <span className={`${TEXT_SIZE.MINI} text-gray-400`}>
            {projects[currentIndex].timeline}{" "}
          </span>
          <br />
          {projects[currentIndex].description}
          <Highlight tech={projects[currentIndex].tech} limit={4} />
        </p>
      </div>

      <div
        className="flex-none w-[25%] h-[75%] opacity-50 cursor-pointer top-[25%] right-[-5%] relative scale-50 text-start"
        onClick={handlePrev}
        style={getCardStyle("right")}
      >
        <header
          className={`${TEXT_SIZE.HEADER} text-[rgb(var(--color-orange))]`}
          style={getTextStyle("right", "header")}
        >
          {projects[nextIndex].title}
        </header>
        <p
          className={`${TEXT_SIZE.BODY} pt-6 border-t-[1px] border-[rgb(var(--border-color))] max-h-[100%] overflow-scroll`}
          style={getTextStyle("right", "body")}
        >
          {projects[nextIndex].description}
        </p>
      </div>

      <div
        className="absolute w-[20%] opacity-30 top-[50%] right-[-20%] scale-50 text-start"
        style={getCardStyle("rightmost")}
      >
        <header
          className={`${TEXT_SIZE.HEADER} text-[rgb(var(--color-orange))]`}
        >
          {projects[rightmostIndex].title}
        </header>
        <p
          className={`${TEXT_SIZE.BODY} pt-6 border-t-[1px] border-[rgb(var(--border-color))]`}
        >
          {projects[rightmostIndex].description}
        </p>
      </div>

      <div className="absolute top-[0%] text-[var(--main-text-color)] bg-[rgba(0,0,0,0.3)] p-2 rounded-lg transition-opacity hover:opacity-100 opacity-30">
        {currentIndex + 1}/{projects.length}
      </div>
    </div>
  );
};
