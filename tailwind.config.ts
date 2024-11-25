import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "rgb(35, 36, 38)",
        purple: "rgb(202, 174, 241)",
        red: "rgb(246, 87, 81)",
        orange: "rgb(253, 143, 93)",
        white: "rgb(255, 255, 255)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  safelist: [
    "text-4xl",
    "md:text-5xl",
    "text-sm",
    "md:text-md",
    "text-2xl",
    "md:text-3xl",
    "text-xs",
    "md:text-sm",
    "text-[10px]",
    "md:text-[12px]",
  ],
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
