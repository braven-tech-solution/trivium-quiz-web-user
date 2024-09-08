/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        dark: "#121416",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #20B1AA, #7DD2CD 50%, #D9ECEA)",
        "leaderboard-gradient": "linear-gradient(to bottom, #008081, #00A9A7)",
      },
      boxShadow: {
        "custom-shadow": "5px 5px 10px #b8b8b8, -5px -5px 10px #ffffff",
      },
    },
  },
  plugins: [],
};
