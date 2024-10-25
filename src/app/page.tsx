import HorizontalAccordionSocials from "@/components/Accordion";
import { LeftNavigator, OvalNavigator } from "@/components/Navigator";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen bg-black text-white">
        <HorizontalAccordionSocials />
        <LeftNavigator />
        <OvalNavigator />
        <main className="w-full ml-20 flex justify-center items-center flex-col">
          <section
            id="about"
            className="h-screen flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-orange text-6xl">Lymeng Naret</div>
              <div className="text-white mt-4">
                SOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="h-screen flex items-center justify-center"
          >
            <div className="flex flex-col space-y-4 text-center">
              <div className="border border-purple p-4">
                -Present PLACE HOLDER CARD 1
              </div>
              <div className="border border-purple p-4">
                -2023 PLACE HOLDER CARD 2
              </div>
              <div className="border border-purple p-4">
                -2022 PLACE HOLDER CARD 3
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="h-screen flex items-center justify-center"
          >
            <div>Projects section content here...</div>
          </section>
        </main>
      </div>
    </>
  );
}
