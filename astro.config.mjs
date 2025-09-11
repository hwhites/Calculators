import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // This MUST be your final, live domain for the sitemap to work correctly.
  site: 'https://calccollection.com',
  
  integrations: [
    tailwind(), 
    sitemap(),
    icon({
      include: {
        // Include all icons from the heroicons set
        heroicons: ['*'] 
      }
    })
  ]
});
