/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                black: "#212b36",
                dark: "#090E34",
                "dark-700": "#090e34b3",
                primary: "#2B63D9",
                secondary: "#13C296",
                "button-primary": "#437EF7",
                "body-color": "#637381",
                warning: "#FBBF24",
            },
            boxShadow: {
                input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
                pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
                "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
                testimonial: "0px 60px 120px -20px #EBEFFD",
            },
        },
    },
    plugins: [],
}
