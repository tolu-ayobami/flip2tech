/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
        heroLogin: "url('/images/hero-login.jpg')",
        brain: "url('/images/brain.jpg')",
        lines: "url('/images/illustration.png')",
        lines2: "url('/images/illustration2.png')",
        team: "url('/images/team.jpg')",
        foot: "url('/images/f12.jpeg')",
        foot2: "url('/images/f13.jpeg')",
        courses: "url('/images/f7.jpeg')",
        login: "url('/images/login.jpg')",
        register: "url('/images/register.jpg')",
        gif: "url('/images/hero.gif')",
        kids: "url('/images/clip-1021.png')",
        cinema: "url('/images/cinema.png')",
        hero1: "url('/images/earth.png')",
        hero2: "url('/images/hero2-part.png')",
        hero3: "url('/images/qoute.png')",
        phy: "url('/images/mix-raced.png')",
        cohort: "url('/images/cohort.jpg')",
        calendar: "url('/vdashboardimages/Calendar.svg')",
      },
    },
    screens: {
      sm: "640px", // Small screens (e.g., smartphones)
      md: "868px", // Medium screens (e.g., tablets)
      lg: "1400px", // Large screens (e.g., laptops)
      // xl: "1280px", // Extra-large screens (e.g., desktops)
      "2xl": "1536px", // 2x extra-large screens (e.g., large desktops)
    },
    fontFamily: {
      rale: ["Raleway", "sans-serif","Poppins"],
    },
  },
  plugins: [require("flowbite/plugin")],
};


