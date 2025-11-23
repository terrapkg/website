// @ts-check

import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import Icons from "unplugin-icons/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://terra.fyralabs.com",

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

  integrations: [
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
  ],
});
