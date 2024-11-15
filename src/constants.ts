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
    year: "2020",
    title: "First Post-Secondary Education",
    subtitle: "UBC CS'24",
    description: `This is the year I started Bachelor, Major in Computer Science at the University of British Columbia. 
      \n Where I pursue fundamentals and courses that prepare for the real-world. Where I met like-minded people and grew to enjoy software engineering. 
      \n By the end, I got Dean’s Honour Roll, Trek Excellence Award, great friends, and graduated with high distinction`,
  },
  {
    year: "2021",
    title: "GitHub Side Projects",
    subtitle: "GitHub Side Projects",
    description: `Amidst COVID, I turn to GitHub to start exploring side projects and the possibilities of coding.
      \n I coded in my first programming language, Java, a game with an object-oriented approach and wrote a custom A-Star algorithm for automatic solving. I improved the performance by 100% using heuristics.
      \n I also started to learn Python to develop a translation application with user-friendly interface, leveraging multi-threading for efficient performance, and designed frame processors that utilize Pytesseract OCR, achieving a 100% improvement in accuracy.
`,
  },
  {
    year: "2022",
    title: "Year 3 and Still Going",
    subtitle: "SDE @ UBC AgroBot",
    description: `I pursed my first experience as a volunteer as Software Developer Engineer at UBC AgroBot and dedicated about 20 hours a week. 
      \n I utilized my skill in Python to enhance a navigation algorithm for real-time video frame object tracking, optimizing the robot’s path-finding capabilities. I developed performance tests for all existing algorithm, ensuring smooth performance on mock field.
      \n At the end, I helped the team to integrate the navigation algorithms and UI with ROS 2 and Arduino, achieving autonomous navigation on a Jetson board to successfully navigate a mock field.`,
  },
  {
    year: "2023",
    title: "Continue Learning",
    subtitle: "Agile Group Projcts",
    description: `As I was finishing up my work at UBC AgroBot. I look to other opportunities to grow and learn. 
      \n One of my proudest achievement was in an 8-person group agile project to build a cloud-based enterprise calendar for managing key company dates with admin and user modules for Associated Engineering.
      \n This was my first experience in full-stack development, and I made sure to contribute to every part of the project thus becoming a major developer.
- Replaced company's paper calendar through a unique cloud-based enterprise calendar.
- Oversaw frontend including: creating mockup with figma and helped with 80% of all UI components.
- Assisted with backend APIs and integration with MySQL. Fixed complex time zone bugs to improve performance by over 100%. 
- Conducted code reviews for over 50% of all codes in a team of 8.
- Written unit tests and end-to-end automated regression testing with Cypress and GitHub action.
visit here: https://yojana-nlm.vercel.app/
\n Later, I led another group project of 5 to build an automated Trip Planning App that tailors travel itineraries based on user preferences and providing detailed information about destinations; making travel planning less daunting and more enjoyable.
\n I Used MongoDB, Express, React + Redux thunks, NodeJS, OpenAI, GoogleAPI, Mapbox-gl.
visit here: https://travelerstea-906d.onrender.com`,
  },
  {
    year: "2024",
    title: "Volunteers & Full-Time",
    subtitle: "SDET @ Safe Software",
    description: `
    I had the opportunity to volunteer for 3 months at Blockchain Venture Capital. I Researched and contributed in brainstorming sessions to improve the blockchain-ecosystem.
    \n I started my journey at Safe Software. Where I Led JUnit test triage and debugging to enhance test suite reliability of over 10,000 tests. Developed automated API testing framework with Postman & Cypress. Utilized Java with Docker, Tomcat, PostgreSQL to ensure robustness in codebase.
`,
  },
];

export const TEXT_SIZE = {
  MAIN_HEADER: "text-4xl md:text-5xl",
  MAIN_BODY: "text-sm md:text-md",
  HEADER: "text-2xl md:text-3xl",
  BODY: "text-xs md:text-sm",
  MINI: "text-[10px] md:text-[12px]",
};
