import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://saberxforce.netlify.app",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
});
