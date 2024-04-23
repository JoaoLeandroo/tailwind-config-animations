import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        efeito: {
          "0%": {opacity: "0"},
          "100%": {opacity: "100%"}
        },
        efeito2: {
          "0%": {left: "-1000px"},
          "100%": {left: "0"}
        }
      },
      animation: {
        efeito: "efeito 3s ease-in-out infinite",
        efeito2: "efeito2 3s ease-in-out"
      },
      dropShadow: {
        "text-teste": "3px 3px 3px #c3c3c3"
      }
    },
  },
  plugins: [],
};
export default config;
