import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf8ee",
          100: "#f8edcf",
          200: "#f0d99a",
          300: "#e6c05f",
          400: "#dea832",
          500: "#c4973a",
          600: "#b8860b",
          700: "#9a6f0a",
          800: "#7a5508",
          900: "#5c3f06",
        },
        parchment: {
          50: "#fdfbf6",
          100: "#f9f4e8",
          200: "#f4efe3",
          300: "#ede5d0",
          400: "#e3d5b5",
          500: "#d4be91",
        },
        zen: {
          50: "#f5ede5",
          100: "#e8d0be",
          200: "#d4a882",
          300: "#b8834d",
          400: "#9a6535",
          500: "#7a4e2d",
          600: "#5e3820",
          700: "#452815",
        },
        jade: {
          50: "#e8f0ea",
          100: "#c5d9c9",
          200: "#96bba0",
          300: "#5e9872",
          400: "#3a7a52",
          500: "#2e4a35",
          600: "#223826",
          700: "#172618",
        },
        ink: "#1c1c1c",
        cinnabar: "#b5341a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        kai: ["var(--font-kai)", "KaiTi", "STKaiti", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "leaf-texture": "url('/textures/parchment.png')",
        "gold-gradient": "linear-gradient(135deg, #c4973a 0%, #e6c05f 50%, #c4973a 100%)",
        "dark-gradient": "linear-gradient(180deg, #0e0c09 0%, #1c1510 100%)",
      },
      animation: {
        "leaf-unfurl": "leafUnfurl 2s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "shimmer": "shimmer 2s infinite",
        "vein-grow": "veinGrow 3s ease-out forwards",
      },
      keyframes: {
        leafUnfurl: {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        veinGrow: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
