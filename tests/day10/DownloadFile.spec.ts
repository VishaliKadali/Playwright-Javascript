import test from '@playwright/test'

test("Download file with event Listener", async({page})=>{

    await page.goto("https://leafground.com/file.xhtml")

    const downloadPromise=page.waitForEvent('download')

    await page.getByText("Download",{exact:true}).click();

    const load=await downloadPromise

    //Set path of your file
    await load.saveAs("download/"+load.suggestedFilename() )
})