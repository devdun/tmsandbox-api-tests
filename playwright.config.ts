import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: 'https://api.tmsandbox.co.nz',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  },
});
