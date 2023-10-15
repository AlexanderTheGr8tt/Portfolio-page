import Link from "next/link";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

import React from "react";

import MobileNav from "./MobileNav";
import NavContent from "./NavContent";

const Navbar = () => {
  return (
    <div className="flex fixed z-50 w-full h-16 md:h-20 border-b-1 dark:border-[#44403c]">
      <div className="flex flex-1  relative justify-between items-center dark:bg-secondary bg-primary  p-6">
        <Link
          href="#"
          className="flex  gap-2 items-center font-semibold text-secondary dark:text-primary"
        >
          <span className="bg-secondary dark:bg-primary text-primary dark:text-secondary w-8 h-8 flex justify-center items-center rounded-full">
            A
          </span>
          <span className="hidden lg:flex text-sm md:text-base">
            Aleksander Małecki
          </span>
        </Link>

        <div className="flex gap-14 items-center">
          <NavContent />

          <div className="flex items-center gap-5">
            <p className="text-xl">PL/EN</p>

            <ThemeSwitcher />
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
