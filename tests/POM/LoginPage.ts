import {Page} from "@playwright/test"

export class LoginPage{
    loginData(arg0: string, arg1: string) {
        throw new Error('Method not implemented.')
    }
    page:Page //empty user defined variable which is type page(PW)

    constructor(page:Page){
        this.page=page
    }

    async loadUrl(p0: string){
        await this.page.goto("http://leaftaps.com/opentaps/control/main")
    }

    async userDetails(){
        await this.page.fill("#username","democsr")
        await this.page.fill("#password","crmsfa")
    }

    async clickLogin(){
        await this.page.click(".decorativeSubmit")
    }


}