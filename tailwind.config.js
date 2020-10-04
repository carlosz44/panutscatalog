// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "p-red": "#9E2126",
        "p-grey": "#201f1d",
        "p-text": "#333333",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
