import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage{

async clickOnCrmsfa(){
    await this.page.click("text=CRM/SFA")
}

async clickOnLogOut(){
    await this.page.click(".decorativeSubmit")
}

}