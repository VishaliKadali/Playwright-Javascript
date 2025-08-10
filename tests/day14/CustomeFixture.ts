import {test as baseClass} from '@playwright/test'

//test or baseclass
//baseClass.extend<{}>({})

export const fixtures=baseClass.extend<{login:any}>({

    //login -> custome fixture name
    login:async({page},use)=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username","DemoSalesManager")
        await page.fill("#password","crmsfa")
        await page.click(".decorativeSubmit")
        await use(page)
    }
})