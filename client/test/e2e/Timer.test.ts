
import { test, expect } from '@playwright/test';

test.describe('Timer test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./');
    await page.getByRole('textbox', { name: 'username' }).fill('user-test');
    await page.locator('button:has-text("Sign In")').click();
  });

test('Reponsetime is less than 200ms', async ({ page }) => {
    await page.goto('./digitaltwins');
  const executeTabElement = await page.locator(
    `li[role="tab"]:has-text("Execute")`
  );
  await executeTabElement.click({timeout:200});
  });

});
