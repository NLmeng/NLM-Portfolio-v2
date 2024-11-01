"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "This is a placeholder for project one.",
  },
  {
    title: "Project Two",
    description: "This is a placeholder for project two.",
  },
  {
    title: "Project Three",
    description: "This is a placeholder for project three.",
  },
  {
    title: "Project Four",
    description: "This is a placeholder for project four.",
  },
];

const SimpleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative mt-16">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full p-4">
              <SimpleCard
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-[rgb(var(--main-orange))] rounded-full text-[rgb(var(--clean-white))] hover:bg-[rgb(var(--main-orange-dark))]"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-[rgb(var(--main-orange))] rounded-full text-[rgb(var(--clean-white))] hover:bg-[rgb(var(--main-orange-dark))]"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

interface SimpleCardProps {
  title: string;
  description: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, description }) => {
  return (
    <div className="bg-[rgb(var(--clean-white))] p-6 rounded-md shadow-md text-center text-[rgb(var(--main-black))]">
      <h3 className="text-2xl font-bold text-[rgb(var(--main-orange))]">
        {title}
      </h3>
      <p className="mt-2 text-lg">{description}</p>
    </div>
  );
};

export default SimpleCarousel;
