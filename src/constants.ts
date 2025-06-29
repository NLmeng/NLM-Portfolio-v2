import dotenv from "dotenv";
dotenv.config();

const NUM_DOTS = Number(process.env.NEXT_PUBLIC_NUM_DOTS);
const DELAY_INCREMENT = Number(process.env.NEXT_PUBLIC_DELAY_INCREMENT);
const ANGLE_PER_DOT = Number(process.env.NEXT_PUBLIC_ANGLE_PER_DOT);

export const CIRCULAR_PROPS = {
  NUM_DOTS,
  DELAY_INCREMENT,
  ANGLE_PER_DOT,
};

export const HOME_PROPS = {
  FULL_NAME: process.env.NEXT_PUBLIC_HOME_FULL_NAME,
  ONE_LINER: process.env.NEXT_PUBLIC_HOME_ONE_LINER,
  PERSONAL_DESCRIPTIONS: process.env.NEXT_PUBLIC_HOME_PERSONAL_DESCRIPTIONS,
};

export const PROJECTS = JSON.parse(process.env.NEXT_PUBLIC_PROJECTS || "");
export const EXPERIENCE_DATA = JSON.parse(
  process.env.NEXT_PUBLIC_EXPERIENCE_DATA || ""
);

export const TEXT_SIZE = {
  MAIN_HEADER: process.env.NEXT_PUBLIC_TEXT_SIZE_MAIN_HEADER,
  MAIN_BODY: process.env.NEXT_PUBLIC_TEXT_SIZE_MAIN_BODY,
  HEADER: process.env.NEXT_PUBLIC_TEXT_SIZE_HEADER,
  BODY: process.env.NEXT_PUBLIC_TEXT_SIZE_BODY,
  MINI: process.env.NEXT_PUBLIC_TEXT_SIZE_MINI,
};

export const BETA_FLAG = String(process.env.NEXT_PUBLIC_ENABLE_TIMELINE_BETA);
