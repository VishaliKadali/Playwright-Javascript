import test from "@playwright/test";

test("Handle Frame with FrameLocator",async({page})=>{
    
await page.goto("https://www.leafground.com/frame.xhtml")

await page.frameLocator("(//iframe)[1]").locator("#click").click()

await page.waitForTimeout(4000)

await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#click").click()
await page.waitForTimeout(3000)
})