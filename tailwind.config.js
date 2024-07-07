module.exports = {
    darkMode: 'class',
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                'bemred': '#000',
                'bemsun': '#000',
                'bemfire': '#000',
                'bemwine': '#000',
                'bemblue': '#000',
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        // require("daisyui")
    ],
    // daisyui: {
    //     styled: true,
    //     base: true,
    //     utils: true,
    //     themes: [
    //         {
    //             light: {
    //                 primary: "#E88A45",
    //                 "primary-content": "#ffffff",
    //                 "--btn-text-case": "none",
    //                 secondary: "#F4F4F5",
    //                 "secondary-content": "#A1A1AA",
    //                 accent: "#37cdbe",
    //                 neutral: "#3d4451",
    //                 "base-100": "#ffffff",
    //                 'error': '#DD2A32',
    //                 'info': '#132C50',
    //             },
    //             dark: {
    //                 ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
    //                 primary: "#E88A45",
    //                 "primary-content": "#ffffff",
    //                 "--btn-text-case": "none",
    //                 secondary: "#606060",
    //                 "secondary-content": "#cfcfcf",
    //                 'error': '#DD2A32',
    //                 'info': '#132C50',
    //             },
    //         },
    //         "dark",
    //     ],
    // },
};
