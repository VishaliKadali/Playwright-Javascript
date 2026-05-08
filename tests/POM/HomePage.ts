import { WelcomePage } from "./WelcomePage";

export class HomePage extends WelcomePage{


async clickOnLogOut(){
    await this.page.click(".decorativeSubmit")
}

async clickOnLeads(){
    await this.page.click("//a[text()='Leads']")
}

async clickOnContacts(){
    await this.page.click("//a[text()='Contacts']")
}
}