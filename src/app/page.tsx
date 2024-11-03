"use client";

import HorizontalAccordionSocials from "@/components/Accordion";
import ProjectCarousel from "@/components/Carousel";
import CircularBorder from "@/components/Circle";
import { LeftNavigator, OvalNavigator } from "@/components/Navigator";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import { useEffect, useState } from "react";

// TODO: pull up and refactor components related to carousels and its borders
export default function Home() {
  const [rotationAngleOuter, setRotationAngleOuter] = useState(0);
  const [rotationAngleInner, setRotationAngleInner] = useState(0);
  const currentSection = useCurrentSection();
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  useEffect(() => {
    if (currentSection === "PROJECTS") {
      const timer = setTimeout(() => {
        setIsCarouselVisible(true);
      }, (1000 / 1.75) * delayIncrement * numDots);

      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  const numDots = 84; // should always match numDots in CircularBorder (TODO: pull up all instances)
  const anglePerDot = 360 / numDots; // degree/dots
  const delayIncrement = 0.1; // seconds/dots

  const handleNavigationClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + sectionRect.top;
      const scrollPosition =
        sectionTop - (window.innerHeight - sectionRect.height) / 2;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleRotate = (direction: "left" | "right") => {
    if (direction === "right") {
      setRotationAngleOuter((prev) => prev + anglePerDot);
      setRotationAngleInner((prev) => prev - anglePerDot);
    } else {
      setRotationAngleOuter((prev) => prev - anglePerDot);
      setRotationAngleInner((prev) => prev + anglePerDot);
    }
  };

  return (
    <div className="relative flex min-h-screen bg-[rgb(var(--main-black))] text-[rgb(var(--clean-white))]">
      <HorizontalAccordionSocials />
      <LeftNavigator onNavigate={handleNavigationClick} />
      <OvalNavigator />
      <main className="w-full ml-20 flex justify-center items-center flex-col">
        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-[rgb(var(--main-orange))] text-6xl">
              Lymeng Naret
            </div>
            <div className="text-[rgb(var(--clean-white))] mt-4">
              SOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="min-h-fit flex flex-col items-center justify-center space-y-4 text-center pb-12"
        >
          <div className="border border-[rgb(var(--main-purple))] p-4 h-[12vh]">
            -Present PLACE HOLDER CARD 1
          </div>
          <div className="border border-[rgb(var(--main-purple))] p-4 h-[12vh]">
            -2023 PLACE HOLDER CARD 2
          </div>
          <div className="border border-[rgb(var(--main-purple))] p-4 h-[12vh]">
            -2022 PLACE HOLDER CARD 3
          </div>
        </section>

        <section
          id="projects"
          className="z-100 relative h-[50vh] flex flex-col justify-end items-center"
        >
          <div className="absolute top-0 h-[50vh] w-[80vw] z-101 overflow-hidden">
            <CircularBorder
              id="outer"
              direction="clockwise"
              numDots={numDots}
              color="rgb(var(--clean-white))"
              rotationAngle={rotationAngleOuter}
            />
          </div>
          <div className="absolute top-[5vh] h-[45vh] w-[75vw] z-102 overflow-hidden">
            <CircularBorder
              id="inner"
              direction="counter"
              numDots={numDots}
              rotationAngle={rotationAngleInner}
            />
          </div>
          <div
            className={`absolute top-[10vh] h-[40vh] w-[65vw] z-103 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              isCarouselVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <ProjectCarousel onRotate={handleRotate} />
          </div>
        </section>
      </main>
    </div>
  );
}
