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

export const EXPERIENCE_DATA = [
  {
    year: "2019",
    title: "Project Initiation",
    description: "Started initial project development with new team members.",
  },
  {
    year: "2020",
    title: "Major Launch",
    description:
      "Launched the new version of the product, focusing on user experience.",
  },
  {
    year: "2021",
    title: "Expansion Phase",
    description:
      "Expanded the project to include additional features and integrations.",
  },
  {
    year: "2022",
    title: "Optimization",
    description:
      "Optimized performance based on user feedback and analytics data.",
  },
  {
    year: "2023",
    title: "Growth Strategy",
    description:
      "Implemented growth strategies, increasing user engagement by 30%.",
  },
];

export const TEXT_SIZE = {
  MAIN_HEADER: "text-4xl md:text-5xl",
  MAIN_BODY: "text-sm md:text-md",
  HEADER: "text-2xl md:text-3xl",
  BODY: "text-xs md:text-sm",
};
