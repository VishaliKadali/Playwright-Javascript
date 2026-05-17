import { test, expect } from '@playwright/test';

test('Geolocation test', {tag:'@smoke'},async ({ browser }) => {
    
  const context = await browser.newContext({
    geolocation: {
      latitude: 12.3106334,
      longitude: 76.5532872
    },
    permissions: ['geolocation']
  });

  const page = await context.newPage();

  await page.goto('https://www.google.com/maps');

  //await page.locator('#sVuEFc').click();

  await page.waitForTimeout(10000);

});