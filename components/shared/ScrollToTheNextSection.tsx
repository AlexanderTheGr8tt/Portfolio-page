"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const sectionIds = ["home", "about", "projects", "contact"];

const getSectionInViewport = () => {
  // Your getSectionInViewport function implementation here
};

const SectionNavigation: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const sectionId = sectionIds[currentSectionIndex];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSectionIndex]);

  // Call getSectionInViewport to determine the section in the viewport
  const sectionInViewport = getSectionInViewport();

  return (
    <div className="fixed right-5 bottom-5">
      <ChevronUp
        size={40}
        onClick={() => {
          if (currentSectionIndex > 0) {
            setCurrentSectionIndex(currentSectionIndex - 1);
          }
        }}
        className={`${currentSectionIndex === 0 && "hidden"}`}
      />

      <ChevronDown
        size={40}
        onClick={() => {
          if (currentSectionIndex < sectionIds.length - 1) {
            setCurrentSectionIndex(currentSectionIndex + 1);
          }
        }}
        className={`${
          currentSectionIndex === sectionIds.length - 1 && "hidden"
        }`}
      />
    </div>
  );
};

export default SectionNavigation;
