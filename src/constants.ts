import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lymeng Naret",
  description: "Lymeng Naret is a software engineer.", //TODO: add description
};

const NUM_DOTS = 96; // Number of dots used in CircularBorder
const DELAY_INCREMENT = 0.1; // Seconds per dot
const ANGLE_PER_DOT = 360 / NUM_DOTS; // Degrees per dot
export const CIRCULAR_PROPS = {
  NUM_DOTS,
  DELAY_INCREMENT,
  ANGLE_PER_DOT,
};

export const HOME_PROPS = {
  FULL_NAME: "Lymeng Naret",
  PERSONAL_DESCRIPTIONS:
    "SOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
  EXPERIENCE: {
    EXP1: "Present PLACE HOLDER CARD 1\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
    EXP2: "2023 PLACE HOLDER CARD 2\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
    EXP3: "2022 PLACE HOLDER CARD 3\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
  },
  PROJECT: [
    {
      id: 0,
      title: "Project 1",
      description:
        "Description of Project 1\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
    },
    {
      id: 1,
      title: "Project 2",
      description:
        "Description of Project 2\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
    },
    {
      id: 2,
      title: "Project 3",
      description:
        "Description of Project 3\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER\nSOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
    },
  ],
};

export const TEXT_SIZE = {
  MAIN_HEADER: "text-4xl md:text-5xl",
  MAIN_BODY: "text-sm md:text-md",
  HEADER: "text-2xl md:text-3xl",
  BODY: "text-xs md:text-sm",
};
