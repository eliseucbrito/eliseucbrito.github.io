import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      full: "50%",
      pill: "1920px",
    },
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        primaryInk: "var(--color-primary-ink)",
        hairline: "var(--color-hairline)",
        accent: "var(--color-accent)",
        ribbonBg: "var(--color-ribbon-bg)",
        metadata: "var(--color-metadata)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        ui: ["var(--font-ui)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
