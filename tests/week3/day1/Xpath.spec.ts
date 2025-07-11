import { test } from '@playwright/test';

test("Xpath with leaftaps", async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');

  await page.waitForTimeout(3000)

  await page.locator("//input[@id='username']").fill('democsr2')

  await page.locator("//input[@id='password']").fill('crmsfa')

  await page.locator("//input[@class='decorativeSubmit']").click();

    await page.waitForTimeout(3000)
});
