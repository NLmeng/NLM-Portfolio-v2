import HorizontalAccordionSocials from "@/components/Accordion";
import SimpleCarousel from "@/components/Carousel";
import { LeftNavigator, OvalNavigator } from "@/components/Navigator";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen bg-[rgb(var(--main-black))] text-[rgb(var(--clean-white))]">
        <HorizontalAccordionSocials />
        <LeftNavigator />
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
            className="h-[50vh] flex flex-col justify-center items-center"
          >
            <SimpleCarousel />
          </section>
        </main>
      </div>
    </>
  );
}
