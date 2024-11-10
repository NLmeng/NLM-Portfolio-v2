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
  PERSONAL_DESCRIPTIONS: "SOME DESCRIPTIONS HERE THAT WILL BE FILLED IN LATER",
  EXPERIENCE: {
    EXP1: "Present PLACE HOLDER CARD 1",
    EXP2: "2023 PLACE HOLDER CARD 2",
    EXP3: "2022 PLACE HOLDER CARD 3",
  },
  PROJECT: [
    { id: 0, title: "Project 1", description: "Description of Project 1" },
    { id: 1, title: "Project 2", description: "Description of Project 2" },
    { id: 2, title: "Project 3", description: "Description of Project 3" },
  ],
};
