import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://vbartalis.github.io",
  base: "/herbizar",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        sharpOptions: {
          failOnError: false
        }
      }
    }
  }
});