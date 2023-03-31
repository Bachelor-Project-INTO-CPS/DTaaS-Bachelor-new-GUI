// src: https://playwright.dev/docs/writing-tests

import { test, expect } from '@playwright/test';

interface TestLink {
  text: string;
  url: string;
}
const links: TestLink[] = [
  { text: 'Dashboard', url: '/dashboard' },
  { text: 'Library', url: '/library' },
  { text: 'Digital Twins', url: '/digitaltwins' },
  { text: 'Scenario Analysis', url: '/sanalysis' },
  { text: 'History', url: '/history' },
];
test.describe('Header Contents and Navigation Links', () => {
  for (const link in links) {
    test(`Navigation to ${links[link].text} link on the dashboard page`, async ({
      page,
    }) => {
      await page.goto(`${links[link].url}`);
      for (const link in links) {
        await page
          .locator(`div[role="button"]:has-text("${links[link].text}")`)
          .click();
        await expect(page).toHaveURL(links[link].url);
      }
    });
  }
});
