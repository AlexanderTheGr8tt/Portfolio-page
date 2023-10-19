"use client";

import { navLinks } from "@/constants/constant";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";

const NavContent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          setActiveSection(section.id);
          // Update the URL hash fragment based on the active section
          window.history.replaceState(null, "", `#${section.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex gap-8 items-center">
      <div className="max-sm:hidden gap-5 flex justify-between">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className={`${
              activeSection === link.des && " text-[#ca8a04] font-bold"
            } onHoverLine`}
          >
            <p className="text-xl md:text-2xl font-dosis ">{link.name}</p>
          </Link>
        ))}
      </div>

      <LocaleSwitcher />
    </div>
  );
};

export default NavContent;
