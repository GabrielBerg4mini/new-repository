import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-strong": "var(--primary-strong)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};

export default config;
