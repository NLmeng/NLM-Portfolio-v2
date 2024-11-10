"use client";

import {
  ButtonA,
  CircularBorder,
  HorizontalAccordionSocials,
  LeftNavigator,
  OvalNavigator,
  ProjectCarousel,
  ThemeToggleButton,
} from "@/components";
import { CIRCULAR_PROPS, HOME_PROPS, TEXT_SIZE } from "@/constants";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import { useEffect, useState } from "react";

export default function Home() {
  const { NUM_DOTS, DELAY_INCREMENT, ANGLE_PER_DOT } = CIRCULAR_PROPS;
  const { FULL_NAME, PERSONAL_DESCRIPTIONS, EXPERIENCE } = HOME_PROPS;
  const [rotationAngleOuter, setRotationAngleOuter] = useState(0);
  const [rotationAngleInner, setRotationAngleInner] = useState(0);
  const currentSection = useCurrentSection();
  const [startCountdownForCarousel, setStartCountdownForCarousel] =
    useState(false);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [showDownButton, setShowDownButton] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavExpanded(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentSection === "PROJECTS") {
      setStartCountdownForCarousel(true);
      const timer = setTimeout(() => {
        setIsCarouselVisible(true);
      }, (1000 / 1.75) * DELAY_INCREMENT * NUM_DOTS);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  useEffect(() => {
    if (startCountdownForCarousel) {
      const timer = setTimeout(() => {
        setIsCarouselVisible(true);
      }, (1000 / 1.75) * DELAY_INCREMENT * NUM_DOTS);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCountdownForCarousel]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDownButton(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleNavExpansion = () => {
    setIsNavExpanded((prev) => !prev);
  };

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
      setRotationAngleOuter((prev) => prev + ANGLE_PER_DOT);
      setRotationAngleInner((prev) => prev - ANGLE_PER_DOT);
    } else {
      setRotationAngleOuter((prev) => prev - ANGLE_PER_DOT);
      setRotationAngleInner((prev) => prev + ANGLE_PER_DOT);
    }
  };

  return (
    <div className="relative flex min-h-screen bg-[var(--main-bg-color)] text-[var(--main-text-color)]">
      {/* move to header/footer on mobile */}
      <HorizontalAccordionSocials />
      <div className="fixed top-16 left-4">
        <ThemeToggleButton />
      </div>
      {/* TODO: remove on mobile*/}
      <LeftNavigator
        onNavigate={handleNavigationClick}
        isExpanded={isNavExpanded}
      />
      <OvalNavigator
        isExpanded={isNavExpanded}
        toggleExpansion={toggleNavExpansion}
      />
      {/* */}
      <main
        className={`transition-all duration-500 ease-in-out w-full mr-20 flex justify-center items-center flex-col ${
          isNavExpanded ? "xl:ml-[15%] lg:ml-[20%] ml-[25%]" : "ml-20"
        }`}
      >
        <section
          id="about"
          className="h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <div
              className={`text-[rgb(var(--color-orange))] text-4xl md:text-5xl ${TEXT_SIZE.MAIN_HEADER}`}
            >
              {FULL_NAME}
            </div>
            <div className={`mt-4 text-xs md:text-sm ${TEXT_SIZE.MAIN_BODY}`}>
              {PERSONAL_DESCRIPTIONS}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={`min-h-fit flex flex-col items-center justify-center space-y-4 text-center ${TEXT_SIZE.BODY} pb-12`}
        >
          <div className="border border-theme p-4 h-[12vh] md:h-[10vh]">
            {EXPERIENCE.EXP1}
          </div>
          <div className="border border-theme p-4 h-[12vh] md:h-[10vh]">
            {EXPERIENCE.EXP2}
          </div>
          <div className="border border-theme p-4 h-[12vh] md:h-[10vh]">
            {EXPERIENCE.EXP3}
          </div>
        </section>

        <section
          id="projects"
          className={`z-100 relative h-[50vh] flex flex-col justify-end items-center text-center ${TEXT_SIZE.BODY}`}
        >
          <div className="absolute top-0 h-[50vh] w-[80vw] z-101 overflow-hidden">
            <CircularBorder
              id="outer"
              direction="clockwise"
              numDots={NUM_DOTS}
              color="var(--main-text-color)"
              rotationAngle={rotationAngleOuter}
            />
          </div>
          <div className="absolute top-[5vh] h-[45vh] w-[75vw] z-102 overflow-hidden">
            <CircularBorder
              id="inner"
              direction="counter"
              numDots={NUM_DOTS}
              rotationAngle={rotationAngleInner}
            />
          </div>
          <div
            className={`absolute top-[10vh] h-[40vh] w-[60vw] z-103 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              isCarouselVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <ProjectCarousel onRotate={handleRotate} />
          </div>
        </section>
      </main>
      {showDownButton && (
        <ButtonA
          direction="down"
          onClick={() => {
            handleNavigationClick("projects");
          }}
          position="fixed"
          className="left-1/2 bottom-4 transform -translate-x-1/2 animate-bounce"
        />
      )}
    </div>
  );
}
