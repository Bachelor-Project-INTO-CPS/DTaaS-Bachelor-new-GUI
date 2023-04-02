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
  links.forEach((link) => {
    test(`Navigation to ${link.text} link on the dashboard page`, async ({
      page,
    }) => {
      await page.goto(`${link.url}`);
      await expect(page).toHaveURL(link.url);
    });
  });
});

test.describe('Navigation from each link to other links', () => {
  links.forEach((link) => {
    test(`Navigation from ${link.text} link to other links`, async ({
      page,
    }) => {
      await page.goto(`${link.url}`);
      /* eslint-disable no-restricted-syntax */
      for (const linkToClick of links) {
        if (linkToClick !== link) {
          /* eslint-disable no-await-in-loop */
          await page
            .locator(`div[role="button"]:has-text("${linkToClick.text}")`)
            .click();
          await expect(page).toHaveURL(linkToClick.url);
        }
      }
    });
  });
});
