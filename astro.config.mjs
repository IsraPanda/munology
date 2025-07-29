// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.munology.com',
  integrations: [tailwind(), sitemap({
    filter: (page) => {
      // Coming Soonページを除外
      return !page.includes('coming-soon');
    }
  })]
});