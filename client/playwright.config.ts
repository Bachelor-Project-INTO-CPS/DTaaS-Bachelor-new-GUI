// playwright.config.js
// @ts-check
// src: https://playwright.dev/docs/api/class-testconfig

import { devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const baseURL = process.env.REACT_APP_URL_BASENAME
  ? `${process.env.REACT_APP_URL.replace(/\/$/g, '')}/${
      process.env.REACT_APP_URL_BASENAME
    }/`
  : process.env.REACT_APP_URL;

const config = {
  workers: 4,
  timeout: 30000,
  globalTimeout: 600000,
  testDir: './test/e2e',
  testMatch: /.*\.test\.ts/,
  reporter: [
    ['html', { outputFile: 'playwright-report/index.html' }],
    ['list'],
    ['junit', { outputFile: 'playwright-report/results.xml' }],
    ['json', { outputFile: 'playwright-report/results.json' }],
  ],
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
};

export default config;
