const { join } = require("path");

module.exports = {
  // prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': "640px",
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': "1024px",
      // => @media (min-width: 1024px) { ... }

      'xl': "1280px",
      // => @media (min-width: 1280px) { ... }

      '2xl': "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        logo: "url('/banner.jpg')",
      },
    },
  },
  plugins: [],
};
