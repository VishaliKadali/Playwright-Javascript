import { HomePage } from "./HomePage";

export class myLeadsPage extends HomePage{

async createLead(){
    await this.page.click("//a[text()='Create Lead']")
}

async findLeads(){
    await this.page.click("//a[text()='Find Leads']")
}

async mergeLeads(){
    await this.page.click("//a[text()='Merge Leads'])")
}

}