"use client";

import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

const HorizontalAccordionSocials: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="fixed top-4 left-4 flex items-center">
      <button
        className="bg-[rgb(var(--main-orange))] z-50 py-2 px-3 brdr0_5 flex items-center justify-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span
          className={`text-[rgb(var(--clean-white))] text-xl transition-transform duration-300`}
        >
          {isExpanded ? (
            <Icon.ChevronLeft size={15} />
          ) : (
            <Icon.List size={15} />
          )}
        </span>
      </button>

      <div
        className={`flex items-center transition-[width, opacity] duration-500 ease-in-out relative ml-[-2px] z-30 overflow-hidden`}
        style={{
          width: isExpanded ? "200px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div
          className={`bg-[rgb(var(--clean-white))] rounded-r-md h-full flex items-center px-3 border border-[rgb(var(--main-orange-dark))]`}
        >
          <a
            href="https://github.com/NLmeng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(var(--main-orange))] hover:text-[rgb(var(--main-purple))] ml-2 mr-1 my-0.5"
          >
            <Icon.Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/lymengnaret/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(var(--main-orange))] hover:text-[rgb(var(--main-purple))] ml-1 mr-1 my-0.5"
          >
            <Icon.Linkedin size={20} />
          </a>

          <a
            href="mailto:lymengnaret@yahoo.com"
            className="text-[rgb(var(--main-orange))] hover:text-[rgb(var(--main-purple))] ml-1 mr-2 my-0.5"
          >
            <Icon.Envelope size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HorizontalAccordionSocials;
