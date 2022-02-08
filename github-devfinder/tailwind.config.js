module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "monospace"],
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-2px, 0, 0)",
          },

          "20%, 80%": {
            transform: "translate3d(4px, 0, 0)",
          },

          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
      animation: {
        shake: "shake 0.3s cubic-bezier(.36,.07,.19,.97) 2 both;"
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
