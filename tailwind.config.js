module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        fontFamily: {
            headline: ["Overpass"],
            text: ["Inter"],
        },
        colors: {
            primary: "#4D65BA",
            bg: "#181A20",
            bgHighlight: "#252832",
            bgLight: "#F8F9FD",
            hrColor: "#2C2F44",
            colorChat: "#393B4B",
            textColor: "#9DA1AE",
            disabled: "#15171E",
            headline: "#ffffff",
            danger: "#FF968E",
            success: "#28a745",
            white: "white",
        },
        extend: {
            fontSize: {
                xss: "12px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
