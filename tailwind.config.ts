import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
          DEFAULT: "#2B2417",
          brown: "#3D352A"
        },
        text: {
          DEFAULT: "#fff",
          primary: "#DAB785",
          secondary: "#FFE3C1",
          cardMain: "#281E1F"
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
  plugins: [plugin(function ({ addComponents, theme }: any) {
    addComponents({
      '.dark-button': {
        backgroundColor: "#E58E27",
        borderRadius: "30px",
        color: "#fff",
        transition: "background-color 0.3s ease",
        fontSize: "18px",
        fontWeight: 600,
        padding: "15px 40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "poppins",
        '&:hover': {
          backgroundColor: "#422400",
        },
      },
      '.light-button': {
        backgroundColor: "#E58E27",
        borderRadius: "30px",
        color: "#fff",
        transition: "background-color 0.3s ease",
        fontSize: "18px",
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 40px",
        fontFamily: "poppins",
        '&:hover': {
          backgroundColor: "#fff",
          color: "#E58E27"
        },
      },
    })
  })],
};
export default config;
