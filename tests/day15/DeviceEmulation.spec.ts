import {devices,test } from '@playwright/test'


test.use({
    ...devices['Galaxy A55'] //Spread syntax does the job of concatenating two arrays
})
test('Device Emulation', async ({page}) =>{
    page.goto('https://www.testleaf.com/control/main')
    await page.waitForTimeout(15000)
} )