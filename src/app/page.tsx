"use client";

import {
  ButtonA,
  CircularBorder,
  Header,
  LeftNavigator,
  OvalNavigator,
  ProjectCarousel,
  Timeline,
  TimelineController,
} from "@/components";
import {
  CIRCULAR_PROPS,
  EXPERIENCE_DATA,
  HOME_PROPS,
  TEXT_SIZE,
} from "@/constants";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import { useEffect, useState } from "react";

export default function Home() {
  const { NUM_DOTS, DELAY_INCREMENT, ANGLE_PER_DOT } = CIRCULAR_PROPS;
  const { FULL_NAME, PERSONAL_DESCRIPTIONS, ONE_LINER } = HOME_PROPS;
  const [rotationAngleOuter, setRotationAngleOuter] = useState(0);
  const [rotationAngleInner, setRotationAngleInner] = useState(0);
  const currentSection = useCurrentSection();
  const [startCountdownForCarousel, setStartCountdownForCarousel] =
    useState(false);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [showDownButton, setShowDownButton] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(3);

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
        <Header />

        <section
          id="about"
          className="h-screen flex flex-row items-center justify-center"
        >
          <div
            className={`w-[20%] min-w-[20%] flex-grow flex flex-col space-between items-center`}
          >
            <h1
              className={`text-[rgb(var(--color-orange))] ${TEXT_SIZE.MAIN_HEADER} font-bold tracking-tighter break-normal`}
            >
              {FULL_NAME}
            </h1>
            <p className={`mt-1 ${TEXT_SIZE.MAIN_BODY}`}>{ONE_LINER}</p>
          </div>
          <div
            className={`ml-12 max-w-[50%] ${TEXT_SIZE.MAIN_BODY} whitespace-pre-line`}
          >
            {PERSONAL_DESCRIPTIONS}
          </div>
        </section>

        <section
          id="experience"
          className={`relative h-[75vh] flex flex-col items-center justify-center ${TEXT_SIZE.BODY}`}
        >
          <Timeline
            currentIndex={currentIndex}
            experienceData={EXPERIENCE_DATA}
          />
          <TimelineController
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            experienceData={EXPERIENCE_DATA}
          />
        </section>

        <div
          className={`top-[20vh] relative z-20 overflow-hidden self-baseline ${TEXT_SIZE.BODY}`}
        >
          <a
            href="/projects"
            rel="noopener noreferrer"
            className="underline after:content-['_↗'] text-[rgb(var(--color-orange))] transition-colors duration-300"
          >
            See All Projects
          </a>
        </div>

        <section
          id="projects"
          className={`z-10 relative h-[65vh] flex flex-col justify-end items-center ${TEXT_SIZE.BODY}`}
        >
          <div className="absolute top-[15vh] h-[50vh] w-[80vw] z-10 overflow-hidden">
            <CircularBorder
              id="outer"
              direction="clockwise"
              numDots={NUM_DOTS}
              color="var(--main-text-color)"
              rotationAngle={rotationAngleOuter}
            />
          </div>
          <div className="absolute top-[20vh] h-[45vh] w-[75vw] z-10 overflow-hidden">
            <CircularBorder
              id="inner"
              direction="counter"
              numDots={NUM_DOTS}
              rotationAngle={rotationAngleInner}
            />
          </div>
          <div
            className={`absolute top-[25vh] h-[40vh] w-[60vw] z-20 overflow-hidden transition-opacity duration-1000 ease-in-out text-center ${
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
