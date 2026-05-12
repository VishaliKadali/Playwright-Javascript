import { playwrightWrapper } from './WrapperClass';

export class loginPage extends playwrightWrapper {
    async loadUrl(url:string){
        await this.page.goto(url)
    }

    async loginData(user:string,pass:string){

       
        await this.typeValue("#username",user)
        await this.clearandType("#password",pass)
     
    }
}
