import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      boll_1: {
        "0%": { top: "30%", right: "0%" },
        "25%": { top: "-1%", right: "40%" },
        "50%": { top: "30%", right: "84%" },
        "75%": { top: "60%", right: "40%" },
        "100%": { top: "30%", right: "0%" },
      },
      boll_2: {
        "0%": { top: "0%", right: "40%" },
        "25%": { top: "30%", right: "95%" },
        "50%": { top: "95%", right: "40%" },
        "75%": { top: "30%", right: "0%" },
        "100%": { top: "0%", right: "40%" },
      },
      boll_3: {
        "0%": { top: "30%", right: "84%" },
        "25%": { top: "60%", right: "40%" },
        "50%": { top: "30%", right: "0%" },
        "75%": { top: "-1%", right: "40%" },
        "100%": { top: "30%", right: "84%" },
      },
      boll_4: {
        "0%": { top: "94%", right: "40%" },
        "25%": { top: "30%", right: "0%" },
        "50%": { top: "0%", right: "40%" },
        "75%": { top: "30%", right: "94%" },
        "100%": { top: "94%", right: "40%" },
      },
      glow: {
        "0%": { backgroundPosition: "0 0" },
        "50%": { backgroundPosition: "100% 0" },
        "100%": { backgroundPosition: "0 0" },
      },
    },
    animation: {
      "boll-1": "boll_1 30s linear infinite",
      "boll-2": "boll_2 30s linear infinite",
      "boll-3": "boll_3 30s linear infinite",
      "boll-4": "boll_4 30s linear infinite",
      glow: "glow 2s linear infinite",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "24px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1188px",
      "custom-smx": "450px",
      "custom-xl": "1208px",
      "custom-xxl": "1300px",
      "custom-2xl": "1600px",
    },
    lineHeight: {
      100: "100%",
      110: "110%",
      118: "118%",
      120: "120%",
      125: "125%",
      130: "130%",
      133: "133%",
      137: "137%",
      140: "140%",
      150: "150%",
      156: "156%",
      160: "160%",
      163: "163%",
    },
    borderRadius: {
      1: "4px",
      2: "6px",
      2.5: "10px",
      3.5: "15px",
      4: "16px",
      5: "20px",
      7.5: "30px",
      10: "40px",
      14: "76px",
      25: "100px",
      full: "9999px",
    },
    extend: {
      backgroundImage: {
        blueRotate: "linear-gradient(92.91deg, #14c8ff96 30%, #085bf7 96.32%)",
        blueGradient:
          "linear-gradient(92.91deg, #6494EE 0.95%, #085BF7 96.32%)",
        blackGradient:
          "linear-gradient(270deg, #02000C 0%, rgba(2, 0, 12, 0) 98.03%);",
        orangeGradient:
          "linear-gradient(160deg, #EE9E64 13.34%, #EC284B 86.66%)",
        whiteTransparentGradientPrimary:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,0.05) 100%)",
        whiteTransparentGradientSecondary:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
        blueOffWhiteGradient:
          "linear-gradient(360deg, rgba(100, 148, 238, 0.32) 0.95%, rgba(8, 91, 247, 0.32) 96.32%)",
        offWhiteGradient:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.518519) 23%, #FFFFFF 54%, rgba(255, 255, 255, 0.619565) 77.5%, rgba(255, 255, 255, 0) 100%)",
        signUpBg: "url('/assets/images/sign-up/webp/sign-up-bg.webp')",
        vaultGiveBg:
          "url('/assets/images/view-your-vault/png/vault-line-bg.png')",
        topArrow: "url('/assets/images/sign-up/svg/drop-down-arrow.svg')",
      },
      fontSize: {
        "custom-2xl": "22px",
        "custom-3xl": "32px",
        "custom-8xl": "100px",
      },
      colors: {
        blue: "#085BF7",
        "mid-blue": "#305895",
        "mid-black": "#21202b",
        "light-blue": "#6494ee",
        martinique: "#3D3B45",
        "off-gray": "#757575",
        "gray-black": "#44434D",
        "dim-gray": "#636363",
        "steel-gray": "#1B1924",
        "off-white": "#D9D9D9",
        "dark-black": "#02000C",
        "mate-black": "#22202ACC",
        "off-black": "#0F0D18",
        "yellow-orange": "#FFAE4C",
        "hot-pink": "#FF5F98",
        "gray-pink": "#7A6A77",
        "sky-blue-ribbon": "#095CF7",
        "baltic-sea": "#211F2A",
        "ship-gray": "#3c3a43",
        "french-gray": "#C0C0C3",
        "off-green": "#56A473",
        "dark-green": "#48BB78",
        "tuna-gray": "#35333D",
        charade: "#201F29",
        "slat-gray": "#3b3a43",
        "charcoal-gray": "#53525a",
        "light-sky": "#545e79",
        "steel-dark-gray": "#3F3D46",
        "light-gray": "#23345a",
        gray: "#9A999F",
      },
      boxShadow: {
        black: "0px 2px 8px 0px #0000001F",
        "light-black": "0px 0px 0px 4px #FFFFFF0F",
        "off-white": "0px 0px 0px 1px #ffffffcc",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".common-transition": {
          transition: "all 300ms linear",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
