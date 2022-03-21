module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bcolor: "#10C9C3",
      },
      spacing: {
        "sixty-h": "60vh",
        "eighty-h": "80vh",
        "eighty-w": "80wh",
        "one-fouthy": "180vh",
        "fouthy-five": "45%",
      },
      backgroundImage: {
        globe: "url('/src/assits/globe.jpg')",
      },
      screens: {
        ninehund: "750px",
      },
    },
  },
  plugins: [],
};
