import {expect, test} from '@playwright/test'

test('Visual integrattion testing', async({page})=>{

    await page.goto('https://www.testleaf.com/')
    const ss= await page.screenshot()
    expect(ss).toMatchSnapshot();
})

// percy npm install --save-dev @percy/playwright

test.only('Visual integrattion', async({page})=>{

    await page.goto('https://www.testleaf.com/')

    const ele=page.locator('#username')
    const ss= await ele.screenshot()
    expect(ss).toMatchSnapshot();
})

