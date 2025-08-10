export class LoginPage{

    enterUsername(){
        console.log("DemoSalesManager")
    }

    enterPassword(){
        console.log("crmsfa")
    }

    clickLogin(){
        console.log("LoginButton")
    }


}

class welcomePage extends LoginPage{

    verifyUrl(){
        console.log("verify url")
    }
}

class HomePage extends welcomePage{
        clickOnLeads(){
            console.log("click on Leads")
        }
}

const inherit=new welcomePage()
    inherit.enterUsername();
    inherit.enterPassword();
    inherit.clickLogin();
    inherit.verifyUrl();
    



