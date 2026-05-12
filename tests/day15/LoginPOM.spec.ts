import test from '@playwright/test'
import { loginPage } from './LoginWithWrapper'

test("Using wrappeer class", async ({page})=>{
    const lp= new loginPage(page)
    await lp.loadUrl("http://leaftaps.com/opentaps/control/main");
    await lp.loginData("Democsr", "crmsfa")

})