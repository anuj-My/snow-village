module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-lobster)", "cursive"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      fontWeight: {
        heading: "400",
        body: "400",
        "body-semibold": "600",
      },
      fontSize: {
        h1: ["84px", { lineHeight: "1.071" }],
        h2: ["48px", { lineHeight: "1.20" }],
        base: ["16px", { lineHeight: "1.5" }],
      },
      colors: {
        primary: "#001A45",
        "primary-70": "rgba(0,26,69,0.7)",
        "primary-active": "#165FF5",
        background: "#ffffff",
        surface: "#f8f9fa",
      },
      backgroundImage: {
        "gradient-button": "linear-gradient(90deg, #165FF5, #114BC2, #0D378F)",
        "gradient-header-button": "linear-gradient(90deg, #2A6CF0, #024781)",
        "gradient-footer-button":
          "linear-gradient(90deg, #165FF5, rgba(0,26,69,0.9))",
      },
    },
  },
  plugins: [],
};
