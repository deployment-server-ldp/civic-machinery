import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Deep industrial graphite — the primary brand colour.
        brand: {
          50: "#f4f6f8",
          100: "#e6eaef",
          200: "#c9d2dc",
          300: "#a2b0c1",
          400: "#74879e",
          500: "#546a83",
          600: "#42546b",
          700: "#374556",
          800: "#2b3542",
          900: "#1c232d",
          950: "#12171e",
        },
        // Warm tobacco-gold accent.
        accent: {
          50: "#fbf7ee",
          100: "#f5ead0",
          200: "#ecd39d",
          300: "#e2b968",
          400: "#d9a343",
          500: "#c8952e",
          600: "#a97524",
          700: "#875820",
          800: "#714821",
          900: "#613d20",
          950: "#381f0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(18,23,30,0.08), 0 8px 24px -12px rgba(18,23,30,0.15)",
        "card-hover":
          "0 2px 6px rgba(18,23,30,0.10), 0 16px 40px -16px rgba(18,23,30,0.25)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
