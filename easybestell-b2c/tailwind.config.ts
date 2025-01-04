import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        xs: "8px",
        sm: "10px",
        md: "14px",
        lg: "18px",
        xl: "24px",
        xxl: "36px",
      },
      borderRadius: {
        small: "6rem",
        medium: "8px",
        large: "16px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
