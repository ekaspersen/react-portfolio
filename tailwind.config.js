/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "430px",
                xxl: "1540px",
                huge: "1780px",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            fontSize: {
                "3xl": ["32px", "1.25"],
                "6xl": ["56px", "1"],
            },
            maxWidth: {
                "short-text": "420px",
                "long-text": "620px",
            },
            colors: {
                primary: {
                    DEFAULT: "#204251",
                    light: "#2F6D88",
                },
                secondary: {
                    DEFAULT: "#111111",
                    light: "#9FB939",
                    light50op: "rgba(159,185,57,50%)",
                },
                black: "#111111",
                white: "#FFFFFFEE",
            },
        },
    },
    plugins: [],
};
