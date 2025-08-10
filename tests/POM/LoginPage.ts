import {Page} from "@playwright/test"

export class LoginPage{
    page:Page //empty user defined variable which is type page(PW)

    constructor(page:Page){
        this.page=page
    }

    async loadUrl(){
        await this.page.goto("http://leaftaps.com/opentaps/control/main")
    }

    async useerDetails(){
        await this.page.fill("#username","DemoSalesManager")
        await this.page.fill("#password","crmsfa")
    }

    async cllickLogin(){
        await this.page.click(".decorativeSubmit")
    }


}