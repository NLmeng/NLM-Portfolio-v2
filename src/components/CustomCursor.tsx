"use client";
import { useEffect } from "react";

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;

      const trail = document.createElement("div");
      trail.classList.add("cursor-trail");
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    const clickEffect = () => {
      cursor.classList.add("click");
      setTimeout(() => {
        cursor.classList.remove("click");
      }, 150);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", clickEffect);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", clickEffect);
      cursor.remove();
    };
  }, []);

  return null;
};
