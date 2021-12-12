module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "12px 0 10px 0 rgba(94, 142, 62, 0.5), 24px 0 10px 0 rgba(149, 191, 71, 0.5), 36px 0 10px 0 rgba(236, 230, 245, 0.5);",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -8px rgba(0, 0, 0, 0.8)",
      "3xl": "0 35px 60px -5px rgba(0,0,0, 0.8)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      colors: {
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        green: {
          500: "#5E8E3E",
          400: "#95BF47",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};
