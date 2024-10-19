"use client";

import { useState } from "react";

export default function HorizontalAccordionSocials() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center">
      <button
        className="bg-orange py-1 px-2 rounded-2xl"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-white">☰</span>
      </button>

      <div className="relative flex items-center">
        <div
          className={`absolute top-0 left-[-6px] h-full bg-orange rounded-r-md transition-all duration-500 ease-in-out ${
            isExpanded ? "w-[150px]" : "w-0"
          }`}
        ></div>

        <div
          className={`flex items-center transition-opacity duration-500 ease-in-out ${
            isExpanded ? "opacity-100 ml-4" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          <a href="#" className="text-white z-10 relative">
            <img src="/github.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="#" className="text-white ml-4 z-10 relative">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
