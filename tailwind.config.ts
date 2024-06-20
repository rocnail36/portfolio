import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        roboto:['var(--font-roboto)']
      },
      gridTemplateColumns:{
        hero: "50% 50%"
      },
      animation: {
        'flow': 'flow 3s linear infinite',
        'left': 'fromLeft 0.5s linear 1'
      },
      keyframes:{
        flow: {
          '0%, 100%': { transform: 'translateY(20px)' },
          '50%': { transform: 'translateY(0px)' },
        },
        fromLeft: {
          "0%": { transform: "translateX(-50%)",opacity:"0"},
          "100%": { transform: "translateX(0%)",opacity:"1"},
        }
      }
    },
  },
  plugins: [],
};
export default config;
