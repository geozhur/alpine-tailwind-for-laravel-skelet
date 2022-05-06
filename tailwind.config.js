const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        secondary2: "#000000",
        third: "#FFFFFF",
        bgmessage: "#FFFFFF",
        logo: "#00b746",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
