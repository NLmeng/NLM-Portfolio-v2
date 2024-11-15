"use client";

import { IconButton, ThemeToggleButton } from "@/components";
import { TEXT_SIZE } from "@/constants";
import React from "react";
import { Question } from "react-bootstrap-icons";

export const Header: React.FC = () => {
  return (
    <header
      className={`border-b-[0.1px] border-[var(--only-feel-color)] absolute top-0 left-0 w-full bg-transparent ${TEXT_SIZE.MINI} font-normal tracking-[-0.01em] my-1`}
    >
      <div className="flex justify-center">
        <nav className="flex space-x-8 ">
          <IconButton
            onClick={() => {}}
            icon={<Question />}
            position=""
            default={false}
            className="text-[var(--main-text-color)] hover:bg-[var(--button-hover-bg-color)] p-2 rounded-full z-103"
            ariaLabel="Home Logo"
            title="Home Logo"
            animationClassName="transition-transform duration-500 transform rotate-180"
          />
          <a
            href="https://github.com/NLmeng"
            target="_blank"
            rel="noopener noreferrer"
            className="content-center text-[var(--main-text-color)] hover:text-[var(--button-hover-bg-color)] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lymengnaret/"
            target="_blank"
            rel="noopener noreferrer"
            className="content-center text-[var(--main-text-color)] hover:text-[var(--button-hover-bg-color)] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:lymengnaret@yahoo.com"
            className="content-center text-[var(--main-text-color)] hover:text-[var(--button-hover-bg-color)] transition-colors duration-300"
          >
            Email
          </a>
          <ThemeToggleButton size={12} />
        </nav>
      </div>
    </header>
  );
};
