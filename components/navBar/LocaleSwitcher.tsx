"use client";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex gap-1 text-xl font-dosis text-secondary dark:text-primary">
      <Link
        href={`/`}
        locale="en"
        className={`${pathname === "/" && "text-[#ca8a04]"}  onHoverLine`}
      >
        EN
      </Link>
      <span>/</span>
      <Link
        href={`/`}
        locale="pl"
        className={`${pathname === "/pl" && "text-[#ca8a04]"}  onHoverLine`}
      >
        PL
      </Link>
    </div>
  );
}
