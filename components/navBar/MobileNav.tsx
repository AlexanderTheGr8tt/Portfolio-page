"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { navLinks } from "../../constants/constant";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          setActiveSection(section.id);
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
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div className="space-y-2">
            <span className="block w-8 h-0.5 dark:bg-primary bg-secondary"></span>
            <span className="block w-8 h-0.5 dark:bg-primary bg-secondary"></span>
            <span className="block w-5 h-0.5 dark:bg-primary bg-secondary"></span>
          </div>
          {/* <Image
            src="/assets/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Menu"Name
          /> */}
        </SheetTrigger>
        <SheetContent side={"top"} className="border-none fixed top-[-50px]">
          <SheetHeader>
            <SheetTitle>
              <p className="text-base text- pt-14">Menu</p>
            </SheetTitle>
          </SheetHeader>
          <SheetClose asChild>
            <div className="flex flex-col gap-12 pt-16 items-center ">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.name}>
                  <Link
                    href={link.link}
                    className={` ${
                      activeSection === link.des && " text-[#ca8a04]"
                    }  flex justify-center pb-3`}
                  >
                    <p
                      className={`text-[24px] font-laila ${
                        activeSection === link.des
                          ? "font-semibold"
                          : "font-extralight"
                      }`}
                    >
                      {link.name}
                    </p>
                  </Link>
                </SheetClose>
              ))}

              <Image
                src="/assets/icons/close-line.svg"
                width={40}
                height={40}
                alt="close menu"
              />
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
