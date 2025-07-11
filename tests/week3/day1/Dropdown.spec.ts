import { test } from '@playwright/test';

test('Dropdown with Telerik', async ({ page }) => {
  await page.goto('https://www.telerik.com/contact');

  // Wait for the dropdown to be visible
  const dropdown = page.locator('#Country-1');
  await dropdown.waitFor({ state: 'visible' });

  // Optional: log available options
  const options = await dropdown.locator('option').allTextContents();
  console.log('Dropdown options:', options);

  // Select an option by index (e.g., 3rd one)
  await dropdown.selectOption({ index: 3 });

  // Wait just for demonstration (optional)
  await page.waitForTimeout(3000);
});