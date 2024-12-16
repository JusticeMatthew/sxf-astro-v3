/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  important: true,
  blocklist: ["container"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      margin: {
        section: "var(--space-section)",
      },
      padding: {
        section: "var(--space-section)",
      },
      gap: {
        section: "var(--space-section)",
      },
      space: {
        section: "var(--space-section)",
      },
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        norwester: ["Norwester", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: "var(--step-0)",
        "level-1": "var(--step-1)",
        "level-2": "var(--step-2)",
        "level-3": "var(--step-3)",
        "level-4": "var(--step-4)",
        "level-5": "var(--step-5)",
        "level-6": "var(--step-6)",
      },
      colors: {
        light: "#F8FAFC",
        dark: "#131313",
        space: "#0e0a10",
        "sw-yellow-50": "#FFFBD7",
        "sw-yellow-100": "#FFF9C2",
        "sw-yellow-200": "#FFF599",
        "sw-yellow-300": "#FFF071",
        "sw-yellow-400": "#FFEC48",
        "sw-yellow": "#FFE81F", // 500 (base)
        "sw-yellow-600": "#E6CE00",
        "sw-yellow-700": "#AE9C00",
        "sw-yellow-800": "#766A00",
        "sw-yellow-900": "#3E3700",
        "sw-yellow-950": "#221E00",
      },
    },
  },
  plugins: [],
};
