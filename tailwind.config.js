/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                montserrat: ["Montserrat", "serif"],
            },
            fontSize: {
                "3xl": "32px",
                "6xl": "56px",
            },
            maxWidth: {
                "short-text": "420px",
            },
            colors: {
                primary: {
                    DEFAULT: "#442B48",
                    light: "#844E8C",
                },
                secondary: {
                    DEFAULT: "#261B10",
                    light: "#B6DC76",
                    light50op: "rgba(182,220,118,50%)",
                },
                black: "#000000",
                white: "#FFFFFFEE",
            },
        },
    },
    plugins: [],
};
