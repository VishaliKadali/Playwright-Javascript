import {fixtures} from './CustomeFixture.spec'

fixtures("Login fixture in use", async({login})=>{

    await login.click("text=CRM/SFA")
    console.log(await login.title())
    
})