import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          100: "#FFE3C1",
          300: "#DAB785",
          600: "#FEF3BC",
          900: "#E58E27"
        },
        bg: {
          DEFAULT: "#2B2417"
        },
        heading_text: {
          DEFAULT: "#fff",
          primary: "#DAB785",
          secondary: "#FFE3C1"
        },
        product_card: {
          bg: "#FEF3BC",
          rating_star: "#E58E27",
          text: {
            DEFAULT: "#000",
            review: "#FF1C1C",
            main: "#281E1F"
          },
          badge: {
            bg: "#3D352A",
            text: "#FFFFFF",
            dot: "#00FF0A"
          },
        },
        text: {
          DEFAULT: "#FFFFFF"
        },
        button: {
          bg: {
            DEFAULT: "#E58E27",
            hover: "#422400",
          },
          text: {
            DEFAULT: "#fff"
          }
        }
      },
      fontFamily: {
        algerian: ['algerianFont'],
        wallpoet: ['var(--wallpoet)'],
        prosto_one: ['var(--prosto_one)'],
        aoboshi_one: ['var(--aoboshi_one)'],
        poppins: ['var(--poppins)'],
        press_start_2p: ['var(--press_start_2p)']
      },
    },
  },
  plugins: [],
};
export default config;
