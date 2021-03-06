module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bcolor: "#10C9C3",
        fcolor: "#212121",
        card: "#F2F2F2",
        rcard: "#0FB7B5",
        btncolor: "#2bd8c7",
        primaryColor: "#0eb8b2",
      },
      spacing: {
        "sixty-h": "60vh",
        "eighty-h": "80vh",
        "eighty-w": "80wh",
        "one-fouthy": "180vh",
        "fouthy-five": "45%",
        "fourty-rem": "45rem",
        "blog-rem": "32rem",
      },
      screens: {
        ninehund: "750px",
        miniphone: "250px",
      },
      fontSize: {
        five: "6vh",
      },
    },
  },
  plugins: [],
};
