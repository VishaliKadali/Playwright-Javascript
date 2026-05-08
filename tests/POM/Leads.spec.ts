import test from '@playwright/test'
import { HomePage } from './HomePage'

test("Leads page",async({page})=>{

const pg=new HomePage(page)
await pg.loadUrl()
await pg.userDetails()
await pg.clickLogin()
await pg.clickoncrmsfa()
await pg.clickOnLeads()

})


test("Contacts Page",async({page})=>{

    const pg1=new HomePage(page)
    await pg1.loadUrl()
    await pg1.userDetails()
    await pg1.clickLogin()
    await pg1.clickoncrmsfa()
    await pg1.clickOnContacts()
})

