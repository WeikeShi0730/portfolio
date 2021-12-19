// import colors from

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "12px 0 10px rgba(94, 142, 62, 0.5), 24px 0 10px rgba(149, 191, 71, 0.5);",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 0 20px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 10px 20px rgba(0, 0, 0, 0.6)",
      "3xl": "0 10px 40px rgba(0,0,0, 0.6)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      boxShadow: {
        "xl-dark": "0 0 20px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)",
        "2xl-dark": "0 5px 10px rgba(255, 255, 255, 0.6)",
        "3xl-dark": "0 5px 15px rgba(255, 255, 255, 0.6)",
      },
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
