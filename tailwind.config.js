module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#292626",
            },
            letterSpacing: {
                big: "5px",
            },
            fontSize: {
                xxs: "10px",
            },
            height: {
                xl: "200px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
