const { test, expect } = require('@playwright/test');

test('homepage has title and links to premieres', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AngularJS App Example/);

  // Click the premieres link.
  await page.click('text=PREMIERES');

  // Expects the URL to contain premieres.
  await expect(page).toHaveURL(/.*premieres/);
});
