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
            colors: {
                darken: {
                    DEFAULT: "#00000077",
                    50: "#00000011",
                    100: "#00000022",
                    200: "#00000033",
                    300: "#00000055",
                    400: "#00000077",
                    500: "#00000099",
                    600: "#000000aa",
                    700: "#000000cc",
                    800: "#000000dd",
                    900: "#000000ee",
                },
                lighten: {
                    DEFAULT: "#ffffff33",
                    50: "#ffffff11",
                    100: "#ffffff22",
                    200: "#ffffff33",
                    300: "#ffffff55",
                    400: "#ffffff77",
                    500: "#ffffff99",
                    600: "#ffffffaa",
                    700: "#ffffffcc",
                    800: "#ffffffdd",
                    900: "#ffffffee",
                },
            },
        },
        fontFamily: {
            regular: ["Roboto", "sans-serif"],
            header: ["Belanosima", "sans-serif"],
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
