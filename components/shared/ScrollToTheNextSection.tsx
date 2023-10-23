"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const sectionIds = ["home", "about", "projects", "contact"];

const SectionNavigation: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        observer.current?.observe(sectionElement);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          observer.current?.unobserve(sectionElement);
        }
      });
    };
  }, []);

  const goUp = (currentSection: string) => {
    if (currentSection === "about") return "#home";
    if (currentSection === "projects") return "#about";
    if (currentSection === "contact") return "#projects";
    return "home";
  };

  const goDown = (currentSection: string) => {
    if (currentSection === "home") return "#about";
    if (currentSection === "about") return "#projects";
    if (currentSection === "projects") return "#contact";
    return "home";
  };

  const handleScroll = (direction: "up" | "down") => {
    const targetSection =
      direction === "up" ? goUp(currentSection) : goDown(currentSection);
    const targetElement = document.getElementById(targetSection.substring(1));

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-5 bottom-5">
      <ChevronUp
        size={40}
        onClick={() => handleScroll("up")}
        className={`${
          currentSection === "home" && "hidden"
        } cursor-pointer hover:scale-125
        transform transition-transform duration-200`}
      />

      <ChevronDown
        size={40}
        onClick={() => handleScroll("down")}
        className={`${
          currentSection === "contact" && "hidden"
        } cursor-pointer hover:scale-125
        transform transition-transform duration-200`}
      />
    </div>
  );
};

export default SectionNavigation;
