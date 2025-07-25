import test from '@playwright/test'

test("Storage state", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","DemoCsr")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.getByText("CRM/SFA").click();


    //Storage of information
    await page.context().storageState({path:"Utils/LoginStorage.json"})
})