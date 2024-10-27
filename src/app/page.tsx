"use client";

import HorizontalAccordionSocials from "@/components/Accordion";
import CircularBorder from "@/components/Circle";
import { LeftNavigator, OvalNavigator } from "@/components/Navigator";

export default function Home() {
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
          <div className="absolute top-0 h-[50vh] w-[80vw] z-101">
            <CircularBorder
              direction="clockwise"
              numDots={84}
              color="rgb(var(--clean-white))"
            />
          </div>
          <div className="absolute top-[5vh] h-[45vh] w-[75vw] z-102">
            <CircularBorder direction="counter" numDots={84} />
          </div>
        </section>
      </main>
    </div>
  );
}
