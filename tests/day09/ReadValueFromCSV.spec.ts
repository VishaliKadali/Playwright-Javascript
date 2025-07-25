import { test } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

// Step 1: Read and parse CSV
// const csvPath = path.resolve(__dirname, '../../Utils/LoginData.csv');
const csvPath = path.resolve(__dirname, './Utils/LoginData.csv');
const fileContent = fs.readFileSync(csvPath, 'utf8');

const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});

// Step 2: Loop through CSV records and run tests
for (const csd of records) {
  test(`Login test with TestId: ${csd.TestId}`, async ({ page }) => {
    console.log(`Running test with username: ${csd.UserName}`);

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.fill('#username', csd.UserName);
    await page.fill('#password', csd.Password);
    await page.click('.decorativeSubmit');

    // Optional: Verify login success
    await page.waitForSelector('text=Welcome', { timeout: 5000 });
  });
}
