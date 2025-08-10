import { LoginPage } from './LoginPage'

export class WelcomePage extends LoginPage{
    async clickoncrmsfa(){
        await this.page.click("text=CRM/SFA")
    }
}