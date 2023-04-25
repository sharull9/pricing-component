/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradientClr:
          "linear-gradient(90deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
      },
    },
    colors: {
      white: "#ffffff",
      gradientOne: "hsl(236, 72%, 79%)",
      gradientTwo: "hsl(237, 63%, 64%)",
      clr: {
        200: "hsl(240, 78%, 98%)",
        400: "hsl(234, 14%, 74%)",
        600: "hsl(233, 13%, 49%)",
        800: "hsl(232, 13%, 33%)",
      },
    },
  },
  plugins: [],
};
