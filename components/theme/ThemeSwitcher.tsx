"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="cursor-pointer">
      {theme === "light" ? (
        <Moon color="#292524" onClick={() => setTheme("dark")} size={30} />
      ) : (
        <Sun color="#f5f5f4" onClick={() => setTheme("light")} size={30} />
      )}
    </div>
  );
}
