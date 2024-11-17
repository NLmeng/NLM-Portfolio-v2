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
};

export const PROJECTS = [
  {
    id: 5,
    title: "Maze Solver",
    description: `Pathfinding Algorithm
      Utilized the A* algorithm with optimized heuristics for faster pathfinding.
      Fully interactive board with hint and solve features.
      Real-time performance optimizations.
      Techn:  Java, Design Patterns, Algorithm Designs
      `,
    url: "https://github.com/NLmeng/maze-solver",
    summary:
      "A pathfinding algorithm implementation using A* with custom heuristics for enhanced speed. Features a fully interactive board allowing users to visualize and solve mazes. Includes real-time hints and solving capabilities.\n\nTechnologies: TypeScript, React, HTML5 Canvas, A* Algorithm, TailwindCSS.",
  },
  {
    id: 0,
    title: "Yojana",
    description: `Enterprise Calendar Application
      Features 5 unique calendar views with instant CRUD operations.
      Supports server-side rendering, authentication, and cross-platform compatibility.
      Improved user experience and efficiency for enterprise scheduling.
      Tech: TypeScript, React, NextJS, MySQL, Prisma, TailwindCSS, NextAuth, Azure Active Directory.
      `,
    url: "https://github.com/CPSC319-2022/Yojana",
    summary:
      "An enterprise-level calendar application offering multiple unique views (Year, Month, Week, Triannual, One-Page Year). Supports instant CRUD operations with server-side rendering for fast performance. Includes secure user authentication and integrates with external calendar systems like iCal and Outlook.\n\nTechnologies: TypeScript, React, NextJS, MySQL, Prisma, TailwindCSS, NextAuth, Azure Active Directory.",
  },
  {
    id: 2,
    title: "AgroBot",
    description: `Navigation Software for Agricultural Robots
      Implemented video frame processing algorithms using OpenCV.
      Developed performance tests for real-time robot navigation.
      Enhanced the efficiency of navigation using custom configurations.
      Tech: Python, OpenCV, Tkinter, Performance/Manual Testing.
      `,
    url: "https://github.com/UBCAgroBot/Navigation",
    summary:
      "Software for autonomous agricultural robots that processes video frames for navigation. Utilized OpenCV for real-time image analysis and object detection. Optimized the software with performance tests to ensure smooth robot movement in varying field conditions.\n\nTechnologies: Python, OpenCV, Tkinter, Performance Testing, Video Frame Analysis.",
  },
  {
    id: 4,
    title: "Database Projects",
    description: `Interactive SQL-Based Database
      Created a custom SQL-based interactive database with REST APIs.
      Astronomical Entities Wikipedia
      Developed a Wikipedia-like application for astronomical entities using MySQL and NextJS.`,
    summary:
      "Includes two major database projects: (1) An interactive SQL-based database with custom APIs for efficient data manipulation. (2) A Wikipedia-like application for astronomical entities featuring a searchable database of celestial bodies.\n\nTechnologies: NodeJS, Express, MySQL, NextJS, TailwindCSS, RESTful APIs.",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: `Full-Stack MERN Application
      Features item addition, deletion, and display in a carousel for easy navigation.
      Includes a custom modal dialog for item details, search, and sorting.
      Integrated Express server for secure user authentication.`,
    summary:
      "A comprehensive inventory management system built using the MERN stack. Supports item addition, deletion, and detailed display with a custom dialog/modal. The system features search and sorting capabilities for efficient inventory management. Secure user authentication is handled by an Express server.\n\nTechnologies: MongoDB, Express, React, Redux, NodeJS, TailwindCSS.",
  },
  {
    id: 1,
    title: "TravelersTea",
    description: `Trip-Generating Application
      Generates tailored travel itineraries based on user preferences.
      Features an interactive map with autogenerated pinned locations.
      Implemented CI/CD pipeline with Docker for seamless deployment.
      Techn: JavaScript, MongoDB, Express, React, NodeJS, Docker, Mapbox API, Google Places API, OpenAI API.`,
    url: "https://travelerstea-906d.onrender.com/",
    summary:
      "A travel planning application that generates personalized travel itineraries based on user input. Integrates an interactive map with autogenerated pinned locations for a visual representation of the travel plan. The project uses a CI/CD pipeline with Docker for efficient and reliable deployment.\n\nTechnologies: MongoDB, Express, React, NodeJS, Docker, Mapbox API, Google Places API, OpenAI API.",
  },
];

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
