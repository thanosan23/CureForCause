import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

export default config;