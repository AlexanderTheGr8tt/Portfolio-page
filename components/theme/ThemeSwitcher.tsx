// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { Button } from "../ui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <Button
          className=" text-[#292524] border border-none"
          variant="outline"
          size="icon"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
        </Button>
      ) : (
        <Button
          className=" text-[#f5f5f4] border border-none"
          variant="outline"
          size="icon"
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </Button>
      )}
    </div>
  );
}
