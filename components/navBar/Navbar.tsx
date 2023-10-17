import Link from "next/link";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

import React from "react";

import MobileNav from "./MobileNav";
import NavContent from "./NavContent";
import { DropdownMenuDemo } from "../DropdownMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex fixed z-50 w-full h-16 md:h-20 border-b-1 dark:border-[#44403c]">
      <div className="flex flex-1  relative justify-between items-center dark:bg-secondary bg-primary  p-6">
        <Link
          href="#"
          className="flex  gap-2 items-center font font-semibold text-secondary dark:text-primary"
        >
          <Image src="/assets/img/a.png" alt="logo" width={30} height={20} />
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
