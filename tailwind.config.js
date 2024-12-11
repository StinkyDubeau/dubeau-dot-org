/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                vignette: "inset 0px 0px 150px 75px rgb(0 0 0 / 0.5)",
                glow: "inset 0px 0px 150px 75px rgb(1 1 1 / 0.5)",
                "inner-4xl": "inset 0px 0px 100px 50px rgb(0 0 0 / 0.5)",
                "inner-3xl": "inset 0px 0px 50px 25px rgb(0 0 0 / 0.5)",
                "inner-2xl": "inset 0px 0px 20px 10px rgb(0 0 0 / 0.5)",
                "inner-xl": "inset 0px 0px 10px 5px rgb(0 0 0 / 0.5)",
            },
            colors: {
                darken: {
                    DEFAULT: "#ffffff11",
                    10: "#00000001",
                    50: "#00000011",
                    100: "#00000022",
                    200: "#00000033",
                    300: "#00000055",
                    400: "#00000077",
                    500: "#00000099",
                    600: "#000000aa",
                    700: "#000000cc",
                    800: "#000000ea",
                    900: "#000000ee",
                },
                lighten: {
                    DEFAULT: "#ffffffdd",
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
            animation: {
                "gradient-x": "gradient-x 5s ease infinite",
                "gradient-y": "gradient-y 5s ease infinite",
                "gradient-xy": "gradient-xy 5s ease infinite",
                "message-pop-in": "bounce 1s ease infinite",
            },
            keyframes: {
                "gradient-y": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "center top",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center center",
                    },
                },
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
        fontFamily: {
            regular: ["Roboto", "sans-serif"],
            header: ["Roboto", "sans-serif"],
            headerScript: ["Tenor Sans", "serif"],
            pixel: ["Silkscreen", "monospace"],
        },
        screens: {
            xs: "480px",
            // => @media (min-width: 320px) { ... }

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [
        "prettier-plugin-tailwindcss",
        require("daisyui"),
        require("tailwind-scrollbar-hide"),
        require("@tailwindcss/forms"),
    ],
};
