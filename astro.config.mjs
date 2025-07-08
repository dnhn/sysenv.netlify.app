// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ['devserver-root--sysenv.netlify.app']
  }
});
