import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f4",
        secondary: "#292524",
        active: "#57534e",
        activeDark: "#a8a29e",
        activeMiddle: "#78716c",
        purple: "#8B41E0",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dosis: ["var(--font-dosis)"],
        laila: ["var(--font-laila)"],
        mulish: ["var(--font-mulish)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        white: "0px 0px 5px rgba(0,0,0,0.07)",
        black: "0px 0px 5px rgba(0,0,0,0.04)",
      },
    },
  },
  darkMode: "class",

  plugins: [
    nextui({
      themes: {
        light: {
          extend: "light",
          colors: {
            background: "#f5f5f4",
            foreground: "#292524",
          },
        },
        dark: {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#292524",
            foreground: "#f5f5f4",
          },
        },
      },
    }),
  ],
};
export default config;

// primary: "#f4f0e6",
// secondary: "#272a33",
// active: "#92400e",
// activeDark: "#F7DD9E",

// background: "#f4f0e6",
// foreground: "#272a33",
