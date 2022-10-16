import { defineConfig } from 'astro/config';
import spoiler from "remark-spoiler";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://olshamb.ru',
  integrations: [mdx(), sitemap(), react()],
  markdown:{
    remarkPlugins: [],
    shikiConfig: {
      theme:"github-light",
      wrap: true
    }
  }
});