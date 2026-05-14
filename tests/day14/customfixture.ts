import { test as baseClass, Page } from '@playwright/test';

//test or baseclass
//baseClass.extend<{}>({})

export const test = baseClass.extend<{ login: any }>({

    //login -> custome fixture name
    login: async({ page }: { page: Page }, use: (arg0: Page) => any)=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username","democsr")
        await page.fill("#password","crmsfa")
        await page.click(".decorativeSubmit")
        await use(page)
    }
})

