const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, "pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "components/**/*.{js,ts,jsx,tsx)"),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "logo": "url('/public/banner.jpg')",
      }
    },
  },
  plugins: [
  ],
}