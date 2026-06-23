import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#222222",
        primary: {
          DEFAULT: "#F5BD07",
          foreground: "#222222",
          hover: "#D89E00",
        },
        border: "rgba(34, 34, 34, 0.12)",
        muted: {
          DEFAULT: "rgba(34, 34, 34, 0.06)",
          foreground: "rgba(34, 34, 34, 0.62)",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.72)",
          foreground: "#222222",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 17, 0.10)",
        line: "0 1px 0 rgba(17, 17, 17, 0.08)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(110%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shine: "shine 4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
