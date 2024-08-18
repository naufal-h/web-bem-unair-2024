const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {

        fontFamily: {
            display: ["Inter"],
            body: ['"Inter"'],
            sans: ["Inter", "sans-serif"],
        },
        // screens: {
        //   'sm': '640px',
        //   'md': '768px',
        //   'lg': '1140px',
        //   'xl': '1280px',
        //   '2xl': '1536px',
        // },
        extend: {


            textStrokeWidth: {
                '1': '1px',
            },
            textStrokeColor: {
                red: '#850E09',
    },
            colors: {
                bemred: "#880808",
                bemsun: "#E88A45",
                bemfire: "#DD2A32",
                bemwine: "#701E38",
                bemblue: "#132C50",
                bempink: "#850E09",
                bembluenew: "#162f6f",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("daisyui"),],
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        themes: [
            {
                light: {
                    primary: "#850E09",
                    "primary-content": "#ffffff",
                    "--btn-text-case": "none",
                    secondary: "#F4F4F5",
                    "secondary-content": "#A1A1AA",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                    error: "#DD2A32",
                    info: "#132C50",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=dark]"
                    ],
                    primary: "#E88A45",
                    "primary-content": "#ffffff",
                    "--btn-text-case": "none",
                    secondary: "#606060",
                    "secondary-content": "#cfcfcf",
                    error: "#DD2A32",
                    info: "#132C50",
                },
            },
            "dark",
        ],
    },
};

// function getDaisyUI() {
//     return "daisyui";
//   }