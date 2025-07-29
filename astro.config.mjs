// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  define: {
    'process.env.COMING_SOON_MODE': JSON.stringify(process.env.NODE_ENV === 'production' ? 'true' : 'false')
  }
});