/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-delayed": "fadeIn 1s ease-in-out 20s forwards", // 1s duration, 20s delay
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1 !important" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "5px 5px 10px rgba(236, 72, 153, 0.5)",
        },
        ".text-shadow-red": {
          textShadow: "5px 5px 10px rgba(239, 68, 68, 0.5)",
        },
      });
    },
  ],
};
export default config;
