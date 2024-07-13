/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#479942",
        letterPrimary: "#6abe61",
        lightGreen: "#d6ffca",
        black: "#1a1c19",
        lightGray: "#aaaca6"
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        robotoxs: ["roboto-light", "sans-serif"],
        robotos: ["roboto-regular", "sans-serif"],
        robotom: ["roboto-medium", "sans-serif"],
        robotobold: ["roboto-bold", "sans-serif"]
      },
    }
  },
  plugins: []
}
