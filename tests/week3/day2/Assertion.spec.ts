import test, { expect, Locator } from "@playwright/test"


test("Auto Retry Assertion", async({page})=>{
    await page.goto("https://leafground.com/input.xhtml")

    await expect(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:10000})

    console.log("completed")
})

test("Soft Assertion", async({page})=>{
    await page.goto("https://leafground.com/input.xhtml")

    await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeEnabled({timeout:10000})

    console.log("Soft Assert")
})

test("Non retry assertion", async({page})=>{
    await page.goto("https://leafground.com/input.xhtml")
    const title=await page.title()
    console.log(title)
})
