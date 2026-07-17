export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        navy: "#141B2E",
        ink: "#14161C",
        "ink-dim": "#6B6D74",
        off: "#F5F5F3",
        line: "#E7E6E2",
      },
    },
  },
  plugins: [],
};