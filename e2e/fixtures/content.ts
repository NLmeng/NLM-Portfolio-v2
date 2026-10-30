/**
 * Deterministic site content for e2e runs.
 *
 * The app reads all of its content from NEXT_PUBLIC_* variables at build
 * time, so the e2e server is built with these values instead of the real
 * Vercel content. Tests assert against the exports below, never against
 * hard-coded strings, so the fixture can grow without breaking them.
 *
 * Shape notes, each one there so a later story can catch a regression:
 * - PROJECTS ids are deliberately not in timeline order.
 * - One project is "ongoing" (sorted first in the grid).
 * - One project has no url (no "View Project" link).
 * - One project has display: false (hidden from the carousel only).
 * - EXPERIENCE_DATA has more than 4 entries; the timeline starts at index 3.
 */

export const FULL_NAME = "Test Person";
export const ONE_LINER = "Builds things for e2e tests.";
export const PERSONAL_DESCRIPTIONS =
  "First paragraph about the test person.\n\nSecond paragraph about the test person.";

export const EXPERIENCE_DATA = [
  {
    year: "2019",
    title: "Experience Alpha",
    subtitle: "Org Alpha",
    description: "Alpha description.",
  },
  {
    year: "2020",
    title: "Experience Bravo",
    subtitle: "Org Bravo",
    description: "Bravo description.",
  },
  {
    year: "2021",
    title: "Experience Charlie",
    subtitle: "Org Charlie",
    description: "Charlie description.",
  },
  {
    year: "2022",
    title: "Experience Delta",
    subtitle: "Org Delta",
    description: "Delta description.",
  },
  {
    year: "2023",
    title: "Experience Echo",
    subtitle: "Org Echo",
    description: "Echo description.",
  },
  {
    year: "2024",
    title: "Experience Foxtrot",
    subtitle: "Org Foxtrot",
    description: "Foxtrot description.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    timeline: "2021",
    summary: "Project One summary.",
    description: "Project One description.",
    tech: ["TypeScript", "React"],
    url: "https://example.com/one",
    display: true,
  },
  {
    id: 2,
    title: "Project Two",
    timeline: "2023 - ongoing",
    summary: "Project Two summary.",
    description: "Project Two description.",
    tech: ["Go", "Postgres", "Docker", "AWS", "Terraform"],
    url: "https://example.com/two",
    display: true,
  },
  {
    id: 3,
    title: "Project Three",
    timeline: "2019",
    summary: "Project Three summary.",
    description: "Project Three description.",
    tech: ["Python"],
    url: "",
    display: true,
  },
  {
    id: 4,
    title: "Project Four",
    timeline: "2024",
    summary: "Project Four summary.",
    description: "Project Four description.",
    tech: ["Rust"],
    url: "https://example.com/four",
    display: true,
  },
  {
    id: 5,
    title: "Project Five",
    timeline: "2020",
    summary: "Project Five summary.",
    description: "Project Five description.",
    tech: ["Java", "Spring"],
    url: "https://example.com/five",
    display: true,
  },
  {
    id: 6,
    title: "Project Six",
    timeline: "2022",
    summary: "Project Six summary.",
    description: "Project Six description.",
    tech: ["Kotlin"],
    url: "https://example.com/six",
    display: false,
  },
];

export const CIRCULAR = {
  NUM_DOTS: 12,
  DELAY_INCREMENT: 0.1,
  ANGLE_PER_DOT: 30,
};

/** Environment the e2e server is built and started with. */
export const fixtureEnv: Record<string, string> = {
  NEXT_PUBLIC_HOME_FULL_NAME: FULL_NAME,
  NEXT_PUBLIC_HOME_ONE_LINER: ONE_LINER,
  NEXT_PUBLIC_HOME_PERSONAL_DESCRIPTIONS: PERSONAL_DESCRIPTIONS,
  NEXT_PUBLIC_EXPERIENCE_DATA: JSON.stringify(EXPERIENCE_DATA),
  NEXT_PUBLIC_PROJECTS: JSON.stringify(PROJECTS),
  NEXT_PUBLIC_NUM_DOTS: String(CIRCULAR.NUM_DOTS),
  NEXT_PUBLIC_DELAY_INCREMENT: String(CIRCULAR.DELAY_INCREMENT),
  NEXT_PUBLIC_ANGLE_PER_DOT: String(CIRCULAR.ANGLE_PER_DOT),
  NEXT_PUBLIC_TEXT_SIZE_MAIN_HEADER: "text-5xl",
  NEXT_PUBLIC_TEXT_SIZE_MAIN_BODY: "text-lg",
  NEXT_PUBLIC_TEXT_SIZE_HEADER: "text-2xl",
  NEXT_PUBLIC_TEXT_SIZE_BODY: "text-base",
  NEXT_PUBLIC_TEXT_SIZE_MINI: "text-xs",
  NEXT_PUBLIC_ENABLE_TIMELINE_BETA: "false",
};
