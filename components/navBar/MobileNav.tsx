"use client";

import React, { useEffect, useState } from "react";
import { navLinksEn, navLinksPl } from "../../constants/constant";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

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

  const links = pathname === "/" ? navLinksEn : navLinksPl;

  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div className="space-y-2">
            <span className="block w-8 h-0.5 dark:bg-primary bg-secondary"></span>
            <span className="block w-8 h-0.5 dark:bg-primary bg-secondary"></span>
            <span className="block w-5 h-0.5 dark:bg-primary bg-secondary"></span>
          </div>
        </SheetTrigger>
        <SheetContent side={"top"} className="border-none fixed top-[-50px]">
          <SheetHeader>
            <SheetTitle>
              <p className="text-base text- pt-14">Menu</p>
            </SheetTitle>
          </SheetHeader>
          <SheetClose asChild>
            <div className="flex flex-col gap-12 pt-16 items-center ">
              {links.map((link) => (
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

              <X size={40} />
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
