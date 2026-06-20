// @ts-check

import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import Icons from "unplugin-icons/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import astro_i18nya from "astro-i18nya";
import i18nya from "./src/i18n";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://terrapkg.com",

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "jsx",
        jsx: "react",
      }),
      svgr(),
    ],
  },

  integrations: [sitemap(), react(), astro_i18nya(i18nya)],
});
