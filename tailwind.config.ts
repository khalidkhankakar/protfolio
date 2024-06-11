import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        pink:{
          1:"#DA1BEB",
        },
        dark: {
          
          1: '#0C0E23',
          2: '#04071D',
          3:'#000319'
        },
        purple: {
          1:'#E4ECFF',
          2:'#C2A8E8'
        },
        green:{
          1:'#12FC37'
        },
        orange: {
          1:'#F4AC24'
        },
        cyan:{
          1:'#00FCCE'
        }
      },
      backgroundImage: {
        "nav-focus":
          "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
      }
      ,
      fontFamily: {
        sans: ['var(--font-sans)']
      }
    },
  },
  plugins: [addVariablesForColors],
};
export default config;


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
