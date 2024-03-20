/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        vignette: "inset 0px 0px 150px 75px rgb(0 0 0 / 0.5)",
        "inner-4xl": "inset 0px 0px 100px 50px rgb(0 0 0 / 0.5)",
        "inner-3xl": "inset 0px 0px 50px 25px rgb(0 0 0 / 0.5)",
        "inner-2xl": "inset 0px 0px 20px 10px rgb(0 0 0 / 0.5)",
      },
    },
    fontFamily: {
      regular: ["Roboto", "sans-serif"],
      header: ["Belanosima", "sans-serif"]
  },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
